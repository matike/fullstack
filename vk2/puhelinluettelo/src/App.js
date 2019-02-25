import React, { useState, useEffect } from 'react'

import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'



const App = ({ props }) => {



  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)


  useEffect(() => {
    console.log('effect')
    personService.getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const personsToShow = persons.filter(person => person.name.includes(Filter))

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

      personService
      .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')

          setMessage(
            `Lisättiin '${personObject.name}' `
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })

    }
  }

  const removePerson = (id) => {
    console.log('nappia painettu', id)
    const person = persons.find(p => p.id === id)
    const poistetaanko = window.confirm(`Poistetaanko ${person.name}`)
    if (poistetaanko === true) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const handleFilterChange = (event) => {

    setFilter(event.target.value)
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
      <Notification message={message} />

      <FilterForm Filter={Filter} handleFilterChange={handleFilterChange}></FilterForm>

      <h1>lisää uusi</h1>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange}
      ></PersonForm>



      <h2>Numerot</h2>
      <ul>
        <Persons personsToShow={personsToShow} removePerson={removePerson}></Persons>
      </ul>
    </div>
  )
}

export default App