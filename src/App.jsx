import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>כותרת</h1>
      <p>טקסט לדוגמה</p>
      <button onClick={() => setCount((c) => c + 1)}>
        לחצת {count} פעמים
      </button>
    </div>
  )
}

export default App
