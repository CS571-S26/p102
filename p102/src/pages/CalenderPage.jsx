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

// Returns a semester label like "Spring 2026" or "Fall 2025"
const getSemester = (date) => {
  const month = date.getMonth() + 1 // 1-12
  const year = date.getFullYear()
  if (month >= 1 && month <= 5) return `Spring ${year}`
  if (month >= 8 && month <= 12) return `Fall ${year}`
  return `Summer ${year}`
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

  // Build ordered list of semester groups
  const semesterGroups = []
  const seenSemesters = new Map()
  allEvents.forEach((eventItem, index) => {
    const label = getSemester(eventItem.parsedDate)
    if (!seenSemesters.has(label)) {
      seenSemesters.set(label, semesterGroups.length)
      semesterGroups.push({ label, events: [] })
    }
    semesterGroups[seenSemesters.get(label)].events.push({ eventItem, index })
  })

  return (
    <PageContent
      title="Calender"
      description="View important event dates and plan your semester schedule."
    >
      <div className="calendar-list-wrapper" aria-live="polite">
        {semesterGroups.map((group) => (
          <section key={group.label} className="calendar-semester-group">
            <h2 className="calendar-semester-heading">{group.label}</h2>
            <ul className="calendar-list" aria-label={`${group.label} events`}>
              {group.events.map(({ eventItem, index }) => {
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
                        <h3>{eventItem.name}</h3>
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
          </section>
        ))}
      </div>
    </PageContent>
  )
}

export default CalenderPage
