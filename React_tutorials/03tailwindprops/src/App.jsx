import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
    <Card Username='Athrva' position='Assosciate'/>
    <Card />
    <Card Username='AbhiShek' position='Manager' />
    </>
  )
}

export default App
