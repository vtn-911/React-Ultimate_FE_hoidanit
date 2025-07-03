import { useState } from "react"

const TodoInput = (props) =>{
  // useState hook (getter/setter)
    // const valueInput = 'nhi'
    const [valueInput,setValueInput] = useState ('Nhi')

    const {addNewTodo} = props

    const handleClick = () =>{
      if(valueInput != ''){ // Nếu giá trị nhập vào là rỗng thì sẽ không add được vào danh sách
        addNewTodo(valueInput)
      }
      setValueInput('') // mỗi khi nhấn nút add thì ô input sẽ quay trở về rỗng
    }
    const handleOnchange = (name) => {
      setValueInput(name)
    }
    return (
        <div className='todo-new'>
          <input 
            type="text" 
            className='todo-input' 
            placeholder='Enter your task' 
            onChange={(event) => handleOnchange(event.target.value)} 
            value={valueInput} // Để dễ kiểm soát giá trị trong ô input
          />
          <button className='todo-button' onClick={handleClick}>Add</button>
          <div>
            My text input is = {valueInput}
          </div>
      </div>
    )
}
export default TodoInput;