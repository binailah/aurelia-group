import { useState, useMemo } from 'react'
import { restaurants } from '../data/restaurants.js'
import { collections } from '../data/collections.js'
import RestaurantCard from '../components/RestaurantCard.jsx'

export default function Restaurants() {
  const [filter, setFilter] = useState('all')
  const list = useMemo(
    () => (filter === 'all' ? restaurants : restaurants.filter((r) => r.collection === filter)),
    [filter]
  )

  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="kicker">Restaurants</div>
          <h1 style={{maxWidth: '18ch'}}>Twenty-three addresses, four continents</h1>
          <p className="lede">Every Aurelia restaurant has its own page, its own story, and its own menu.</p>
        </div>
      </section>
      <section className="section section--border-top">
        <div className="wrap">
          <div className="menu-select">
            <label htmlFor="collection-filter" style={{display: 'block', marginBottom: '0.5em', fontSize: '0.86rem', color: 'var(--walnut)'}}>Filter by collection</label>
            <select id="collection-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All collections</option>
              {collections.map((c) => <option value={c.slug} key={c.slug}>{c.name}</option>)}
            </select>
          </div>
          <div className="restaurant-grid">
            {list.map((r) => (
              <RestaurantCard restaurant={r} collectionName={collections.find((c) => c.slug === r.collection)?.name} key={r.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
