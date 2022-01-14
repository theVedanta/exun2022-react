import "./styles/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Index from "./components/Index";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Create from "./components/Create";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Index />}></Route>
                    <Route
                        exact
                        path="/products"
                        element={<Products />}
                    ></Route>
                    <Route exact path="/create" element={<Create />}></Route>
                    <Route exact path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
