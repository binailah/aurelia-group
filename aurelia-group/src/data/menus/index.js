import signatureHouse from './signature-house.js'
import familyCollection from './family-collection.js'
import businessExecutive from './business-executive.js'
import socialClub from './social-club.js'
import resortHouse from './resort-house.js'

import edinburgh from './heritage/edinburgh.js'
import istanbul from './heritage/istanbul.js'
import almaty from './heritage/almaty.js'
import riyadh from './heritage/riyadh.js'
import jeddah from './heritage/jeddah.js'
import baku from './heritage/baku.js'
import yerevan from './heritage/yerevan.js'

export const sharedMenus = {
  'signature-house': signatureHouse,
  'family-collection': familyCollection,
  'business-executive': businessExecutive,
  'social-club': socialClub,
  'resort-house': resortHouse,
}

export const heritageMenus = {
  edinburgh, istanbul, almaty, riyadh, jeddah, baku, yerevan,
}

export const getSharedMenu = (collectionSlug) => sharedMenus[collectionSlug]
export const getHeritageMenu = (key) => heritageMenus[key]
