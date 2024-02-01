import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Tutors from './components/Tutors/Tutors'
import University from './components/University/University'
import Cities from './components/Cities/Cities'
import { createContext, useState } from 'react'

export const ColorContext = createContext('green')

const App = () => {

  const testPropDrilling = 'Informatie din app.jsx';
  const [color, setColor] = useState('verde')

  return (
    <ColorContext.Provider value={color}>
      <main className='App'>
        <Sidebar />
        <section className="container">
          <University />
          <label >
            <span>Color</span>
            <input type="text" onChange={ (e) => setColor(e.target.value)}/>
          </label>
          <Tutors propForAddTutor={testPropDrilling} />
          <Cities />
        </section>
      </main>
    </ColorContext.Provider>
  )
}

export default App
