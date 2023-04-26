import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Navbar from './components/Navbar'
import Registrationform from './components/Forms/Registrationform'
import Loginform from './components/Forms/Loginform'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* <Navbar></Navbar> */}
    {/* <Card></Card> */}
    <Loginform></Loginform>
    <Registrationform></Registrationform>

   
    </div>
  )
}

export default App
