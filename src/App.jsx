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

import { Projects, About, NoPage, RandomImagePage, SingleProject } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SingleProject/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='project-NART' element={<SingleProject/>}/>
        <Route path='project-MIPS' element={<SingleProject/>}/>
        <Route path='/random-image' element={<RandomImagePage/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App