function PageContent({ title, description, children }) {
  return (
    <main className="page-content" role="region" aria-live="polite">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
      {children}
    </main>
  )
}

export default PageContent
