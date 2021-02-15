import React from 'react'
import TodoList from './Todo/TodoList'


function App() {
  const books = [{
    author: 'J. Salinger', title: 'The Catcher in the Rye',
}, {
    author: 'F. Dostoevsky', title: 'Notes from the underground',
}, {
    author: 'J.R.R. Tolkien', title: 'The Lord of the Rings',
}, {
    author: 'W. Golding', title: 'The Lord of the Flies'
}];

  return (<div className='wrapper'>
    <h1>React to do</h1>

    <TodoList books={books}/>
  </div>)
}

export default App
