import { useEffect, useState } from "react";
import BASE_API_URL from "../BASE_API_URL";
import ProductCard from "./ProductCard";

const Products = ({ addItem, cart }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const prodJson = await fetch(`${BASE_API_URL}/products`);
        const prods = await prodJson.json();

        setProducts(prods.products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="cards flex justify-center px-24 py-10">
                {products.map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            key={product._id}
                            addItem={addItem}
                            cart={cart}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Products;
