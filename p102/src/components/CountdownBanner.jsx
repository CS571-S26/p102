function CountdownBanner({ nextEvent, countdown }) {
  if (!nextEvent || !countdown) return null

  return (
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
  )
}

export default CountdownBanner