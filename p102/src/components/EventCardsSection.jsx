import { Card, Col, Row } from 'react-bootstrap'

function EventCardsSection({ events }) {
  return (
    <div className="events-section">
      <Row className="g-4 justify-content-center">
        {events.map((eventItem) => (
          <Col key={eventItem.id} xs={12} md={6} lg={4} className="d-flex">
            <Card className="event-card w-100">
              <Card.Img variant="top" src={eventItem.image} alt={eventItem.name} className="event-image" />
              <Card.Body>
                <Card.Title>{eventItem.name}</Card.Title>
                <Card.Text className="event-meta">
                  <strong>Date:</strong> {eventItem.date}
                </Card.Text>
                {eventItem.time && (
                  <Card.Text className="event-meta">
                    <strong>Time:</strong> {eventItem.time}
                  </Card.Text>
                )}
                <Card.Text className="event-meta mb-0">
                  <strong>Location:</strong> {eventItem.location}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default EventCardsSection
