import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formlist from './Component/Formlist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formlist></Formlist>
    </>
  )
}

export default App
