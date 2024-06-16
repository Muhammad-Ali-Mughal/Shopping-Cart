import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <>
      <div className="flex flex-col items-center border-2 border-red-500 rounded-xl gap-3 p-4 h-[360px] mt-10 ml-5">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h2 className="w-40 truncate mt-3 font-bold text-lg text-gray-800">
            {product?.title}
          </h2>
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <button
            className="bg-red-900 rounded-lg text-white font-bold border-2 p-4"
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
