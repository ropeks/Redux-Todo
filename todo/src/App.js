import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // state = {
  //    todos: []
  // }

  return (
    <div className="app">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
