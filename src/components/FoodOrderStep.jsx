function FoodOrderStep({ products, orders, totals, money, onSetFoodOrder, onSetPasobra, onAddFeedback }) {
  const clampForItem = (nextValue) => {
    const safeNext = Number.isFinite(nextValue) ? Math.max(0, Math.floor(nextValue)) : 0
    return Math.min(safeNext, totals.foodLimit)
  }

  return (
    <section className="step">
      <h2>Food Store</h2>
      <p className="subtle">
        Set quantity per food type. Max per food item: {totals.maxWithoutExtra}
        {totals.allowPasobra ? ` + ${totals.pasobraAllowance} pasobra allowance` : ''}.
      </p>

      <label className="pasobra-toggle">
        <input type="checkbox" checked={totals.allowPasobra} onChange={(e) => onSetPasobra(e.target.checked)} />
        <span>
          Add pasobra allowance (+10%) for extra servings. Useful for unexpected guests, last-minute staff meals, or
          buffer portions.
        </span>
      </label>

      <p className="subtle">Each food type can be ordered up to {totals.foodLimit} servings.</p>

      <div className="store-grid">
        {products.map((item) => {
          const qty = Number(orders[item.id] || 0)
          const maxForThisItem = totals.foodLimit
          return (
            <article key={item.id} className={`product-card ${qty > 0 ? 'selected' : ''}`}>
              <img src={item.image} alt={item.name} />
              <div className="product-content">
                <h3>{item.name}</h3>
                <p>{money(item.price)} per order</p>
                <div className="qty-row">
                  <input
                    type="number"
                    min="0"
                    max={maxForThisItem}
                    placeholder="0"
                    value={qty === 0 ? '' : qty}
                    onChange={(e) => {
                      const raw = e.target.value
                      if (raw === '') {
                        onSetFoodOrder(item.id, 0)
                        return
                      }
                      const clamped = clampForItem(Number(raw))
                      onSetFoodOrder(item.id, clamped)
                    }}
                    onBlur={(e) => {
                      if (e.target.value === '') {
                        onSetFoodOrder(item.id, 0)
                        return
                      }
                      const clamped = clampForItem(Number(e.target.value))
                      onSetFoodOrder(item.id, clamped)
                    }}
                  />
                  <button
                    className="btn primary"
                    onClick={() => {
                      const clamped = clampForItem(qty + 1)
                      onSetFoodOrder(item.id, clamped)
                      if (clamped > qty) onAddFeedback(`${item.name} (+1)`)
                    }}
                    disabled={qty >= maxForThisItem}
                  >
                    +1 Quick Add
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FoodOrderStep
