import { useState } from 'react'
import Buttons from './Components/Buttons'

import './App.css'

function App() {
  const [color, setColor] = useState("Black")


  return (
    
      <div className=' h-screen w-full duration-400' style={{backgroundColor : color}} >

        <div className=' fixed flex flex-wrap justify-center bottom-10 inset-x-2 px-2 bg-indigo-400 p-1.5 rounded-2xl '>
          <Buttons colorName = "Red" bgColor = {setColor}/>

          <Buttons colorName = "Yellow" bgColor = {setColor}/>

          <Buttons colorName = "Brown" bgColor = {setColor}/>

          <Buttons colorName = "Orange" bgColor = {setColor}/>

          <Buttons colorName = "Purple" bgColor = {setColor}/>

          <Buttons colorName = "Black" bgColor = {setColor}/>
        </div>
      </div>
    
  )
}

export default App
