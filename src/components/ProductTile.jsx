import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";

function ProductTile({ cartItem }) {
  const dispatch = useDispatch();

  function removeCartItem() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="min-w-24 flex flex-col items-center m-10 bg-red-600 rounded-xl border-red-600 min-h-24">
      <div className="w-full flex justify-evenly items-center mx-auto space-x-3 p-5">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="h-28 rounded"
        />
        <div className="flex flex-col my-2 space-y-2">
          <h3 className="text-xl text-white font-bold my-2">
            {cartItem.title}
          </h3>
          <button
            className="bg-red-900 rounded-lg mt-2 text-white font-bold border-2 p-4"
            onClick={removeCartItem}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
