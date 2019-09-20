import React, { Component } from 'react';
import './todo-list.css';

const TodoList = ({data, onButtonClick}) => {

    const todo = data.map((item) => {
        const {id, text} = item;

        return (
            <li className='todo-list-item' key={id}>
                <button
                    onClick={() => onButtonClick(id)}
                    className='todo-list-btn'></button>
                <span className='todo-list-text'>{text}</span>
            </li>
        )
    });

    return (
        <div className="todo-list">
            <h3 className='todo-list-header'>Small todo list</h3>
            <ul className='todo-list-body'>
                { todo }
            </ul>    
        </div>
    );
};

class TodoListContainer extends Component {

    state = {
        todos: [
            {id: 1, text: 'Buy a milk'},
            {id: 2, text: 'Go to the docto'},
            {id: 3, text: 'Make test exersise'},
            {id: 4, text: 'Send document the Mik'},
            {id: 5, text: 'Plan vacation'},
            {id: 6, text: 'Call to boss'},
            {id: 7, text: 'Create new stuf'}
        ]
    }
    render() {

        const onButtonClick = (id) => {
            this.setState(({todos}) => {
                let idx = todos.findIndex((item) => item.id === id);
                let oldItem = todos[idx];
                let newItem = {
                    ...oldItem,['done']: !oldItem.done
                }
                console.log(newItem);
                return [
                    ...todos.slice(0, idx),
                    newItem,
                    ...todos.slice(idx + 1)
                ]
            });
        }

        return(
            <TodoList 
                onButtonClick={onButtonClick}
                data={this.state.todos} />
        );
    }
}

export default TodoListContainer;