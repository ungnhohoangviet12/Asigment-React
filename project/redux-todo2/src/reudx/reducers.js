
const initState = {
    filter: {
        search: '',
    },
    todoList: [
        {
            id: 1,
            title: 'hoang viet',
            status: false
        },
        {
            id: 2,
            title: 'hoang viet',
            status: false
        }
    ]
}

const rootReducers = (state = initState, acction) => {
    switch (acction.type) {
        case 'todoList/todoAdd':
            console.log({ state, acction });
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    acction.payload
                ]
            }

        case 'filters/searchFilterChange':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: acction.payload
                }
            }
        case 'todoList/delete':
            const { id } = acction.payload;
            console.log(id);
            return state.filter(user => user.id !== id)
        default:
            return state
    }

}

export default rootReducers