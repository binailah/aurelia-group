import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getCollection } from '../data/collections.js'
import { getSharedMenu } from '../data/menus/index.js'
import { restaurantsByCollection } from '../data/restaurants.js'
import MenuSection from '../components/MenuSection.jsx'

export default function MenuDetail() {
  const { slug } = useParams()
  const collection = getCollection(slug)
  const menu = getSharedMenu(slug)
  const houseRestaurants = restaurantsByCollection(slug)
  const [activeSlug, setActiveSlug] = useState(houseRestaurants[0]?.slug || '')

  if (!collection || !menu) return <Navigate to="/menus" replace />
  const activeRestaurant = houseRestaurants.find((r) => r.slug === activeSlug)

  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/menus">Menus</Link> / {menu.name}</div>
          <div className="kicker">Collection Menu</div>
          <h1 style={{maxWidth: '18ch'}}>{menu.name}</h1>
          <p className="lede">{menu.intro}</p>
        </div>
      </section>

      <section className="section--tight section--border-top">
        <div className="wrap">
          <div className="menu-select">
            <label htmlFor="restaurant-select" style={{display: 'block', marginBottom: '0.5em', fontSize: '0.86rem', color: 'var(--walnut)'}}>
              View regional adaptations for
            </label>
            <select id="restaurant-select" value={activeSlug} onChange={(e) => setActiveSlug(e.target.value)}>
              {houseRestaurants.map((r) => <option value={r.slug} key={r.slug}>{r.name} — {r.city}</option>)}
            </select>
          </div>
          {activeRestaurant?.hasAdaptation && (
            <div className="menu-note">
              <strong>{activeRestaurant.name} regional adaptation:</strong> {activeRestaurant.adaptationNote}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {menu.sections.map((s) => <MenuSection section={s} key={s.title} />)}
        </div>
      </section>
    </>
  )
}
