import { Link } from 'react-router-dom'
import { collections } from '../data/collections.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h5>Aurelia Group</h5>
            <p style={{maxWidth: '32ch', color: 'var(--walnut)'}}>Modern Luxury Without Ostentation. A portfolio of distinct dining environments across four continents.</p>
          </div>
          <div>
            <h5>Collections</h5>
            <ul>
              {collections.map((c) => (
                <li key={c.slug}><Link to={`/collections/${c.slug}`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><Link to="/the-house">The House</Link></li>
              <li><Link to="/restaurants">All Restaurants</Link></li>
              <li><Link to="/menus">Menus</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
            </ul>
          </div>
          <div>
            <h5>Aurelia Constants</h5>
            <ul>
              <li>Signature Bread</li>
              <li>Aurelia Scent</li>
              <li>Aurelia Mocktail</li>
              <li>Guest Preference</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Aurelia Group. 23 restaurants, six collections, one standard.</div>
      </div>
    </footer>
  )
}
