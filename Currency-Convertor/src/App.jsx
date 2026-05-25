import { useState} from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-white bg-blue-700' >Currency Convertor</h1>
      <InputBox label='From'/>
      <br />
      <InputBox label = "To"/>
    </>
  )
}

export default App
