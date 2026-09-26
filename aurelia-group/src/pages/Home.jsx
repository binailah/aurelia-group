import { Link } from 'react-router-dom'
import { collections } from '../data/collections.js'
import { restaurants } from '../data/restaurants.js'
import CollectionCard from '../components/CollectionCard.jsx'
import RestaurantCard from '../components/RestaurantCard.jsx'
import AureliaConstants from '../components/AureliaConstants.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'

const selected = ['aurelia-mayfair', 'aurelia-edinburgh', 'aurelia-bali', 'aurelia-dubai-downtown', 'aurelia-yerevan', 'aurelia-kensington']

export default function Home() {
  const featured = selected.map((slug) => restaurants.find((r) => r.slug === slug)).filter(Boolean)

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="kicker">Aurelia Group</div>
          <h1>Modern Luxury<br />Without Ostentation</h1>
          <p className="hero-sub">A portfolio of distinct dining environments across four continents, united by one belief: true luxury is felt, not announced.</p>
          <div className="hero-cta">
            <Link to="/collections" className="btn btn--solid">Explore the Collections</Link>
            <Link to="/the-house" className="btn">The House</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <div className="kicker">The House</div>
            <h2>Twenty-three rooms.<br />One philosophy.</h2>
          </div>
          <div>
            <p className="lede">Aurelia Group is not a restaurant chain. It is a collection of private dining environments — each shaped by its city, its collection, and a shared set of quiet convictions about hospitality.</p>
            <Link to="/the-house" className="btn">Read the manifesto →</Link>
          </div>
        </div>
      </section>

      <section className="section section--parchment section--border-top">
        <div className="wrap">
          <div className="kicker">Collections</div>
          <h2 style={{marginBottom: '2rem'}}>Six formats, one standard</h2>
          <div className="collections-grid">
            {collections.map((c, i) => <CollectionCard collection={c} index={i} key={c.slug} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">Selected Restaurants</div>
          <h2 style={{marginBottom: '2rem'}}>A curated selection</h2>
          <div className="restaurant-grid">
            {featured.map((r) => (
              <RestaurantCard restaurant={r} collectionName={collections.find((c) => c.slug === r.collection)?.name} key={r.slug} />
            ))}
          </div>
          <div style={{marginTop: '2.5rem'}}>
            <Link to="/restaurants" className="btn">View all restaurants →</Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap two-col">
          <div>
            <div className="kicker">Heritage</div>
            <h2>Seven countries.<br />Seven traditions.</h2>
          </div>
          <div>
            <p style={{color: 'var(--parchment)'}}>The Heritage Collection is Aurelia\u2019s deepest commitment: restaurants built entirely from the culinary tradition of their country, researched with local historians and executed with contemporary technique. Nothing is invented. Everything is remembered, then made better than it has ever been before.</p>
            <Link to="/collections/heritage-collection" className="btn btn--pale">Discover the Heritage Collection →</Link>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="wrap">
          <div className="kicker">Aurelia Constants</div>
          <h2 style={{marginBottom: '2rem'}}>What stays the same, everywhere</h2>
          <AureliaConstants />
        </div>
      </section>

      <section className="section section--parchment section--border-top">
        <div className="wrap" style={{textAlign: 'center'}}>
          <h2>Reserve your table</h2>
          <p className="lede" style={{margin: '0 auto 1.6rem'}}>Twenty-three restaurants. One reservations desk.</p>
          <Link to="/reservations" className="btn btn--solid">Make a Reservation</Link>
        </div>
      </section>
    </>
  )
}
