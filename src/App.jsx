import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className=' text-cyan-300 text-4xl'>React App</h1>
    </div>
  )
}

export default App
