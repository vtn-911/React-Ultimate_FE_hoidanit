import TodoInput from './TodoInput'
import TodoData from './TodoData'
import './todo.css'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () =>{
  // Array destructuring
  const [todoList,setTodoList] = useState ([
    // mỗi một lần biến TodoList thay đổi thì thì ngay lập tức component TodoData sẽ thay đổi 
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "watching youtube"}
  ])
// Thêm mới todoList
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1,10000000),
      name : name
    }
    setTodoList([...todoList,newTodo])
  }
// Xóa todoList
  const deleteTodo = (id) =>{
    const newTodo = todoList.filter(item => item.id !== id)
    console.log(newTodo)
    setTodoList(newTodo)
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
return (
   <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput
        addNewTodo ={addNewTodo}
        />


    {todoList.length > 0  ? // render với điều kiện
      <TodoData
        todoList = {todoList}  
        deleteTodo = {deleteTodo}
      />
    :
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>
    }       
    </div>
)
}
export default TodoApp;