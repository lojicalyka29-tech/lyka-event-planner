function ReviewStep({ basics, totals, customer, money, onEdit }) {
  return (
    <section className="step">
      <h2>Review & Submit</h2>
      <div className="review">
        <div>
          <p className="label">Event Basics</p>
          <p>
            {basics.eventType} | {basics.eventDate || 'No date selected'} | {basics.guestCount} guests
          </p>
          <button className="link" onClick={() => onEdit(1)}>
            Edit Event Basics
          </button>
        </div>
        <div>
          <p className="label">Venue in Cart</p>
          {totals.venue ? (
            <>
              <img className="review-image" src={totals.venue.image} alt={totals.venue.name} />
              <p>{totals.venue.name}</p>
            </>
          ) : (
            <p>No venue selected</p>
          )}
          <button className="link" onClick={() => onEdit(2)}>
            Edit Venue
          </button>
        </div>
        <div>
          <p className="label">Food in Cart</p>
          {totals.foodItems.length ? (
            <>
              <p>
                {totals.foodItems.map((food) => `${food.name} x ${food.quantity}`).join(', ')}
              </p>
              <p>
                Total meals ordered: {totals.totalFoodQty} (per-food max: {totals.foodLimit})
                {totals.allowPasobra ? ` (with +${totals.pasobraAllowance} pasobra)` : ''}
              </p>
            </>
          ) : (
            <p>No food selected</p>
          )}
          <button className="link" onClick={() => onEdit(3)}>
            Edit Food
          </button>
        </div>
        <div>
          <p className="label">Essentials in Cart</p>
          <p>{totals.essentials.length ? totals.essentials.map((i) => i.name).join(', ') : 'No extras selected'}</p>
          <button className="link" onClick={() => onEdit(4)}>
            Edit Necessities
          </button>
        </div>
      </div>
      <div className="cost-breakdown">
        <h3>Full Cost Breakdown</h3>
        <p>
          <span>Venue</span>
          <strong>{money(totals.venueTotal)}</strong>
        </p>
        <p>
          <span>Food</span>
          <strong>{money(totals.foodTotal)}</strong>
        </p>
        <p>
          <span>Necessities</span>
          <strong>{money(totals.essentialsTotal)}</strong>
        </p>
        <p className="grand">
          <span>Total</span>
          <strong>{money(totals.grandTotal)}</strong>
        </p>
      </div>
      <div className="cost-breakdown">
        <h3>Billing</h3>
        <p>
          <span>Subtotal</span>
          <strong>{money(totals.subtotal)}</strong>
        </p>
        <p>
          <span>Service Fee (5%)</span>
          <strong>{money(totals.serviceFee)}</strong>
        </p>
        <p>
          <span>VAT (12%)</span>
          <strong>{money(totals.vat)}</strong>
        </p>
        <p className="grand">
          <span>Amount Due</span>
          <strong>{money(totals.billingTotal)}</strong>
        </p>
      </div>
      <div className="customer-mini">
        <p className="label">Contact</p>
        <p>
          {customer.name} | {customer.email} | {customer.phone}
        </p>
      </div>
    </section>
  )
}

export default ReviewStep
