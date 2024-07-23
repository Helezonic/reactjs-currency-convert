import { useId } from "react" // For optimisation through binding


function InputBox ({
    //Consider all the possible changes and values - on display
    label, //From or to
    amount, //Input value and output value
    setAmountChange, //When amount changes, 
    selectCurrency, //currency selected from the option list [to, from]
    setSelectCurrency, //When currency changes
    currencyOptions=[], //Options of currency from option list
    placeholder
    } 
) {
    
    //When an option from the list is selected, the selectCurrency send from the value selectCurrencyFrom of App.jsx which is used to fetch from API should be changed. Hence setSelectCurrencyFrom is also send as prop as setSelectCurrency

    const onCurrencyChange = (event) => 
        setSelectCurrency(event.target.value)
    
    const onAmountChange = (event) => {
        if (Number(event.target.value))
        setAmountChange(Number(event.target.value))
    }
    const amountId = useId()
return(
    <>
        <div className="bg-gray-200 w-full flex-row p-2 pb-4 rounded-xl">
            <div className="text-gray-400 font-serif w-full mb-8 p-3 flex justify-between">
                <label htmlFor={amountId}>{label}</label>
                <div>choose currency</div>
            </div>
            <div className="bg-white w-full p-1 flex rounded-xl">
                
                <input 
                id = {amountId}
                placeholder={placeholder} 
                value={amount}
                onChange={onAmountChange}
                className="border-none px-2 w-full rounded-xl"
                ></input>

                <select 
                className="p-2 rounded-xl" 
                id="currency" 
                value={selectCurrency}
                onChange={onCurrencyChange}
                >
                    {currencyOptions.map((currency)=>(
                        <option value={currency} key={currency}>{currency}</option> 
                    ))
                }
                </select>
                
            </div>
         </div>
    </>
)
}

export default InputBox