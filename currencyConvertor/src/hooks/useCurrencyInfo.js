import  {use, useeffect, useState} from 'react'

function useCurrencyInfo(currency) {  

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(response => response.json())
            .then(data => {
                setCurrencyInfo(data);
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency]);

    const [currencyInfo, setCurrencyInfo] = useState(null); 

    return currencyInfo;
 }
