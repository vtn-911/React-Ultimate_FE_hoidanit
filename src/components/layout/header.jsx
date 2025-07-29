import { Link, NavLink } from "react-router-dom";
import "./header.css"
const Header = () => {
    return (
        <ul>
            {/* giống hệt thẻ Link nhưng khác là NavLink tự động thêm className="active" (nếu ứng với địa chỉ nào mà mình click vào)  */}
            {/* NavLink: cần Header với CSS  */}
            {/* Link: cần điều hướng */}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/book">Book</NavLink></li>
        </ul>

    )
}

export default Header;