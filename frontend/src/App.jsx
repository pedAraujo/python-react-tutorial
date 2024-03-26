import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  
  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch('http://127.0.0.1:8000/contacts')
    const data = await response.json()
    setContacts(data)
    console.log(data)
  }
  return (
    <>
      <h1>Hello</h1> 
    </>
  )
}

export default App
