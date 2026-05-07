import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Coaching from './pages/FieldGuide'
import Results from './pages/Workshops'
import About from './pages/About'
import Contact from './pages/Contact'
import Disclaimer from './pages/Disclaimer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="results" element={<Results />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="field-guide" element={<Navigate to="/coaching" replace />} />
        <Route path="mentoring" element={<Navigate to="/coaching" replace />} />
        <Route path="workshops" element={<Navigate to="/results" replace />} />
      </Route>
    </Routes>
  )
}

export default App
