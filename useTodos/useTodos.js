import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


// const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
// ];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

        // init es la funcion que inicializa nuestro reducer
        const [ todos, dispatch ] = useReducer( todoReducer, [], init );

        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify( todos ) );
        }, [todos])
        
    
        const handleNewTodo = ( todo ) => {
            const action = {
                type: '[TODO] Add Todo',
                payload: todo
            }
    
            // dispatch es la funcion que se usara para mandar esta accion 
            dispatch( action );
        }
    
        const handleDeleteTodo = ( id ) => {
            dispatch({
                type: '[TODO] Remove Todo',
                payload: id
            })
        }
    
        const handleToggleTodo = ( id ) => {
            dispatch({
                type: '[TODO] Toggle Todo',
                payload: id
            })
        }

        return {
            todos,
            todosCount: todos.length,
            pendingTodosCount: todos.filter( todo => !todo.done ).length,
            handleNewTodo,
            handleDeleteTodo,
            handleToggleTodo,
        }

}
