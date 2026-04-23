import { Link } from 'react-router-dom'
import PageContent from '../components/PageContent'
import '../styles/HomePage.css'

const quickLinks = [
  { label: 'Upcoming Events', path: '/upcoming', description: 'See what\u2019s coming up next and sign up to volunteer.' },
  { label: 'About Us', path: '/about', description: 'Meet the team behind First Year Connections.' },
  { label: 'Contact Us', path: '/contact', description: 'Questions? Reach out to us anytime.' },
]

function HomePage() {
  return (
    <PageContent
      title="Home"
      description="Welcome to First Year Connections. Find everything you need to get started, stay connected, and make the most of your first year."
    >
      <section className="home-quicklinks" aria-label="Quick links">
        {quickLinks.map((ql) => (
          <Link key={ql.path} to={ql.path} className="home-quicklink-card">
            <span className="home-quicklink-label">{ql.label}</span>
            <span className="home-quicklink-desc">{ql.description}</span>
          </Link>
        ))}
      </section>
    </PageContent>
  )
}

export default HomePage
