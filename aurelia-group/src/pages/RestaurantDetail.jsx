import { useParams, Link, Navigate } from 'react-router-dom'
import { getRestaurant } from '../data/restaurants.js'
import { getCollection } from '../data/collections.js'
import PlaceholderImage from '../components/PlaceholderImage.jsx'

export default function RestaurantDetail() {
  const { slug } = useParams()
  const restaurant = getRestaurant(slug)
  if (!restaurant) return <Navigate to="/restaurants" replace />
  const collection = getCollection(restaurant.collection)
  const menuHref = restaurant.heritageMenu
    ? `/menus/heritage/${restaurant.heritageMenu}`
    : `/menus/${collection.menuFile}`

  return (
    <>
      <section className="section section--tight">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/restaurants">Restaurants</Link> / <Link to={`/collections/${collection.slug}`}>{collection.name}</Link> / {restaurant.name}
          </div>
          <div className="rest-hero">
            <div>
              <div className="kicker">{collection.name}</div>
              <h1 style={{maxWidth: '16ch'}}>{restaurant.name}</h1>
              <div className="rest-meta">
                <span>{restaurant.city}, {restaurant.country}</span>
                <span>Avg check {restaurant.avgCheck}</span>
              </div>
              <p className="lede">{restaurant.positioning}</p>
              <div className="rest-cta">
                <Link to={menuHref} className="btn btn--solid">View Menu</Link>
                <Link to="/reservations" className="btn">Reserve a Table</Link>
              </div>
            </div>
            <PlaceholderImage label={restaurant.name} variant="tall" />
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="wrap detail-grid">
          <div className="detail-block">
            <h3>Story</h3>
            <p>{restaurant.story}</p>
          </div>
          <div className="detail-block">
            <h3>Atmosphere</h3>
            <p>{restaurant.atmosphere}</p>
          </div>
          <div className="detail-block">
            <h3>Interior Concept</h3>
            <p>{restaurant.interiorConcept}</p>
          </div>
          <div className="detail-block">
            <h3>Dining Experience</h3>
            <p>{restaurant.diningExperience}</p>
          </div>
        </div>
      </section>

      {restaurant.locationNotes && (
        <section className="section--tight">
          <div className="wrap">
            <div className="menu-note">{restaurant.locationNotes}</div>
          </div>
        </section>
      )}

      <section className="section section--parchment section--border-top" style={{textAlign: 'center'}}>
        <div className="wrap">
          <h2>Reserve a table at {restaurant.name}</h2>
          <div className="rest-cta" style={{justifyContent: 'center'}}>
            <Link to="/reservations" className="btn btn--solid">Reservations</Link>
            <Link to={menuHref} className="btn">View Full Menu</Link>
          </div>
        </div>
      </section>
    </>
  )
}
