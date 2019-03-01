
export const setNotification = (text, time) => {
    console.log(text)
    return async dispatch => {
      dispatch({
        type: 'SHOW_VOTED',
        data: text
      })
      await setTimeout(() => {
        dispatch({ 
          type: 'HIDE' 
      })
      }, time*1000)
    }
}
        

const notificationReducer = (state = '', action) => {
    switch(action.type) {
      case 'SHOW_VOTED':
        return action.data
      case 'HIDE':
        return null
      default:
        return state
}
  }

export default notificationReducer