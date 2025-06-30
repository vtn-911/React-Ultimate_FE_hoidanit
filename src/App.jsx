import TodoInput from './components/todo/TodoInput'
import TodoData from './components/todo/TodoData'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
function App() {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput/>
      <TodoData/>
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
