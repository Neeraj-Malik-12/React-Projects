import React from 'react'
import { useState, useId } from 'react';



// const uniqueId = useId();


function InputBox({
  flow,
  amountLabel,
  amount,
  onAmountChange,
  currencyArray = [],
  selectCurrency = "usd",
  amountDisabled,
  onCurrencyChange
  
}) {


  return (
    <div className=' flex flex-col items-center h-40 w-100 mx-auto  border-2 border-white rounded-2xl'>
      <h2 className='pt-3'>{flow}</h2>

      <div className='flex flex-row justify-end '>
        <div className='flex flex-col items-center w-fit m-3'>

          <label className='font-semibold'>
            {amountLabel}
          </label>

          <input
            type='number'
            className='border-white
              w-40
              bg-orange-50
              rounded-2xl
              my-1 placeholder:text-amber-900  placeholder:font-semibold p-3
              font-bold text-black'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            disabled = {amountDisabled}>
          </input>
        </div>

        <div className='flex flex-col items-center w-fit m-3'>

          <label className='font-semibold'>
            Currency Type :
          </label>

          <select
            className='
              border-white
              w-40
              bg-orange-50
              rounded-2xl
              my-1 placeholder:text-amber-900  placeholder:font-semibold p-3
              font-bold text-gray-700'
              value={selectCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

              {currencyArray.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
              



          </select>

        </div>
      </div>
    </div>
  )
}

export default InputBox