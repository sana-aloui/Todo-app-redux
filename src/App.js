import React from 'react';
import TodoInput from './component/TodoInput';
import  ItemList  from './component/ItemList';
import "./App.css";



// import './App.css';

function App() {
  return (
    <div className="App">
     <TodoInput/>
     <ItemList/>
    </div>
  );
}

export default App;
