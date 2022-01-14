import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="logo">Logo</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/create">Creation</Link>
            </div>
        </nav>
    );
};

export default Nav;
