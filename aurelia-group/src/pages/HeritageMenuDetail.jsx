import { useParams, Link, Navigate } from 'react-router-dom'
import { getHeritageMenu } from '../data/menus/index.js'
import { restaurants } from '../data/restaurants.js'
import MenuSection from '../components/MenuSection.jsx'

export default function HeritageMenuDetail() {
  const { key } = useParams()
  const menu = getHeritageMenu(key)
  const restaurant = restaurants.find((r) => r.heritageMenu === key)
  if (!menu) return <Navigate to="/menus" replace />

  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/menus">Menus</Link> / <Link to="/collections/heritage-collection">Heritage Collection</Link> / {menu.name}
          </div>
          <div className="kicker">{menu.subtitle} · Avg check {menu.avgCheck}</div>
          <h1 style={{maxWidth: '18ch'}}>{menu.name}</h1>
          <p className="lede">{menu.intro}</p>
          {restaurant && (
            <Link to={`/restaurants/${restaurant.slug}`} className="btn" style={{marginTop: '1rem'}}>Visit the restaurant page →</Link>
          )}
        </div>
      </section>
      <section className="section section--border-top">
        <div className="wrap">
          {menu.sections.map((s) => <MenuSection section={s} key={s.title} />)}
        </div>
      </section>
    </>
  )
}
