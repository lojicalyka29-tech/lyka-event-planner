function AddToCartToast({ itemName }) {
  if (!itemName) return null

  return (
    <div className="cart-toast">
      <span className="sparkle">✨</span>
      <div>
        <p>Added to cart</p>
        <strong>{itemName}</strong>
      </div>
      <span className="sparkle">🛒</span>
    </div>
  )
}

export default AddToCartToast
