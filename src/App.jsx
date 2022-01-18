import "./styles/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Index from "./components/Index";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Create from "./components/Create";
import { useState } from "react";

const App = () => {
    const [cart, setCart] = useState([]);
    const [cartActive, setCartActive] = useState(false);

    const addItem = (id, quantity, name, price, img) => {
        let arr = [...cart];
        let quanInc = false;

        if (cart.length !== 0) {
            for (let product of arr) {
                if (product.id === id) {
                    quanInc = true;
                }
            }

            if (quanInc) {
                for (let product of arr) {
                    if (product.id === id) {
                        product.quantity++;
                        setCart(arr);
                    }
                }
            } else {
                arr = [...cart, { id, quantity, name, price, img }];
                setCart(arr);
            }
        } else {
            setCart([{ id, quantity, name, price, img }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((product) => product._id === id));
    };

    const toggleCartActive = () => {
        setCartActive(!cartActive);
    };

    return (
        <>
            <BrowserRouter>
                <Nav cart={cart} toggleCartActive={toggleCartActive} />
                <Cart
                    cart={cart}
                    toggleCartActive={toggleCartActive}
                    cartActive={cartActive}
                    removeItem={removeItem}
                />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Index addItem={addItem} cart={cart} />}
                    ></Route>
                    <Route
                        exact
                        path="/products"
                        element={<Products addItem={addItem} cart={cart} />}
                    ></Route>
                    <Route exact path="/create" element={<Create />}></Route>
                    <Route exact path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
