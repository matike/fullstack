
import React from 'react'

const PersonForm = (props) => {

return(
    <form onSubmit={props.addPerson}>
    <div> nimi: <input
      value={props.newName}
      onChange={props.handleNameChange} /></div>

    <div>puhelinnumero: <input
      value={props.newNumber}
      onChange={props.handleNumberChange} /></div>
            <div> <button type="submit">lisää</button></div>
      </form>
)
}

export default PersonForm