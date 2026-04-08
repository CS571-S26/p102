import { Link, useSearchParams } from 'react-router-dom'
import PageContent from '../components/PageContent'
import pastEvents from '../data/pastEvents'
import upcomingEvents from '../data/upcomingEvents'

const parseEventDate = (dateString) => {
  const [month, day, year] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const toTodayAtMidnight = () => {
  const today = new Date()
  return new Date(today.getFullYear(), today.getMonth(), today.getDate())
}

function CalenderPage() {
  const [searchParams] = useSearchParams()

  const allEvents = [
    ...pastEvents.map((eventItem) => ({ ...eventItem, source: 'past' })),
    ...upcomingEvents.map((eventItem) => ({ ...eventItem, source: 'upcoming' })),
  ]
    .map((eventItem) => ({
      ...eventItem,
      parsedDate: parseEventDate(eventItem.date),
    }))
    .sort((a, b) => a.parsedDate - b.parsedDate)

  const today = toTodayAtMidnight()
  const nextEventIndex = allEvents.findIndex((eventItem) => eventItem.parsedDate >= today)
  const selectedEventId = searchParams.get('event')

  return (
    <PageContent
      title="Calender"
      description="View important event dates and plan your semester schedule."
    >
      <div className="calendar-list-wrapper" aria-live="polite">
        <ul className="calendar-list" aria-label="Events sorted by date">
          {allEvents.map((eventItem, index) => {
            const isNextEvent = index === nextEventIndex
            const isSelectedEvent = selectedEventId === eventItem.id
            const eventDestination = `/${eventItem.source}?event=${eventItem.id}`

            return (
              <li
                key={eventItem.id}
                className={`calendar-item ${isNextEvent ? 'calendar-item-next' : ''} ${isSelectedEvent ? 'calendar-item-selected' : ''}`}
              >
                <Link to={eventDestination} className="calendar-item-link">
                  <div className="calendar-date">{eventItem.date}</div>
                  <div className="calendar-details">
                    <h2>{eventItem.name}</h2>
                    {isNextEvent && <span className="calendar-next-badge">Next Event</span>}
                    {eventItem.time && (
                      <p>
                        <strong>Time:</strong> {eventItem.time}
                      </p>
                    )}
                    <p>
                      <strong>Location:</strong> {eventItem.location}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </PageContent>
  )
}

export default CalenderPage
