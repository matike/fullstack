import anecdoteService from '../services/anecdotes'


export const vote = (id, content, votes) => {
return async dispatch => {
  const votedAnecdote = await anecdoteService.vote(id, content, votes)
dispatch({
    type: 'VOTE',
    data: votedAnecdote
  })
}
}

export const createAnecdote = content => {
return async dispatch => {
  const newAnecdote = await anecdoteService.createNew(content)
  dispatch({
    type: 'NEW_ANECDOTE',
    data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
}
}

const reducer = (state = [], action) => {
  
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
    return state.map(anecdote =>
      anecdote.id !== id ? anecdote : changedAnecdote
      )
    
    case 'NEW_ANECDOTE':
      return [...state, action.data]

    case 'INIT_ANECDOTES':
      return action.data

    default:
    return state   
  }

}

export default reducer