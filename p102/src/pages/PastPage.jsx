import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageContent from '../components/PageContent'
import EventCardsSection from '../components/EventCardsSection'
import pastEvents from '../data/pastEvents'

function PastPage() {
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
    <PageContent title="Past Events" description="Explore highlights.">
      <EventCardsSection events={pastEvents} getEventLink={(eventItem) => `/calender?event=${eventItem.id}`} />
    </PageContent>
  )
}

export default PastPage
