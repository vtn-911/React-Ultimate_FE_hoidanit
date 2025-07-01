import { useState } from "react"

const TodoInput = (props) =>{
  // useState hook (getter/setter)
    // const valueInput = 'nhi'
    const [valueInput,setValueInput] = useState ('Nhi')

    const {addNewTodo} = props

    const handleClick = () =>{
      console.log('check : ',valueInput)
    }
    const handleOnchange = (name) => {
      setValueInput(name)
    }
    return (
        <div className='todo-new'>
        <input type="text" className='todo-input' placeholder='Enter your task' onChange={(event) => handleOnchange(event.target.value)} />
        <button className='todo-button' onClick={handleClick}>Add</button>
        <div>
          My text input is = {valueInput}
        </div>
      </div>
    )
}
export default TodoInput;