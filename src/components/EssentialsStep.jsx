function EssentialsStep({ products, selectedIds, onToggle, onAddFeedback, money }) {
  return (
    <section className="step">
      <h2>Necessities Store</h2>
      <p className="subtle">Pick only what you need and add it to your cart.</p>
      <div className="store-grid">
        {products.map((item) => {
          const selected = selectedIds.includes(item.id)
          return (
            <article key={item.id} className={`product-card ${selected ? 'selected' : ''}`}>
              <img src={item.image} alt={item.name} />
              <div className="product-content">
                <h3>{item.name}</h3>
                <p>{money(item.price)}</p>
                <button
                  className="btn primary"
                  onClick={() => {
                    onToggle(item.id)
                    onAddFeedback(item.name)
                  }}
                >
                  {selected ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default EssentialsStep
