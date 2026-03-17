import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <h1>Welcome to the future First Year Connections Webside</h1>
      <button className="counter" onClick={() => setCount((prev) => prev + 1)}>
        Click count: {count}
      </button>
    </main>
  )
}

export default App
