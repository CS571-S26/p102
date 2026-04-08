import PageContent from '../components/PageContent'
import EventCardsSection from '../components/EventCardsSection'
import pastEvents from '../data/pastEvents'

function PastPage() {
  return (
    <PageContent title="Past Events" description="Explore highlights.">
      <EventCardsSection events={pastEvents} />
    </PageContent>
  )
}

export default PastPage
