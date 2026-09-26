const constants = [
  { name: 'Signature Bread', desc: 'The same house sourdough with cultured butter and sea salt, served at every Aurelia restaurant.' },
  { name: 'Aurelia Scent', desc: 'Cedar, fig and bergamot — present in every property.' },
  { name: 'Aurelia Mocktail', desc: 'White grape, yuzu, elderflower and sparkling water — on every menu, everywhere.' },
  { name: 'Guest Preference', desc: 'Aurelia service remembers preferences, dietary needs, preferred tables and occasions.' },
  { name: 'Art & Local Heritage', desc: 'Every property holds a genuine connection to local art and culture.' },
]

export default function AureliaConstants() {
  return (
    <div className="constants-grid">
      {constants.map((c) => (
        <div className="constant-item" key={c.name}>
          <h4>{c.name}</h4>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}
