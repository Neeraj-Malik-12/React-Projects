import React from 'react'


function Buttons({colorName, bgColor}) {
  return (
    <>
    <button className={`${colorName === "Black" ? "text-white" : "text-black"} font-bold rounded-2xl w-fit p-2 m-1 shadow-2xl outline-none`} style={{backgroundColor: colorName}} onClick={() => bgColor(colorName)}>
        {colorName}
    </button>
    </>
  )
}

export default Buttons