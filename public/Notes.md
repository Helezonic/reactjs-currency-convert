(Time spend : 8 hrs)

## Important studies

1. How to list fetched currency types in option list? </br>
-> Currency Options should be in an array and not as object.
    The options tag need a loop to display each. </br>
    //Use `key` attribute in 'option' for optimisation

    The curreny options you're sending can be of 2 methods
    - Either send all the currencies for both 'from' and 'to' selection. from `/currencies.json` endpoint of the API 
    - List all currencies from the one that is selected. Which means you need to have a default value selected. The list of currency is henceforth fetched from the keys(of key value pair) after using useCurrencyList hook

2. `useCurrencyList` is to fetch exchange rates of the selected currency, (a currency needs to be selected in order to fetch)

3. `useId` hook for optimisation - creating unique Ids - connecting input element with its label element. </br>
You can bind them by a common term in general, but will be same for each rendering. Hence for each selection/rendering, if there can be a unique generated id that binds them both, it'd be better optimised. </br>
Q. Do you need a label element or does a div work?

4. Conversion equation as per the API </br>
`currencyfrom.currencyTo` //Will give a number </br>
`{amount * number = currencyTo}`

5. Optimisation on Input Box - is the input value and currency selection disabled or enabled

6. The convert button, should just multiply technically. Fetching the rate, new values updated on display and on the memory should all be done before clicking the convert button. Hence 'onChange' is used on both amount and currency

7. custom className

8. When currency or amount is changed in the InputBox component, the respective states are to be updated in App component, hence the set function of `useState` is send as props

9. When swap button is clicked, how to convert the corresponding values simultaneously using `useEffect`?

10. The inputAmount cannot be cleared through backspace key. Why?
