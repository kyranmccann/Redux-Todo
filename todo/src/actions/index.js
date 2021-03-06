export const ADD_TODO = 'ADD_TODO';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_URGENT = 'TOGGLE_URGENT'; 


export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export const handleInput = event => {
  return {
    type: HANDLE_INPUT,
    payload: event.target.value
  }
}

  export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id,
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const toggleUrgent = id => {
  return {
    type: TOGGLE_URGENT,
    payload: id,
  }
}
