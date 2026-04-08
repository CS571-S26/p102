function PageContent({ title, description, children }) {
  return (
    <main className="page-content" role="region" aria-live="polite">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </main>
  )
}

export default PageContent
