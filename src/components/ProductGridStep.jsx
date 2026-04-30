function ProductGridStep({
  title,
  subtitle,
  products,
  selectedId,
  onSelect,
  onAddFeedback,
  renderPrice,
  showUnavailableHint = false,
}) {
  return (
    <section className="step">
      <h2>{title}</h2>
      {subtitle && <p className="subtle">{subtitle}</p>}
      {showUnavailableHint && products.length === 0 ? (
        <p className="empty">No items available yet. Please complete Event Basics first.</p>
      ) : (
        <div className="store-grid">
          {products.map((item) => (
            <article key={item.id} className={`product-card ${selectedId === item.id ? 'selected' : ''}`}>
              <img src={item.image} alt={item.name} />
              <div className="product-content">
                <h3>{item.name}</h3>
                <p>{renderPrice(item)}</p>
                <button
                  className="btn primary"
                  onClick={() => {
                    onSelect(item.id)
                    onAddFeedback(item.name)
                  }}
                >
                  {selectedId === item.id ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductGridStep
