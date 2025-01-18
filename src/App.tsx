import { useState, useEffect } from 'react'
import './App.css'
import { v4} from 'uuid';
const App: React.FC = () => {
  const [randomCode, setRandomCode] = useState<string>('')

  useEffect(() => {
    async function fetchRandomCode() {
      setRandomCode(v4())
    }
    fetchRandomCode()
  }, [])
  const cliked = () => {
    setRandomCode(v4())
  }

  return (
    <div className='app'>
      <h1 className='title'>Gerar codigo UUID</h1>
      <input type="text" value={randomCode} className='code'/>
      <button onClick={cliked}>Gerar</button>
    </div>
  )
}
export default App


