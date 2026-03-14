import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FieldGuide from './pages/FieldGuide'
import Mentoring from './pages/Mentoring'
import Workshops from './pages/Workshops'
import About from './pages/About'
import Contact from './pages/Contact'
import Disclaimer from './pages/Disclaimer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="field-guide" element={<FieldGuide />} />
        <Route path="mentoring" element={<Mentoring />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>
    </Routes>
  )
}

export default App
