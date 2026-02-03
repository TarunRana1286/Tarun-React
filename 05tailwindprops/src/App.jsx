import './App.css'
import React from "react"
import Card from '../components/card'

function App() {

  let myobj = {
    name: "Tarun Rana",
    age: 24,
    city: "New Delhi"
  }

  return (
    <>
    <h1 className=" bg-green-500 rounded-xl text-3xl font-bold"> Tarun Rana Tailwind </h1>
    <br></br>
    <Card username="Tarun Rana Tailwind" btnText="View Profile"></Card>
    <Card city="Ahmedabad"></Card>

    </>
  )
}

export default App
