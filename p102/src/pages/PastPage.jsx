import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageContent from '../components/PageContent'
import EventCardsSection from '../components/EventCardsSection'
import EventGallery from '../components/EventGallery'
import pastEvents from '../data/pastEvents'
import upcomingEvents from '../data/upcomingEvents'

const parseEventDate = (dateString) => {
  const [month, day, year] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function PastPage() {
  const [searchParams] = useSearchParams()
  const [openGalleryId, setOpenGalleryId] = useState(null)

  const cutoff = new Date()
  cutoff.setHours(0, 0, 0, 0)

  const expiredUpcoming = upcomingEvents
    .filter((e) => parseEventDate(e.date) < cutoff)
    .map((e) => ({ ...e, gallery: e.gallery ?? [] }))

  const allPastEvents = [...pastEvents, ...expiredUpcoming]
    .sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date))

  useEffect(() => {
    const selectedEvent = searchParams.get('event')
    if (!selectedEvent) return
    const eventElement = document.getElementById(`event-${selectedEvent}`)
    if (eventElement) eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [searchParams])

  const galleryEvent = openGalleryId ? allPastEvents.find((e) => e.id === openGalleryId) : null

  return (
    <PageContent title="Past Events" description="Explore highlights.">
      <EventCardsSection
        events={allPastEvents}
        getEventLink={(eventItem) => `/calender?event=${eventItem.id}`}
        onGalleryOpen={(eventId) => setOpenGalleryId(eventId)}
      />
      {galleryEvent && (
        <EventGallery
          event={galleryEvent}
          onClose={() => setOpenGalleryId(null)}
        />
      )}
    </PageContent>
  )
}

export default PastPage
