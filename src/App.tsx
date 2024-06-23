import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MyWeather from './MyWeather';
import TodoModal from './TodoModal';

function App() {
  let name = "리액트";
  return (
    <div className='container'>
      <TodoList></TodoList>
      <MyWeather weather='맑음'> 일기 예보</MyWeather>
    </div>
  );
}

export default App;