export default function MenuSection({ section }) {
  return (
    <div className="menu-section">
      <h3>{section.title}</h3>
      {section.items.map((item) => (
        <div className="menu-row" key={item.name}>
          <div>
            <div className="menu-item-name">{item.name}</div>
            {item.desc && <div className="menu-item-desc">{item.desc}</div>}
          </div>
          <div className="menu-item-price">{item.price}</div>
        </div>
      ))}
    </div>
  )
}
