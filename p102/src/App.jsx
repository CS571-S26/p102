import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import PrimaryNav from './components/PrimaryNav'
import AboutPage from './pages/AboutPage'
import CalenderPage from './pages/CalenderPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PastPage from './pages/PastPage'
import UpcomingPage from './pages/UpcomingPage'
import './App.css'

function App() {
  return (
    <Container fluid className="app-shell p-0">
      <PrimaryNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/past" element={<PastPage />} />
        <Route path="/calender" element={<CalenderPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  )
}

export default App
