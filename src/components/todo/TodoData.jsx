const TodoData = (props) => {

  const {todoList,deleteTodo} = props; 
  const handleClick = (id) =>{
    deleteTodo(id)
  }

    return (
      <div className='todo-data'>
          {todoList.map((item,index) =>{
            console.log('>>> check map : ', index,item)
            return (
              <div className={`data-child`} key={item.id}>
                {item.name}
                <button onClick={()=>handleClick(item.id)}>delete</button>
              </div>);
          })}
      </div>
    )
}
export default TodoData;