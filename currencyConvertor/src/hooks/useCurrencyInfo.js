import  {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {  
const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
                
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
            });
            console.log(data);
            
    }, [currency]);
      console.log(data);
    return data;    
 }

export default useCurrencyInfo;
