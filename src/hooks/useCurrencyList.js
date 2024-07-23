import { useEffect, useState } from "react"

//After selecting 'currency' from the options list, 
function useCurrencyList (currency) { 
    const [data, setData]= useState("")
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // fetches the conversion rate page with date and rate information 
        .then(res => res.json())
        .then(res => setData(res[currency])) //fetches only the exchange rates)
    })
    
    return data
}

export default useCurrencyList