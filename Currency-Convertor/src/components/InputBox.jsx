import React from 'react'

function InputBox({
  label
}) {
  return (
    <div className=' flex flex-col items-center h-40 w-100 mx-auto border-2 border-white rounded-2xl'>
      <h2 className='pt-3'>{label}</h2>
      
      <div className='flex flex-row justify-end '>
      <div className='flex flex-col items-center w-fit m-3'>
        
        <label className='font-semibold'>
          Input Amount :
        </label>

        <input 
          type='number'
          className='border-white
          w-40
        bg-orange-200
        rounded-2xl
        my-1 placeholder:text-amber-900  placeholder:font-semibold p-3
        font-bold text-black'
        placeholder='Enter Amount'>
        </input>
        </div>

        <div className='flex flex-col items-center w-fit m-3'>
        
        <label className='font-semibold'>
          Select Country :
        </label>

        <input 
          type='string'
          className='border-white
          w-40
        bg-orange-200
        rounded-2xl
        my-1 placeholder:text-amber-900  placeholder:font-semibold p-3
        font-bold text-black'
        placeholder='Choose Country'>
        </input>
        </div>
      </div>
    </div>
  )
}

export default InputBox