const TodoInput = (props) =>{
    const {addNewTodo} = props
    const handleOnchange = (name) => {
      console.log('check handleonchange',name)
    }
    return (
        <div className='todo-new'>
        <input type="text" className='todo-input' placeholder='Enter your task' onChange={(event) => handleOnchange(event.target.value)} />
        <button className='todo-button' onClick={addNewTodo}>Add</button>
      </div>
    )
}
export default TodoInput;