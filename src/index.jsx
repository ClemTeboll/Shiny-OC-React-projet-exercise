import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './components/Errors'
import Header from './components/Header'
import Survey from './components/Survey'
import Freelances from './pages/Freelances'
import Home from './pages/Home'
import Results from './pages/Results'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="survey/:questionNumber" element={<Survey />} />
      <Route path="results" element={<Results />} />
      <Route path="freelances" element={<Freelances />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
)
