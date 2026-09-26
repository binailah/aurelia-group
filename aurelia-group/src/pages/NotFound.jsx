import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{textAlign: 'center'}}>
      <div className="wrap">
        <div className="kicker">404</div>
        <h1>This room does not exist</h1>
        <p className="lede" style={{margin: '0 auto 1.5rem'}}>The page you\u2019re looking for isn\u2019t part of the Aurelia Group site.</p>
        <Link to="/" className="btn btn--solid">Return Home</Link>
      </div>
    </section>
  )
}
