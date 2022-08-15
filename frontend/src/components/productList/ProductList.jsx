import React from "react";
import "./productlist.css";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../store/index";
function ProductList(props) {
  const cartData = useSelector((state) => state.cartList);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();
  // console.log(props);
  function handleRemoveItem(e) {
    // console.log(e.target.id);
    let updtedPrice = totalPrice - 100;
    dispatch(productAction.removeFromCart(e.target.id));
    dispatch(productAction.addPrice(updtedPrice));
  }
  return (
    <div className="product-list">
      <div className="img-sec">
        <img src={props.img} alt="" />
      </div>
      <div>
        <p className="product-list-header list-data">{props.name}</p>
        <p className="product-list-details list-data  ">Size:S</p>
        <p className="product-list-details list-data ">Seller:YoungTrendz</p>
        <h3>
          <span className="offRate list-data ">
            ₹{props.price + Math.round(0.74 * props.price)}
          </span>{" "}
          ₹{props.price} <span className="offPercentage">74% Off</span>
        </h3>
        <button
          className="btn-remove list-data "
          id={props.id}
          onClick={handleRemoveItem}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default ProductList;
