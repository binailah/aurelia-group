import { Link } from 'react-router-dom'
import { collections } from '../data/collections.js'
import { restaurantsByCollection } from '../data/restaurants.js'

export default function Menus() {
  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="kicker">Menus</div>
          <h1 style={{maxWidth: '16ch'}}>Every menu, structured and current</h1>
          <p className="lede">Five collections share a foundational menu with local adaptations. The Heritage Collection carries seven completely unique menus.</p>
        </div>
      </section>
      <section className="section section--border-top">
        <div className="wrap">
          {collections.map((c) => (
            <div key={c.slug} style={{marginBottom: '2.5rem'}}>
              <h3>{c.name}</h3>
              {c.menuType === 'shared' ? (
                <p>
                  <Link to={`/menus/${c.menuFile}`} className="btn" style={{marginTop: '0.5rem'}}>View {c.name} menu →</Link>
                </p>
              ) : (
                <div className="restaurant-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem'}}>
                  {restaurantsByCollection(c.slug).map((r) => (
                    <Link to={`/menus/heritage/${r.heritageMenu}`} className="btn" key={r.slug} style={{justifyContent: 'flex-start'}}>
                      {r.name} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
