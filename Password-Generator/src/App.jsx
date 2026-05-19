import { useCallback, useState, useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import castleImg from './assets/castle.png'
import './App.css'

function App() {
  const [length, setLength] = useState(3)
  const [smallCharAllowed, setSmallCharAllowed] = useState(true)
  const [numsAllowed , setNumsAllowed] = useState(false)
  const [bigCharAllowed , setBigCharAllowed] = useState(false)
  const [spCharAllowed , setSpCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    let bigChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "0123456789"
    let spChar = "!@#$%^&*(){}\<>/[]_"

    if(numsAllowed){
        str += nums
      }

    if(bigCharAllowed){
        str += bigChar
      }

    if(spCharAllowed){
      str += spChar
    }

    for(let i = 0; i < length ; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }

    setPassword(pass)
    console.log(pass)

  },[length, smallCharAllowed , numsAllowed, bigCharAllowed, spCharAllowed, setPassword])

  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, smallCharAllowed , numsAllowed, bigCharAllowed, spCharAllowed, passwordGenerator ])

  return (
    <>
    <div>
    <h1 className='bg-blue-950 text-white font-bold font-serif p-5 text-center rounded-3xl'>Password Generator</h1>

    <div>
      
      <input 
        type='text' 
        className='p-2 outline-none bg-white text-black m-2 rounded-xl  font-bold text-xl' 
        placeholder = "Generated Password" 
        value={password}
        ref={passwordRef}>
      </input>

      {/* Copy Button */}
      <button className='bg-amber-700 text-white p-2 rounded-xl m-2 font-bold text-xl' onClick={copyToClipboard}>
        <label htmlFor="Copy">Copy</label>
      </button>

      {/* Generate Button */}
      <button className='bg-blue-500 text-white p-2 rounded-3xl font-bold text-xl m-2' onClick={passwordGenerator}>
        <label htmlFor="Generate">Generate New</label>
      </button>

      <br />

      {/*Range Slider*/}
      <input 
      type="range" 
      className="w-50 cursor-pointer mt-10" 
      min={3} 
      max={15} 
      value={length}
      onChange={(e) => {setLength(e.target.value)}}/>
      <label className='ml-1.5 '>Length : {length}</label>

      <br />

      <h3 className=' text-white font-bold font-serif p-3 text-center rounded-3xl'>Characters used : </h3>

      {/*abc Checkbox*/}
      <input 
      className='ml-4'
      type='checkbox'
      defaultChecked = {smallCharAllowed}
      disabled></input>
      <label className='ml-1'>abc</label>

      {/*123 Checkbox*/}
        <input 
          className='ml-4'
          type='checkbox'
          defaultChecked = {numsAllowed}
          onChange={() => {setNumsAllowed((prev) => !prev)}}></input>
        <label className='ml-1'>123</label>

        {/*ABC Checkbox*/}
        <input 
          className='ml-4'
          type='checkbox'
          defaultChecked = {bigCharAllowed}
          onChange={() => {setBigCharAllowed((prev) => !prev)}}>
        </input>
          <label className='ml-1'>ABC</label>

        {/*@#$ Checkbox*/}
        <input 
          className='ml-4'
          type='checkbox'
          defaultChecked = {spCharAllowed}
          onChange={() => {setSpCharAllowed((prev) => !prev)}}>
        </input>
        <label className='ml-1'>@#$</label>

      </div>

      <img
        src={castleImg}
        alt="Castle"
        className='w-90 rounded-xl mx-auto '
      />
    </div>
  </>
  )
}

export default App
