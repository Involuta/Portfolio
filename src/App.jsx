/*import { useState } from 'react'
import { Navbar, Projects } from './components'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Projects />
    </div>
  )
}

export default App
*/

import { Navbar, Projects } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Projects />
    </div>
  )
}

export default App