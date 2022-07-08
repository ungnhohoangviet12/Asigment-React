
const initState = {
    todoList: [
        {
            id: 1,
            title: 'di dau',
            complete: false
        }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state
    }

}


export default rootReducer;