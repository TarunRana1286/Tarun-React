import React from 'react'
import { useEffect } from 'react'
import { data } from 'react-router-dom'

function Github() {
useEffect(() => {
    const [data, setData] = useState([])
    fetch('https://api.github.com/users/TarunRana1286')
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error))
}, [])

  return (
    <div className='text-center-m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers :{data.followers} </div>
  )
}

export default Github