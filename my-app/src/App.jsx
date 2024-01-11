import Alert from './Alert'
import './App.css'
import Card from './Card'
import Card2 from './Card2'

function App() {

  return (
    <div>

      <Alert>Mesajul este fara variant!</Alert>
      <Alert variant='success' isOutlined={true}>Mesajul este cu succes!</Alert>
      <Alert variant='error'>Mesajul este cu eroare!</Alert>

      <p className='alert warning'>Acest mesaj nu ar trebui sa aiba stilizare</p>

      <Card></Card>
      <Card2></Card2>
      <p className='red'>Text cu rosu din app.jsx</p>

      <div className='p-4 bg-yellow-500 my-4'>Text stilizat cu tailwind</div>
    </div>
  )
}

export default App
