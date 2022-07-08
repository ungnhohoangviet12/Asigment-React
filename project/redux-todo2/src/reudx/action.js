
export const todoAdd = (data) => {
    return {
        type: 'todoList/todoAdd',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const deleteItem = (id) => {
    return {
        type: 'todoList/delete',
        payload: id
    }
}


