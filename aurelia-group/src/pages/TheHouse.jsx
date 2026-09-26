import AureliaConstants from '../components/AureliaConstants.jsx'

const manifesto = [
  { title: 'Modern Luxury Without Ostentation', body: 'Aurelia does not announce itself. There is no black-and-gold cliché, no crystal chandelier, no oversized logo. Luxury here is felt in the weight of a spoon, the grain of walnut, the length of a pause before service — never declared.' },
  { title: 'Distinct Dining Environments', body: 'Signature House, Family Collection, Business & Executive House, Social Club, Resort House and Heritage Collection each hold a different atmosphere and a different purpose. They share a design language and a standard of craft, never an identity.' },
  { title: 'Global Consistency, Local Identity', body: 'A handful of details — the sourdough, the scent, the mocktail — appear at every address in the world. Everything else bends to the place it stands in: a Signature House in Paris speaks French; a Family Collection room in Birmingham marks Diwali and Eid.' },
  { title: 'Art & Local Heritage', body: 'Every property holds a genuine connection to the art and culture around it. In the Heritage Collection, that connection becomes the entire concept — menus developed with local food historians, never with a stock photo of the country in mind.' },
  { title: 'Hospitality and Guest Recognition', body: 'Aurelia service remembers preferences, dietary needs, preferred tables and occasions, from one address to the next. The point of memory is not spectacle. It is the quiet feeling of being expected.' },
]

export default function TheHouse() {
  return (
    <>
      <section className="house-hero">
        <div className="wrap">
          <div className="kicker">The House</div>
          <h1 style={{maxWidth: '18ch'}}>An editorial manifesto, not an about page</h1>
          <p className="lede">What Aurelia believes, and why twenty-three very different rooms are still recognisably one house.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="manifesto-list">
            {manifesto.map((m, i) => (
              <div className="manifesto-item" key={m.title}>
                <div className="idx">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--parchment section--border-top">
        <div className="wrap">
          <div className="kicker">Aurelia Constants</div>
          <h2 style={{marginBottom: '2rem'}}>Five things that never change</h2>
          <AureliaConstants />
        </div>
      </section>
    </>
  )
}
