import { useEffect, useState } from "react";
import BASE_API_URL from "../BASE_API_URL";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const prodJson = await fetch(`${BASE_API_URL}/products`);
            const prods = await prodJson.json();

            return prods;
        };
        const prods = getProducts();

        setProducts(prods);
    }, []);

    return <>{console.log(products)};</>;
};

export default Products;
