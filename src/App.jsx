import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Ready from './ready'
import Wish from './wish'

function App() {
  const [isReady, setReady] = useState(false)

  function toggle() {
    // console.log(111)
    setReady(state => !state)
  }
  
  return (
    <div className="app">
      {isReady ? <Wish/>: <Ready isReady={isReady} toggle={toggle} />}
    </div>
  )
}

export default App
