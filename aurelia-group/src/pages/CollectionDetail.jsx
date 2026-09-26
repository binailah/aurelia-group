import { useParams, Link, Navigate } from 'react-router-dom'
import { getCollection } from '../data/collections.js'
import { restaurantsByCollection } from '../data/restaurants.js'
import RestaurantCard from '../components/RestaurantCard.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'

export default function CollectionDetail() {
  const { slug } = useParams()
  const collection = getCollection(slug)
  if (!collection) return <Navigate to="/collections" replace />
  const houseRestaurants = restaurantsByCollection(slug)

  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/collections">Collections</Link> / {collection.name}</div>
          <div className="kicker">{collection.tagline}</div>
          <h1 style={{maxWidth: '20ch'}}>{collection.name}</h1>
          <p className="lede">{collection.positioning}</p>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="wrap two-col">
          <PlaceholderImage label={`${collection.name} — atmosphere`} variant="wide" />
          <div>
            <h3>Atmosphere</h3>
            <p>{collection.mood}</p>
            {collection.menuType === 'shared' ? (
              <p>Every restaurant in this collection shares one foundational menu, adapted with local ingredients and dishes at each address.</p>
            ) : (
              <p>Every restaurant in this collection carries a completely unique menu, rooted in the culinary tradition of its own country.</p>
            )}
            <Link to={`/menus/${collection.menuFile || collection.slug}`} className="btn">
              {collection.menuType === 'shared' ? 'View the collection menu' : 'View heritage menus'} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--parchment section--border-top">
        <div className="wrap">
          <h2 style={{marginBottom: '2rem'}}>The restaurants</h2>
          <div className="restaurant-grid">
            {houseRestaurants.map((r) => <RestaurantCard restaurant={r} key={r.slug} />)}
          </div>
        </div>
      </section>
    </>
  )
}
