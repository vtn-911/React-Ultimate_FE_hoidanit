const TodoData = (props) => {

  const {todoList} = props; 
    return (
      <div className='todo-data'>
          {todoList.map((item,index) =>{
            console.log('>>> check map : ', index,item)
            return (
              <div className={`data-child`} key={item.id}>
                {item.name}
                <button>delete</button>
              </div>);
          })}
      </div>
    )
}
export default TodoData;