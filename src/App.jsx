import TodoInput from './components/todo/TodoInput'
import TodoData from './components/todo/TodoData'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


function App() {
  const [todoList,setTodoList] = useState ([
    {id: 1, name: "Learning React"},
    {id: 2, name: "watching youtube"}
  ])
  const hoidanit = "Nhipro"
  const name = 'Tuyet Nhi'
  const addNewTodo = () => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput
        addNewTodo ={addNewTodo}/>
      <TodoData
        name = {hoidanit}
        todoList = {todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
