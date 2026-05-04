import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import logo from './assets/LykaLogo.png'
import AddToCartToast from './components/AddToCartToast'
import BasicsStep from './components/BasicsStep'
import CartPreview from './components/CartPreview'
import ConfirmationScreen from './components/ConfirmationScreen'
import EssentialsStep from './components/EssentialsStep'
import FoodOrderStep from './components/FoodOrderStep'
import PersonalDetailsStep from './components/PersonalDetailsStep'
import ProductGridStep from './components/ProductGridStep'
import ReviewStep from './components/ReviewStep'
import StepProgress from './components/StepProgress'
import { getEssentialsProducts, getFoodProducts } from './data/catalog'
import {
  goBack,
  goNext,
  resetPlanner,
  selectAvailableVenues,
  selectCartTotals,
  selectVenue,
  setAllowPasobra,
  setFoodOrder,
  setStep,
  submitPlanner,
  toggleEssential,
  updateBasics,
  updateCustomer,
} from './store/plannerSlice'

const money = (value) =>
  new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(value)

function App() {
  const dispatch = useDispatch()
  const { step, submitted, basics, cart, customer } = useSelector((state) => state.planner)
  const availableVenues = useSelector(selectAvailableVenues)
  const totals = useSelector(selectCartTotals)
  const [toastItem, setToastItem] = useState('')
  const [cartPulse, setCartPulse] = useState(false)
  const [mobileCartOpen, setMobileCartOpen] = useState(false)
  const foodProducts = useMemo(() => getFoodProducts(basics.eventType), [basics.eventType])
  const essentialsProducts = useMemo(() => getEssentialsProducts(basics.eventType), [basics.eventType])

  const stepValid = useMemo(() => {
    if (step === 1) return basics.eventDate && Number(basics.guestCount) > 0
    if (step === 2) return !!cart.venueId
    if (step === 3) return totals.totalFoodQty > 0
    if (step === 4) return true
    if (step === 5) return customer.name.trim() && customer.email.trim() && customer.phone.trim()
    return true
  }, [step, basics, customer, cart.venueId, totals.totalFoodQty])

  useEffect(() => {
    if (!toastItem) return undefined
    const timeout = setTimeout(() => setToastItem(''), 1400)
    return () => clearTimeout(timeout)
  }, [toastItem])

  useEffect(() => {
    if (!cartPulse) return undefined
    const timeout = setTimeout(() => setCartPulse(false), 520)
    return () => clearTimeout(timeout)
  }, [cartPulse])

  const showAddFeedback = (name) => {
    setToastItem(name)
    setCartPulse(true)
  }

  if (submitted) {
    return (
      <ConfirmationScreen
        customer={customer}
        basics={basics}
        totals={totals}
        money={money}
        onReset={() => dispatch(resetPlanner())}
      />
    )
  }

  return (
    <main className="planner-app">
      <button className="mobile-cart-toggle" onClick={() => setMobileCartOpen(true)} aria-label="Open order preview">
        🛒
      </button>

      <section className="app-shell">
        <section className="card">
          <header className="header">
            <img src={logo} alt="Lyka Lojica Events and Co." className="brand-logo" />
            <h1>LYKA
            Events & Co.</h1>
            <p className="subtle">Choose items, add them to cart, and submit in a clear 6-step flow.</p>
          </header>

          <StepProgress step={step} />
          <div className="step-nav-top">
            <button className="btn ghost arrow-btn" onClick={() => dispatch(goBack())} disabled={step === 1}>
              ← Back
            </button>
            {step < 6 ? (
              <button className="btn primary arrow-btn" onClick={() => dispatch(goNext())} disabled={!stepValid}>
                Continue →
              </button>
            ) : (
              <button className="btn primary arrow-btn" onClick={() => dispatch(submitPlanner())}>
                Confirm Order →
              </button>
            )}
          </div>

          <div key={step} className="step-slide-right">
            {step === 1 && <BasicsStep basics={basics} onChange={(payload) => dispatch(updateBasics(payload))} />}

            {step === 2 && (
              <ProductGridStep
                title="Venue Store"
                subtitle={`Showing 10 ${basics.eventType.toLowerCase()} venue options. Filtered by date and guest count.`}
                products={availableVenues}
                selectedId={cart.venueId}
                onSelect={(id) => dispatch(selectVenue(id))}
                onAddFeedback={showAddFeedback}
                renderPrice={(item) => `${money(item.price)} | capacity ${item.capacity}`}
                showUnavailableHint
              />
            )}

            {step === 3 && (
              <FoodOrderStep
                products={foodProducts}
                orders={cart.foodOrders}
                totals={totals}
                onSetFoodOrder={(foodId, quantity) => dispatch(setFoodOrder({ foodId, quantity }))}
                onSetPasobra={(enabled) => dispatch(setAllowPasobra(enabled))}
                onAddFeedback={showAddFeedback}
                money={money}
              />
            )}

            {step === 4 && (
              <EssentialsStep
                products={essentialsProducts}
                selectedIds={cart.essentialsIds}
                onToggle={(id) => dispatch(toggleEssential(id))}
                onAddFeedback={showAddFeedback}
                money={money}
              />
            )}

            {step === 5 && (
              <PersonalDetailsStep customer={customer} onChange={(payload) => dispatch(updateCustomer(payload))} />
            )}

            {step === 6 && (
              <ReviewStep
                basics={basics}
                customer={customer}
                totals={totals}
                money={money}
                onEdit={(targetStep) => dispatch(setStep(targetStep))}
              />
            )}
          </div>

        </section>

        <CartPreview totals={totals} money={money} pulse={cartPulse} />
      </section>

      {mobileCartOpen ? (
        <div className="mobile-cart-overlay" onClick={() => setMobileCartOpen(false)}>
          <div className="mobile-cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-cart-head">
              <h3>Current Order Preview</h3>
              <button className="btn ghost" onClick={() => setMobileCartOpen(false)}>
                Close
              </button>
            </div>
            <CartPreview totals={totals} money={money} pulse={cartPulse} />
          </div>
        </div>
      ) : null}

      <AddToCartToast itemName={toastItem} />
    </main>
  )
}

export default App
