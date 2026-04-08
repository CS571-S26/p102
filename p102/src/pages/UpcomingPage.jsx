import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageContent from '../components/PageContent'
import EventCardsSection from '../components/EventCardsSection'
import upcomingEvents from '../data/upcomingEvents'

function UpcomingPage() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const selectedEvent = searchParams.get('event')
    if (!selectedEvent) {
      return
    }

    const eventElement = document.getElementById(`event-${selectedEvent}`)
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [searchParams])

  return (
    <PageContent title="Upcoming Events" description="Check out what is coming up next.">
      <EventCardsSection events={upcomingEvents} getEventLink={(eventItem) => `/calender?event=${eventItem.id}`} />
    </PageContent>
  )
}

export default UpcomingPage
