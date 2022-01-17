import { FaTimes } from "react-icons/fa";

const Cart = ({ cart, cartActive, toggleCartActive }) => {
    return (
        <div
            className="cart-large fixed top-0 right-0 w-1/6 h-screen bg-lightChocolate shadow-xl p-10"
            id={cartActive ? "cart-active" : "cart-inactive"}
        >
            <FaTimes
                className="close-side cursor-pointer"
                onClick={toggleCartActive}
            />
            {cart.length === 0 ? (
                <p className="text-center">No Products to display</p>
            ) : (
                cart.map((product) => {
                    return (
                        <div className="product-tab" key={product._id}>
                            <h1>{product.name}</h1>
                            <h2>{product.quantity}</h2>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Cart;
