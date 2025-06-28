// 28/6
// Cách sử dụng biến số với JSX
import "./style.css";
const MyComponent = () => {
  // const  hoidanit = 25;
  // const  hoidanit = [1,2,3];
  const  hoidanit = {
    name: "hoidanit",
    age: 25
  };
  return (
    <>
        <div> {JSON.stringify(hoidanit)} & hoidanit</div>
        <div>{console.log('ERIC')}</div>
        <div className="child">child</div>
    </>
  );
}

export default MyComponent;