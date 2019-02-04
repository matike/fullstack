import React, { useState } from 'react'

const App = (props) => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040444444' 
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

const addPerson = (event) => {
  
  event.preventDefault()
  console.log('nappia painettu', event.target)
  const personObject = {
    name: newName,
    number: newNumber
  }

  if (persons.some(e => e.name === newName)) {
    window.alert(`${newName} on jo luettelossa`)
  }
   else { 
  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
  console.log(persons)
   }
}

const handleNumberChange = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}


const handleNameChange = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}


  return (
    <div>
      <h2>Puhelinluettelo</h2>

      <form onSubmit={addPerson}>
         <div> nimi: <input
          value={newName}
          onChange={handleNameChange}/></div>
          
          <div>puhelinnumero: <input
          value={newNumber}
          onChange={handleNumberChange}/></div>
          
          <div> <button type="submit">lisää</button></div>
      </form>
      <h2>Numerot</h2>
      <ul>
      {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
  }

export default App