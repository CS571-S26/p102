import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

function EventCardsSection({ events, getEventLink, showVolunteerLink, onGalleryOpen }) {
  const [failedImages, setFailedImages] = useState({})

  const markImageFailed = (eventId) => {
    setFailedImages((current) => ({ ...current, [eventId]: true }))
  }

  return (
    <div className="events-section">
      <Row className="g-4 justify-content-center">
        {events.map((eventItem) => {
          const imageAltText = eventItem.imageAlt || `${eventItem.name} event image`
          const showImage = Boolean(eventItem.image) && !failedImages[eventItem.id]
          const eventLink = getEventLink ? getEventLink(eventItem) : null

          return (
          <Col key={eventItem.id} xs={12} md={6} lg={4} className="d-flex" id={`event-${eventItem.id}`}>
            <Card className="event-card w-100">
              {showImage ? (
                <Card.Img
                  variant="top"
                  src={eventItem.image}
                  alt={imageAltText}
                  className="event-image"
                  onError={() => markImageFailed(eventItem.id)}
                />
              ) : (
                <div className="event-image event-image-fallback" role="img" aria-label={imageAltText}>
                  {imageAltText}
                </div>
              )}
              <Card.Body>
                <Card.Title>{eventItem.name}</Card.Title>
                <Card.Text className="event-meta">
                  <strong>Date:</strong>{' '}
                  {eventLink ? (
                    <Link to={eventLink} className="event-date-link-plain">
                      {eventItem.date}
                    </Link>
                  ) : (
                    eventItem.date
                  )}
                </Card.Text>
                {eventItem.time && (
                  <Card.Text className="event-meta">
                    <strong>Time:</strong> {eventItem.time}
                  </Card.Text>
                )}
                <Card.Text className="event-meta mb-0">
                  <strong>Location:</strong> {eventItem.location}
                </Card.Text>

                {showVolunteerLink && (
                  <Card.Text className="event-meta mt-2 mb-0">
                    {eventItem.volunteerLink ? (
                      <a href={eventItem.volunteerLink} target="_blank" rel="noreferrer" className="event-volunteer-link">
                        Volunteer for this event →
                      </a>
                    ) : (
                      <span className="event-volunteer-placeholder">Volunteer sign-up coming soon</span>
                    )}
                  </Card.Text>
                )}

                {onGalleryOpen && (
                  <button
                    type="button"
                    className="event-gallery-btn"
                    onClick={() => onGalleryOpen(eventItem.id)}
                  >
                    View Photos
                  </button>
                )}
              </Card.Body>
            </Card>
          </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default EventCardsSection
