import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const voteAnecdote = (event, anecdote) => {
        event.preventDefault()
        props.vote(anecdote.id, anecdote.content, anecdote.votes)
        props.setNotification(`you voted '${anecdote.content}'`, 10)
    }


    
    return (
        <div>
            <h2>Anecdotes</h2>
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={((event) => voteAnecdote(event, anecdote))}>vote</button>
                    </div>
                </div>
            )}</div>
    )
}

const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    vote,setNotification
  }

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdotes