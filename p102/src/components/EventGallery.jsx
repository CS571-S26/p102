import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/EventGallery.css'

function EventGallery({ event, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const dialogRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const hasPhotos = event.gallery && event.gallery.length > 0

  return (
    <div className="gallery-overlay" role="dialog" aria-modal="true" aria-label={`${event.name} photo gallery`} ref={dialogRef}>
      <div className="gallery-panel">
        <div className="gallery-header">
          <h2>{event.name} — Photos</h2>
          <button type="button" className="gallery-close-btn" onClick={onClose} aria-label="Close gallery">
            ✕
          </button>
        </div>

        {hasPhotos ? (
          <div className="gallery-grid">
            {event.gallery.map((photo, i) => (
              <button
                key={i}
                type="button"
                className="gallery-thumb-btn"
                onClick={() => setLightboxIndex(i)}
                aria-label={photo.alt || `Photo ${i + 1}`}
              >
                <img src={photo.src} alt={photo.alt || `${event.name} photo ${i + 1}`} className="gallery-thumb" />
              </button>
            ))}
          </div>
        ) : (
          <p className="gallery-empty">No photos have been added for this event yet.</p>
        )}

        <p className="gallery-share-note">
          Have photos from this event? Send them through the <Link to="/contact" className="gallery-contact-link">Contact Us</Link> page and we can add them.
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full-size photo"
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={event.gallery[lightboxIndex].src}
            alt={event.gallery[lightboxIndex].alt || `${event.name} photo ${lightboxIndex + 1}`}
            className="gallery-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="gallery-close-btn gallery-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo"
          >
            ✕
          </button>
          {lightboxIndex > 0 && (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1) }}
              aria-label="Previous photo"
            >‹</button>
          )}
          {lightboxIndex < event.gallery.length - 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1) }}
              aria-label="Next photo"
            >›</button>
          )}
        </div>
      )}
    </div>
  )
}

export default EventGallery
