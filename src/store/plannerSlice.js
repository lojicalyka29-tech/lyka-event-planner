import { createSlice } from '@reduxjs/toolkit'
import { getEssentialsProducts, getFoodProducts, getVenueProducts } from '../data/catalog'

const initialState = {
  step: 1,
  submitted: false,
  basics: {
    eventType: 'Birthday',
    eventDate: '',
    guestCount: 50,
    budget: '',
  },
  cart: {
    venueId: '',
    foodOrders: {},
    allowPasobra: false,
    essentialsIds: [],
  },
  customer: {
    name: '',
    email: '',
    phone: '',
    requests: '',
  },
}

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload
    },
    goNext(state) {
      state.step = Math.min(state.step + 1, 6)
    },
    goBack(state) {
      state.step = Math.max(state.step - 1, 1)
    },
    updateBasics(state, action) {
      state.basics = { ...state.basics, ...action.payload }
      if (action.payload.eventDate !== undefined || action.payload.guestCount !== undefined) {
        state.cart.venueId = ''
      }
    },
    selectVenue(state, action) {
      state.cart.venueId = action.payload
    },
    setFoodOrder(state, action) {
      const { foodId, quantity } = action.payload
      const parsed = Number(quantity)
      if (!Number.isFinite(parsed) || parsed <= 0) {
        delete state.cart.foodOrders[foodId]
      } else {
        state.cart.foodOrders[foodId] = Math.floor(parsed)
      }
    },
    setAllowPasobra(state, action) {
      state.cart.allowPasobra = !!action.payload
    },
    toggleEssential(state, action) {
      const id = action.payload
      if (state.cart.essentialsIds.includes(id)) {
        state.cart.essentialsIds = state.cart.essentialsIds.filter((item) => item !== id)
      } else {
        state.cart.essentialsIds.push(id)
      }
    },
    updateCustomer(state, action) {
      state.customer = { ...state.customer, ...action.payload }
    },
    submitPlanner(state) {
      state.submitted = true
    },
    resetPlanner() {
      return initialState
    },
  },
})

const byId = (items, id) => items.find((item) => item.id === id)

export const selectAvailableVenues = (state) => {
  const { eventDate, guestCount, eventType } = state.planner.basics
  const venueProducts = getVenueProducts(eventType)
  if (!eventDate || !guestCount) return []
  return venueProducts.filter(
    (venue) => venue.capacity >= Number(guestCount) && !venue.unavailableDates.includes(eventDate),
  )
}

export const selectCartTotals = (state) => {
  const { guestCount, eventType } = state.planner.basics
  const { venueId, foodOrders, essentialsIds, allowPasobra } = state.planner.cart
  const venueProducts = getVenueProducts(eventType)
  const foodProducts = getFoodProducts(eventType)
  const essentialsProducts = getEssentialsProducts(eventType)

  const venue = byId(venueProducts, venueId)
  const essentials = essentialsProducts.filter((item) => essentialsIds.includes(item.id))
  const foodItems = foodProducts
    .map((food) => ({ ...food, quantity: Number(foodOrders[food.id] || 0) }))
    .filter((food) => food.quantity > 0)

  const venueTotal = venue ? venue.price : 0
  const foodTotal = foodItems.reduce((sum, food) => sum + food.price * food.quantity, 0)
  const essentialsTotal = essentials.reduce((sum, item) => sum + item.price, 0)
  const totalFoodQty = foodItems.reduce((sum, food) => sum + food.quantity, 0)
  const maxWithoutExtra = venue ? venue.capacity : Number(guestCount || 0)
  const pasobraAllowance = allowPasobra ? Math.ceil(maxWithoutExtra * 0.1) : 0
  const foodLimit = maxWithoutExtra + pasobraAllowance
  const subtotal = venueTotal + foodTotal + essentialsTotal
  const serviceFee = Math.round(subtotal * 0.05)
  const vat = Math.round(subtotal * 0.12)
  const billingTotal = subtotal + serviceFee + vat

  return {
    venue,
    foodItems,
    essentials,
    totalFoodQty,
    foodLimit,
    maxWithoutExtra,
    pasobraAllowance,
    allowPasobra,
    venueTotal,
    foodTotal,
    essentialsTotal,
    grandTotal: subtotal,
    subtotal,
    serviceFee,
    vat,
    billingTotal,
  }
}

export const {
  setStep,
  goNext,
  goBack,
  updateBasics,
  selectVenue,
  setFoodOrder,
  setAllowPasobra,
  toggleEssential,
  updateCustomer,
  submitPlanner,
  resetPlanner,
} = plannerSlice.actions

export default plannerSlice.reducer
