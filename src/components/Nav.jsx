import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Nav = ({ cart, toggleCartActive }) => {
    return (
        <nav className="nav w-screen bg-darkChocolate px-24 py-5 flex justify-between items-center shadow-xl">
            <div className="logo w-1/3">
                <img src="/logo.svg" alt="h" className="w-20 h-10 rounded-xl" />
            </div>
            <div className="links w-1/3 flex justify-between">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className="cart w-1/3 flex justify-end">
                <FaShoppingBag
                    className="text-3xl"
                    onClick={toggleCartActive}
                />
                <div className="quan">{parseInt(cart.length)}</div>
            </div>
        </nav>
    );
};

export default Nav;
