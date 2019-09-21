import React, { Component } from 'react';
import './todo-list.css';

const TodoList = ({data, onButtonClick}) => {

    // make loop and show data
    const todo = data.map((item) => {
        const {id, text, done} = item;


        // make todo is done
        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }

        return (
            <li className={classNames} key={id}>
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

    // create todos data
    state = {
        todos: [
            {id: 1, text: 'Buy a milk', done: false},
            {id: 2, text: 'Go to the docto', done: true},
            {id: 3, text: 'Make test exersise', done: false},
            {id: 4, text: 'Send document the Mik', done: false},
            {id: 5, text: 'Plan vacation', done: true},
            {id: 6, text: 'Call to boss', done: false},
            {id: 7, text: 'Create new stuf', done: false}
        ]
    }
    render() {

        // change state, when todo is done
        const onButtonClick = (id) => {
            this.setState(({todos}) => {
                let idx = todos.findIndex((item) => item.id === id);
                let oldItem = todos[idx];
                let newItem = {
                    ...oldItem,['done']: !oldItem.done
                }
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