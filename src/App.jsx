import { HashRouter as Router, Routes, Route } from "react-router-dom"

import { AboutUs } from './assets/pages/AboutUs'
import { EmailIndex } from './assets/pages/EmailIndex'
import { EmailDetails } from './assets/pages/EmailDetails'
import { HomePage } from './assets/pages/HomePage'

function App() {
  return <Router>
    {/* <AppHeader /> */}
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/emails" element={<EmailIndex />} />
        <Route path="/email/:id" element={<EmailDetails />} />
      </Routes>
    </main>
    {/* <AppFooter /> */}
  </Router>
}

export default App
