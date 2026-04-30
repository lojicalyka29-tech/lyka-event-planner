import logo from '../assets/LykaLogo.png'

function CartPreview({ totals, money, pulse }) {
  return (
    <aside className={`cart-preview ${pulse ? 'pulse' : ''}`}>
      <div className="cart-head">
        <img src={logo} alt="Lyka Lojica Events and Co." className="cart-logo" />
        <h3>Current Order Preview</h3>
      </div>

      <div className="cart-items">
        <div className="cart-item">
          <p className="label">Venue</p>
          {totals.venue ? (
            <>
              <img src={totals.venue.image} alt={totals.venue.name} />
              <p>{totals.venue.name}</p>
            </>
          ) : (
            <p className="muted">No venue yet</p>
          )}
        </div>

        <div className="cart-item">
          <p className="label">Food</p>
          {totals.foodItems.length ? (
            <div className="food-list">
              {totals.foodItems.slice(0, 3).map((food) => (
                <div key={food.id} className="food-line">
                  <img src={food.image} alt={food.name} />
                  <p>
                    {food.name} x {food.quantity}
                  </p>
                </div>
              ))}
              {totals.foodItems.length > 3 ? <small>+{totals.foodItems.length - 3} more food items</small> : null}
              <small>Total orders across food types: {totals.totalFoodQty}</small>
              <small>Per-food max: {totals.foodLimit}</small>
            </div>
          ) : (
            <p className="muted">No food yet</p>
          )}
        </div>

        <div className="cart-item">
          <p className="label">Necessities</p>
          {totals.essentials.length ? (
            <div className="thumb-row">
              {totals.essentials.slice(0, 4).map((item) => (
                <img key={item.id} src={item.image} alt={item.name} title={item.name} />
              ))}
              {totals.essentials.length > 4 ? <span>+{totals.essentials.length - 4}</span> : null}
            </div>
          ) : (
            <p className="muted">No extras yet</p>
          )}
        </div>
      </div>

      <div className="cost-breakdown compact">
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
        <p>
          <span>Service Fee (5%)</span>
          <strong>{money(totals.serviceFee)}</strong>
        </p>
        <p>
          <span>VAT (12%)</span>
          <strong>{money(totals.vat)}</strong>
        </p>
        <p className="grand">
          <span>Billing Total</span>
          <strong>{money(totals.billingTotal)}</strong>
        </p>
      </div>
    </aside>
  )
}

export default CartPreview
