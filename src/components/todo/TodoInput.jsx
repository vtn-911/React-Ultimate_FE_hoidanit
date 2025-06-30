const TodoInput = (props) =>{
    const {addNewTodo} = props
    return (
        <div className='todo-new'>
        <input type="text" className='todo-input' placeholder='Enter your task' />
        <button className='todo-button' onClick={addNewTodo}>Add</button>
      </div>
    )
}
export default TodoInput;