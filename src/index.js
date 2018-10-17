import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Drink cup of tea</li>
            <li>Build awesome application</li>
            <li>Walk with pet</li>
        </ul>
    )
};

const el = (
    <div>
        <h1>My Todo List</h1>
        <input placeholder="search"/>
        <TodoList/>
    </div>

)

ReactDom.render(el, document.getElementById('root'));