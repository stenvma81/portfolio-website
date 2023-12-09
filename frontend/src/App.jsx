import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Default');
  const [loading, setLoading] = useState(false);

  const fetchMessage = () => {
    setLoading(true);
    console.log("Fetchmessage clicked");

    fetch('http://localhost:3001/api/message')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        console.log("Fetchmessage result ", data.message);
      }
        )
      .catch((error) => console.error('Error fetching message:', error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={fetchMessage} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Message'}
      </button>
      <p>{ message }</p>
    </>
  )
}

export default App
