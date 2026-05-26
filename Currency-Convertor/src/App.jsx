import { useState} from 'react'
import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const[amount, setAmount] = useState(1)
  const[from, setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0)



  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);

  const convert= () => {
    setConvertedAmount(amount*currencyInfo[to])
  }



  return (
    <>
    <div className='w-2/3 flex flex-col rounded-3xl mx-auto items-center bg-amber-950 
    '>
      <h1 className='text-3xl text-white bg-amber-800 p-2 rounded-3xl' >Currency Convertor</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}
      >
      <InputBox 
      flow='From' 
      amountLabel="Input Amount :"
      amount={amount}
      onAmountChange={(amount) => setAmount(amount)}
      currencyArray={options}
      selectCurrency={from}
      amountDisabled={false}
      onCurrencyChange = {(currency) => setFrom(currency)}
      />
      <br />
      <InputBox 
      flow='To' 
      amountLabel="Calculated Amount :"
      amount={convertedAmount}
      onAmountChange={(amount) => {setTo(amount)}}
      currencyArray={options}
      selectCurrency={to}
      amountDisabled={true}
      onCurrencyChange = {(currency) => setTo(currency)}
      />

      <button type='submit'
      className=' bg-blue-600 text-white px-4 py-3 rounded-lg my-4'>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>

      </form>
      </div>
    </>
  )
}

export default App
