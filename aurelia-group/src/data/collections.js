// Six Aurelia Group collections. Slugs are used for /collections/:slug and /menus/:slug routes.
export const collections = [
  {
    slug: 'signature-house',
    name: 'Signature House',
    tagline: 'The flagship. The face of the brand.',
    positioning: 'Flagship fine dining and the highest level of refinement in the Aurelia portfolio — quiet European luxury built on classical technique.',
    mood: 'Walnut, ivory and aged brass. Dark-academia restraint. The atmosphere of a private European dining room.',
    menuType: 'shared',
    menuFile: 'signature-house',
  },
  {
    slug: 'family-collection',
    name: 'Family Collection',
    tagline: 'The most overlooked gap in the luxury market.',
    positioning: 'Premium family dining that never becomes childish — warm, comfortable and unmistakably Aurelia.',
    mood: 'Softer light, rounder detailing, the same quality of ingredient and service as Signature House, at an everyday register.',
    menuType: 'shared',
    menuFile: 'family-collection',
  },
  {
    slug: 'business-executive',
    name: 'Business & Executive House',
    tagline: 'Where deals are made.',
    positioning: 'Discreet power dining for corporate entertaining, private meetings and the express lunch — speed and quality are not opposites here.',
    mood: 'Architectural, precise, understated. Marble, dark wood, low noise.',
    menuType: 'shared',
    menuFile: 'business-executive',
  },
  {
    slug: 'social-club',
    name: 'Social Club',
    tagline: 'Restaurant by day. Stage by night.',
    positioning: 'The same room holds two personalities — refined dining that gives way to music and a later, more energetic hour.',
    mood: 'Cinematic evening light, sharing-format dishes built for spectacle, without losing the Aurelia hand.',
    menuType: 'shared',
    menuFile: 'social-club',
  },
  {
    slug: 'resort-house',
    name: 'Resort House',
    tagline: 'Luxury wears linen here.',
    positioning: 'Relaxed, seasonal, seafood-forward dining in destination locations — slower than Signature House, still exacting.',
    mood: 'Natural materials, sea and sun, tactile textures, a slower rhythm to the room.',
    menuType: 'shared',
    menuFile: 'resort-house',
  },
  {
    slug: 'heritage-collection',
    name: 'Heritage Collection',
    tagline: 'A love letter to the culinary tradition of its country.',
    positioning: 'Each Heritage restaurant carries a completely unique menu, developed with local food historians and rooted in genuine local tradition — never folkloric, always contemporary.',
    mood: 'Each property has its own distinct identity within the Aurelia system, shaped entirely by its country.',
    menuType: 'unique',
  },
]

export const getCollection = (slug) => collections.find((c) => c.slug === slug)
