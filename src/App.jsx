//import './App.css'

import { useCallback, useEffect, useState } from "react"
import InputBox from "./components"
import useCurrencyList from "./hooks/useCurrencyList"

function App() {

const [inputAmount, setInputAmount] = useState() //Number from input
const [convertedAmount, setConvertedAmount] = useState()
const [selectCurrencyFrom, setSelectCurrencyFrom] = useState("usd") //Text from options - to fetch from API - not for display
const [selectCurrencyTo, setSelectCurrencyTo] = useState("inr") //Text from options

const ratesOfSelectedCurrency = useCurrencyList(selectCurrencyFrom) //returns object
const optionsList = Object.keys(ratesOfSelectedCurrency)// returns array
//optionsList.unshift("")


const swap = () => {
  //Swap the display & also fetches rates accordingly
  setSelectCurrencyFrom(selectCurrencyTo)
  setSelectCurrencyTo(selectCurrencyFrom)

  //The converted amount should be recalculated

}

const convert = useCallback(() => {
  if(typeof(inputAmount) === 'number')
  setConvertedAmount(inputAmount * ratesOfSelectedCurrency[selectCurrencyTo])
  else {
    setConvertedAmount("Enter a number!")
  }
},[swap])

  return (
    <>
      
        <div className="h-screen w-screen bg-cover" style={{backgroundImage : `url(https://getwallpapers.com/wallpaper/full/b/9/7/257007.jpg)`}}>
          <div className="h-max min-w-fit w-1/3 flex-row justify-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 hover:backdrop-brightness-90 rounded-xl backdrop-blur-xl">

            <div className="">
              <h1 className="text-white font-mono text-3xl mx-auto w-fit text-center">CURRENCY CONVERTER</h1>
            </div>


            <div className="flex-row  mt-8">

              <InputBox 
              label="from" 
              currencyOptions={optionsList} 
              placeholder="type here" 
              selectCurrency={selectCurrencyFrom} 
              setSelectCurrency={setSelectCurrencyFrom}
              amount={inputAmount}
              setAmountChange={setInputAmount}/>

              {/* SWAP */}
              <div className="flex gap-2 justify-between my-2">
                <button className="bg-blue-500 w-min py-2 px-8  rounded-xl shadow-md text-white hover:bg-sky-500 duration-200"
                onClick={swap}>Swap</button>
                <h1 className="text-yellow-300 w-1/2 text-center py-2 rounded-xl bg-black">Today's rate {ratesOfSelectedCurrency[selectCurrencyTo]}</h1>
              </div>
              
              <InputBox 
              label="to" 
              currencyOptions={optionsList} 
              selectCurrency={selectCurrencyTo} 
              setSelectCurrency={setSelectCurrencyTo}
              amount={convertedAmount}/>

              {/* CONVERT */}
              <div className="flex justify-center">
                <button className="bg-blue-500 w-full py-2 px-8 mt-2 rounded-xl hover:shadow-md text-white hover:bg-sky-500 duration-200" onClick={convert}>Convert {selectCurrencyFrom.toUpperCase()} to {selectCurrencyTo.toUpperCase()}</button>
              </div>

            </div>


          </div>
        </div>
    </>
  )
}

export default App
