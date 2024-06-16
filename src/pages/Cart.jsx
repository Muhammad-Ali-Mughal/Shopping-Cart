import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductTile from "../components/ProductTile";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => (acc = curr.price), 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <>
      {cart && cart.length ? (
        <>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-1">
            {cart.map((cartItem) => (
              <ProductTile cartItem={cartItem} />
            ))}
          </div>
          <div className="w-full flex  items-end justify-end p-10">
            <div className="flex flex-col">
              <div>
                <span className="font-bold text-lg p-3">Total Items: </span>
                <span className="font-bold text-lg">{cart.length}</span>
              </div>
              <div>
                <span className="font-bold text-lg p-3">Total Amount: </span>
                <span className="font-bold text-lg">{totalCart}</span>
              </div>
              <button className="bg-red-900 rounded-lg mt-2 text-white font-bold border-2 p-4">
                Proceed to Check Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold my-2">Your Cart is Empty!</h2>
          <Link to={"/"}>
            <button className="bg-red-900 rounded-lg mt-2 text-white font-bold border-2 p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
