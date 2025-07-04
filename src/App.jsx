import TodoInput from './components/todo/TodoInput'
import TodoData from './components/todo/TodoData'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


function App() {
  const [todoList,setTodoList] = useState ([
    // mỗi một lần biến TodoList thay đổi thì thì ngay lập tức component TodoData sẽ thay đổi 
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "watching youtube"}
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1,10000000),
      name : name
    }
    setTodoList([...todoList,newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput
        addNewTodo ={addNewTodo}/>


    {todoList.length > 0  ?
      <TodoData
        todoList = {todoList}  
      />
    :
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>
    } 


    {/* {todoList.length > 0 && Cách 1
      <TodoData
              todoList = {todoList}  
            />
    }

    {todoList.length === 0 && 
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>
    }   */}
      
    </div>
  )
}

export default App
