function ConfirmationScreen({ customer, basics, totals, money, onReset }) {
  return (
    <main className="planner-app">
      <section className="card confirmation">
        <p className="chip">Order Confirmed</p>
        <h1>Thanks, {customer.name || 'Guest'}!</h1>
        <p>
          Your event package request for <strong>{basics.eventDate || 'your chosen date'}</strong> is now in our queue.
        </p>
        <div className="summary-grid">
          <div>
            <p className="label">Event</p>
            <p>{basics.eventType}</p>
          </div>
          <div>
            <p className="label">Guests</p>
            <p>{basics.guestCount}</p>
          </div>
          <div>
            <p className="label">Total</p>
            <p>{money(totals.grandTotal)}</p>
          </div>
        </div>
        <p className="next-steps">
          Next steps: We will contact you within 24 hours to confirm schedule, availability, and payment options.
        </p>
        <button className="btn primary" onClick={onReset}>
          Start New Plan
        </button>
      </section>
    </main>
  )
}

export default ConfirmationScreen
