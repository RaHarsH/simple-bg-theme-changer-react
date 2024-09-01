import { useState } from "react"

function App() {
  const [color, setColor] = useState('gray');
  return (
    <div className={`bg-screen screen-${color}`}>
      <div className="button-container">
        <button className="black-button" onClick={() => setColor('black')}>Black</button>
        <button className="white-button" onClick={() => setColor('white')}>White</button>
        <button className="gray-button" onClick={() => setColor('gray')}>Gray</button>
      </div>
    </div>
  )
}

export default App
