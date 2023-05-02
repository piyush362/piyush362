import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App