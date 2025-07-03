const TodoData = (props) => {
  // props là một biến object
  const {name,todoList} = props; // có thể lấy nhiều key hơn dựa vào object được truyền từ thằng cha là App.jsx
  console.log(">>>> check props: ", props)
    return (
      <div className='todo-data'>
        <div className="data-child">Learning React</div>
        <div className="data-child">watching youtube</div>
        <div>
          {JSON.stringify(todoList)}
        </div>
      </div>
    )
}
export default TodoData;