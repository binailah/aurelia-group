import { Link } from 'react-router-dom'

export default function CollectionCard({ collection, index }) {
  return (
    <Link to={`/collections/${collection.slug}`} className="collection-card">
      <div>
        <div className="num">{String(index + 1).padStart(2, '0')}</div>
        <h3>{collection.name}</h3>
        <p>{collection.tagline}</p>
      </div>
      <div className="go">Explore the collection →</div>
    </Link>
  )
}
