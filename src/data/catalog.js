const OCCASIONS = ['Birthday', 'Wedding', 'Corporate', 'Anniversary']

const occasionKeywords = {
  Birthday: {
    venue: 'birthday party venue balloons',
    food: 'birthday catering dessert table',
    essentials: 'birthday decorations photography dj',
  },
  Wedding: {
    venue: 'wedding reception venue floral',
    food: 'wedding buffet catering gourmet',
    essentials: 'wedding decor photographer music band',
  },
  Corporate: {
    venue: 'corporate event hall conference',
    food: 'corporate catering plated meal',
    essentials: 'corporate stage setup photographer sound system',
  },
  Anniversary: {
    venue: 'anniversary dinner venue elegant',
    food: 'anniversary fine dining catering',
    essentials: 'anniversary decor violinist photographer',
  },
}

const venueNames = [
  'Grand Hall',
  'Garden Pavilion',
  'Skyline Ballroom',
  'Crystal Lounge',
  'Lakeview Terrace',
  'Floral Atrium',
  'Sunset Dome',
  'Emerald Suites',
  'Pearl Function Hall',
  'Rosewood Venue',
]

const foodNames = [
  'Classic Buffet',
  'Premium Banquet',
  'Chef Signature Menu',
  'Fusion Feast',
  'Asian Favorites',
  'Western Gourmet',
  'Dessert Showcase',
  'Seafood Spread',
  'Grill Selection',
  'Luxury Plated Course',
]

const essentialNames = [
  'Floral Decor Styling',
  'Photo Team Package',
  'Live Music + Host',
  'Mood Lighting Setup',
  'Photo Booth Corner',
  'LED Wall Display',
  'Sound and Mic System',
  'Guest Souvenir Booth',
  'Emcee Program Flow',
  'Cinematic Video Coverage',
]

const unavailableDateSets = [
  ['2026-06-11'],
  ['2026-06-19'],
  ['2026-07-03'],
  ['2026-07-17'],
  ['2026-08-08'],
]

const imagePools = {
  Birthday: {
    venue: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    ],
    food: [
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=80',
    ],
    essentials: [
      'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  Wedding: {
    venue: [
      'https://images.unsplash.com/photo-1519167758481-83f29c7f0a0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80',
    ],
    food: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    ],
    essentials: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  Corporate: {
    venue: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
    ],
    food: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80',
    ],
    essentials: [
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  Anniversary: {
    venue: [
      'https://images.unsplash.com/photo-1519167758481-83f29c7f0a0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    ],
    food: [
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    ],
    essentials: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    ],
  },
}

const imageFor = (occasion, category, index) => {
  const query = occasionKeywords[occasion][category]
  const fallback = `https://images.unsplash.com/photo-1519167758481-83f29c7f0a0e?auto=format&fit=crop&w=1200&q=80`
  const pool = imagePools[occasion]?.[category]
  if (!pool || pool.length === 0) return `${fallback}&sig=${encodeURIComponent(`${query}-${index}`)}`
  return pool[index % pool.length]
}

const buildVenueProducts = (occasion) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `${occasion.toLowerCase()}-venue-${i + 1}`,
    name: `${occasion} ${venueNames[i]}`,
    price: 42000 + i * 5500,
    capacity: 60 + i * 20,
    unavailableDates: unavailableDateSets[i % unavailableDateSets.length],
    image: imageFor(occasion, 'venue', i + 1),
  }))

const buildFoodProducts = (occasion) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `${occasion.toLowerCase()}-food-${i + 1}`,
    name: `${occasion} ${foodNames[i]}`,
    price: 580 + i * 85,
    unit: 'per guest',
    image: imageFor(occasion, 'food', i + 1),
  }))

const buildEssentialsProducts = (occasion) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `${occasion.toLowerCase()}-essential-${i + 1}`,
    name: `${occasion} ${essentialNames[i]}`,
    price: 7000 + i * 1800,
    image: imageFor(occasion, 'essentials', i + 1),
  }))

const occasionCatalog = OCCASIONS.reduce((acc, occasion) => {
  acc[occasion] = {
    venues: buildVenueProducts(occasion),
    foods: buildFoodProducts(occasion),
    essentials: buildEssentialsProducts(occasion),
  }
  return acc
}, {})

export const getOccasionProducts = (eventType) => occasionCatalog[eventType] || occasionCatalog.Birthday
export const getVenueProducts = (eventType) => getOccasionProducts(eventType).venues
export const getFoodProducts = (eventType) => getOccasionProducts(eventType).foods
export const getEssentialsProducts = (eventType) => getOccasionProducts(eventType).essentials

export const steps = [
  'Event Basics',
  'Venue Store',
  'Food Store',
  'Necessities Store',
  'Personal Details',
  'Review & Submit',
]
