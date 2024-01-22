import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Utama from './Pages/Utama'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Utama/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
