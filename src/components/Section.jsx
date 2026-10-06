// Moldura comum a todas as seções: título, espaçamento e âncora do menu.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-titulo`}>
      <div className="container">
        <h2 id={`${id}-titulo`} className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
