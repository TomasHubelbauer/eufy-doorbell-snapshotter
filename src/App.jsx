import { useState } from 'react'
import './App.css'
import { EufySecurity } from 'eufy-security-client'

const eufySecurity = new EufySecurity();

function App() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
    <label>
      User name:
      <input value={userName} onChange={e => setUserName(e.target.value)} />
    </label>
    <label>
      Password:
      <input type="password"value={password} onChange={e => setPassword(e.target.value)} />
    </label>

    </>
  )
}

export default App
