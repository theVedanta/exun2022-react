import BASE_IMG_URL from "../BASE_IMG_URL";

const ProductCard = ({ product, addItem, cart, hidden }) => {
    return (
        <div
            className="card bg-darkChocolate shadow-lg p-7 rounded-xl mx-10 mb-10 w-1/4"
            style={hidden ? { display: "none" } : { display: "inline-block" }}
        >
            <img
                src={`${BASE_IMG_URL}/${product.img}`}
                alt="product img"
                className="card-img w-full h-56 rounded-xl"
            />
            <h1 className="text-center pt-5 text-2xl">{product.name}</h1>
            <p className="text-center text-3xl pt-4">${product.price}</p>
            <button
                className="bg-lightChocolate w-full py-3 mt-5 rounded-xl"
                onClick={() =>
                    addItem(
                        product._id,
                        1,
                        product.name,
                        product.price,
                        product.img
                    )
                }
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
