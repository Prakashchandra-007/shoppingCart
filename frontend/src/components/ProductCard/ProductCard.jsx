import React from "react";
import { productAction } from "../../store/index";
import "./productcard.css";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
function ProductCard(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartList);
  const productData = useSelector((state) => state.productList);
  function addToCart(e) {
    const selectItem = productData.filter((item) => {
      return item.id == props.id;
    });
    // console.log(selectItem);
    dispatch(productAction.addToCart(selectItem[0]));
  }
  return (
    <div className="product-card">
      <img src={props.img} alt={props.name} />
      <div className="product-details">
        <p>{props.name}</p>
        <h3>₹{props.price}</h3>
      </div>
      <Link to={`/product/${props.id}`}>
        <button className="btn view-btn">
        View
        </button></Link>
      <button className="btn addCart-btn" onClick={addToCart}>
          Add to cart
        </button>
      <div>
        
      </div>
    </div>
  );
}

export default ProductCard;
