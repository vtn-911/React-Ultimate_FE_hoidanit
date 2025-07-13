import { Link } from "react-router-dom";
import "./header.css"
const Header = () => {
    return (
        <ul>
            {/* thay đổi thẻ a -> Link : giúp trang không bị reload lại */}
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>

    )
}

export default Header;