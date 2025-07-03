const TodoData = (props) => {

  const {name,todoList} = props; 
  console.log(">>>> check props: ", todoList)
    return (
      <div className='todo-data'>
          {todoList.map((item,index) =>{
            console.log('>>> check map : ', index,item)
            return (
              <div className="data-child">
                {item.name}
                <button>delete</button>
              </div>);
          })}
        
        <div>
          {JSON.stringify(todoList)}
        </div>
      </div>
    )
}
export default TodoData;