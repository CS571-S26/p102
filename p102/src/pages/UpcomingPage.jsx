import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageContent from '../components/PageContent'
import EventCardsSection from '../components/EventCardsSection'
import upcomingEvents from '../data/upcomingEvents'
import '../styles/UpcomingPage.css'

const parseEventDate = (dateString) => {
  const [month, day, year] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const today = () => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function useCountdown(targetDate) {
  const getTimeLeft = () => {
    const now = new Date()
    const diff = targetDate - now
    if (diff <= 0) return null
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  })
  return timeLeft
}

function UpcomingPage() {
  const [searchParams] = useSearchParams()

  const activeEvents = upcomingEvents
    .map((e) => ({ ...e, parsedDate: parseEventDate(e.date) }))
    .filter((e) => e.parsedDate >= today())

  const nextEvent = activeEvents
    .slice()
    .sort((a, b) => a.parsedDate - b.parsedDate)[0]

  const countdown = useCountdown(nextEvent ? nextEvent.parsedDate : null)

  useEffect(() => {
    const selectedEvent = searchParams.get('event')
    if (!selectedEvent) return
    const eventElement = document.getElementById(`event-${selectedEvent}`)
    if (eventElement) eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [searchParams])

  return (
    <PageContent title="Upcoming Events">
      {nextEvent && countdown && (
        <div className="countdown-banner" aria-live="polite">
          <div className="countdown-label">
            <span className="countdown-event-sub">Next Event</span>
            <strong className="countdown-event-name">{nextEvent.name}</strong>
          </div>
          <div className="countdown-tiles">
            {[['Days', countdown.days], ['Hours', countdown.hours], ['Mins', countdown.minutes], ['Secs', countdown.seconds]].map(([unit, val]) => (
              <div key={unit} className="countdown-tile">
                <span className="countdown-value">{String(val).padStart(2, '0')}</span>
                <span className="countdown-unit">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <EventCardsSection
        events={activeEvents}
        getEventLink={(eventItem) => `/calender?event=${eventItem.id}`}
        showVolunteerLink
      />
    </PageContent>
  )
}

export default UpcomingPage
