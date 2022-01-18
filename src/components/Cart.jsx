import { FaTimes } from "react-icons/fa";
import BASE_IMG_URL from "../BASE_IMG_URL";
import BASE_API_URL from "../BASE_API_URL";

const Cart = ({ cart, cartActive, toggleCartActive, removeItem }) => {
    const placeOrder = async () => {
        const orderData = await fetch(`${BASE_API_URL}/place`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orders: cart }),
        });
        const ordered = await orderData.json();

        console.log(ordered);
        if (ordered.done) {
            for (let pr of cart) {
                removeItem(pr.id);
            }
        }
    };

    return (
        <div
            className="cart-large fixed top-0 right-0 w-1/4 h-screen bg-lightChocolate shadow-xl p-10 px-6 pt-28"
            id={cartActive ? "cart-active" : "cart-inactive"}
            style={{ zIndex: "100" }}
        >
            <FaTimes
                className="close-side cursor-pointer absolute top-10 right-10 text-3xl"
                onClick={toggleCartActive}
            />
            {cart.length === 0 ? (
                <p className="text-center text-2xl">No Products to display</p>
            ) : (
                cart.map((product) => {
                    return (
                        <div
                            className="product-tab w-full rounded-xl shadow-lg bg-darkChocolate p-5 flex justify-start items-center mb-5"
                            key={product._id}
                        >
                            <img
                                src={`${BASE_IMG_URL}/${product.img}`}
                                alt="h"
                                className="prod-img w-20 h-16 rounded-xl"
                            />
                            <div className="flex flex-col ml-5">
                                <h1 className="text-lg">{product.name}</h1>
                                <h2 className="text-sm">
                                    QTY: {product.quantity}
                                </h2>
                            </div>
                        </div>
                    );
                })
            )}

            {cart.length !== 0 ? (
                <button
                    className="order rounded-xl bg-darkChocolate w-10/12 flex justify-center items-center py-3 absolute bottom-10 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                    onClick={placeOrder}
                >
                    Place Order
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;
