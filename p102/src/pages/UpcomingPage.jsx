import PageContent from '../components/PageContent'
import EventCardsSection from '../components/EventCardsSection'
import upcomingEvents from '../data/upcomingEvents'

function UpcomingPage() {
  return (
    <PageContent title="Upcoming Events" description="Check out what is coming up next.">
      <EventCardsSection events={upcomingEvents} />
    </PageContent>
  )
}

export default UpcomingPage
