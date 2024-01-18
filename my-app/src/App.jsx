import { Component } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Tutors from './components/Tutors/Tutors'
import University from './components/University/University'
import Cities from './components/Cities/Cities'

class App extends Component {

  render() {
    return (
      <main className='App'>
        <Sidebar/>
        <section className="container">
          <University/>
          <Tutors/>
          <Cities/>
        </section>
      </main>
    )
  }
}

export default App
