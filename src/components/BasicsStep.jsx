function BasicsStep({ basics, onChange }) {
  return (
    <section className="step">
      <h2>Event Basics</h2>
      <div className="grid two">
        <label>
          Event Type
          <select value={basics.eventType} onChange={(e) => onChange({ eventType: e.target.value })}>
            <option>Birthday</option>
            <option>Wedding</option>
            <option>Corporate</option>
            <option>Anniversary</option>
          </select>
        </label>
        <label>
          Event Date
          <input type="date" value={basics.eventDate} onChange={(e) => onChange({ eventDate: e.target.value })} />
        </label>
        <label>
          Guest Count
          <input
            type="number"
            min="1"
            value={basics.guestCount}
            onChange={(e) => onChange({ guestCount: Number(e.target.value) })}
          />
        </label>
        <label>
          Budget (Optional)
          <input
            type="number"
            min="0"
            value={basics.budget}
            placeholder="Example: 150000"
            onChange={(e) => onChange({ budget: e.target.value })}
          />
        </label>
      </div>
    </section>
  )
}

export default BasicsStep
