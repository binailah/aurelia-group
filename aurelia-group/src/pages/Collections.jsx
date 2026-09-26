import { collections } from '../data/collections.js'
import CollectionCard from '../components/CollectionCard.jsx'

export default function Collections() {
  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="kicker">Collections</div>
          <h1 style={{maxWidth: '18ch'}}>Six formats. One standard of craft.</h1>
          <p className="lede">Every Aurelia collection shares the same design language and the same kitchen discipline — and almost nothing else.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="collections-grid">
            {collections.map((c, i) => <CollectionCard collection={c} index={i} key={c.slug} />)}
          </div>
        </div>
      </section>
    </>
  )
}
