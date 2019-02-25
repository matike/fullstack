import React from 'react'
const Persons= ({personsToShow, removePerson}) => {

    return (
        personsToShow.map(person =>
            <li key={person.name}> {person.name} {person.number} <button onClick = {()=>removePerson(person.id)}>poista</button></li>
    )
    )
}

export default Persons