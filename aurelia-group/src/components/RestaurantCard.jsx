import { Link } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage.jsx'

export default function RestaurantCard({ restaurant, collectionName }) {
  return (
    <Link to={`/restaurants/${restaurant.slug}`} className="restaurant-card">
      <PlaceholderImage label={restaurant.name} />
      <h4>{restaurant.name}</h4>
      <div className="place">{restaurant.city}, {restaurant.country}</div>
      {collectionName && <div className="tag">{collectionName}</div>}
    </Link>
  )
}
