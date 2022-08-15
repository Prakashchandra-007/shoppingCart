import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import ProductList from "../components/productList/ProductList";
import PriceBoard from "../components/PriceBoard/PriceBoard";
function Cart() {
  const addedItems = useSelector((state) => state.cartList);
  return (
    <div className="cart">
      <div className="cart-section">
        {addedItems.length !==0
          ? addedItems.map((items, idx) => {
            console.log(items);
              return (
                <ProductList
                  key={idx}
                  id={idx}
                  img={items.attributes.ImageUrl}
                  name={items.attributes.name}
                  price={items.attributes.price}
                />
              );
            })
          : <h2>"NO item Added"</h2>}
      </div>
      <div className="price-section">
        {<PriceBoard items={addedItems}/>}
      </div>
    </div>
  );
}

export default Cart;
