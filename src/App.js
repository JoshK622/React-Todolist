import React, { useState, useRef } from 'react';
import Todo from './components/Todo';
import Filter from './components/Filter';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const inputRef = useRef(null);

  function handleInput() {
    const nextList = [...todos.slice(), { title: inputRef.current.value, checked: false }];
    inputRef.current.value = '';
    setTodos(nextList);
  }

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  function handleCheckboxChange(index) {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  function filteredTodos() {
    if (filter === 'All') {
      return todos;
    } else if (filter === 'Todo') {
      return todos.filter((todo) => !todo.checked);
    } else {
      return todos.filter((todo) => todo.checked);
    }
  }

  return (
    <div>
      <h1>My Todos</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div>
        <input type="text" id="title" ref={inputRef}></input>
        <button onClick={handleInput}>Add</button>
      </div>

      {filteredTodos().map((todo, i) => (
        <Todo
          key={i}
          title={todo.title}
          checked={todo.checked}
          onCheckboxChange={() => handleCheckboxChange(i)}
        />
      ))}
    </div>
  );
}