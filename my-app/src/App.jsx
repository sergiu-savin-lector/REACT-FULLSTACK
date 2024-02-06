import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import FacultiesPage from './pages/FacultiesPage'
import FacultyPage from './pages/FacultyPage'
import FacultyDescription from './components/Faculties/FacultyDescription'
import FacultyHistory from './components/Faculties/FacultyHistory'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='faculties' element={<FacultiesPage />} />
          <Route path='faculties/:id' element={<FacultyPage />}>
            <Route index element={<FacultyDescription/>} />
            <Route path='description' element={<FacultyDescription/>} />
            <Route path='history' element={<FacultyHistory/>} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
