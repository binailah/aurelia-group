import { useState } from 'react'
import { restaurants } from '../data/restaurants.js'

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="kicker">Reservations</div>
          <h1 style={{maxWidth: '16ch'}}>Twenty-three restaurants. One reservations desk.</h1>
          <p className="lede">Tell us where, when, and for how many — a member of the Aurelia team will confirm within 24 hours.</p>
        </div>
      </section>
      <section className="section section--border-top">
        <div className="wrap">
          <div className="reservations-panel">
            <div>
              <h2 style={{color: 'var(--cream)'}}>Plan your visit</h2>
              <p style={{color: 'var(--champagne)'}}>Private dining, wine pairings and celebration requests can be arranged directly with each restaurant once your reservation is confirmed.</p>
            </div>
            {submitted ? (
              <div>
                <h3 style={{color: 'var(--cream)'}}>Request received</h3>
                <p style={{color: 'var(--champagne)'}}>Thank you — the Aurelia reservations team will confirm your table shortly.</p>
              </div>
            ) : (
              <form className="res-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="restaurant">Restaurant</label>
                  <select id="restaurant" required defaultValue="">
                    <option value="" disabled>Select a restaurant</option>
                    {restaurants.map((r) => <option value={r.slug} key={r.slug}>{r.name} — {r.city}</option>)}
                  </select>
                </div>
                <div className="row">
                  <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" required />
                  </div>
                  <div>
                    <label htmlFor="guests">Guests</label>
                    <input type="number" id="guests" min="1" max="20" defaultValue="2" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <button type="submit" className="btn btn--pale" style={{marginTop: '0.5rem'}}>Request Reservation</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
