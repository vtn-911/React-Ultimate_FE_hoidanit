//JSX
import "./style.css";
const MyComponent = () => {
  return (
    //Fragment: giúp không render thừa thải HTML
    <>
        <div>eric & hoidanit</div>
        <div className="child">child</div>
    </>
  );
}

export default MyComponent;