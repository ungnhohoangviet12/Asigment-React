// Reducers 
// là một funciton
const initvalue = { value: 0 }

const rootReducter = (state = initvalue, action) => {

    // type: 'todoList/increment',
    // payload:10,

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }

        case 'todolist/incrememnt':
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state;
    }
}


// ACTION

const INCREMENT = {
    type: 'todoList/increment',
    payload: 10,
}
// ACTION creators
const incrementCreator = (data) => {
    return {
        type: 'todolist/increment',
        payload: data
    }
}
incrementCreator(10);


// DISPATH
// là một function

// dispatch(incrementCreator(15))