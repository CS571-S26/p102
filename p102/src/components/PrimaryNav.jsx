import { NavLink } from 'react-router-dom'
import pages from '../data/pages'

function PrimaryNav() {
  return (
    <header className="top-nav-wrapper">
      <nav className="top-nav" aria-label="Primary navigation">
        <NavLink to="/" className="brand nav-brand-link">
          First Year Connections
        </NavLink>
        <ul className="nav-list">
          {pages.map((page) => (
            <li key={page.id}>
              <NavLink
                to={page.path}
                end={page.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {page.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default PrimaryNav
