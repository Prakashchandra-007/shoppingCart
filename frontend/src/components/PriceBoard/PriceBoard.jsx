import React, { useMemo } from "react";
import "./priceboard.css";
import {useSelector,useDispatch} from "react-redux";
import {productAction}  from '..//../store/index';
function PriceBoard(props) {
  const totalPrice = useSelector(state=>state.totalPrice);
  const cartList = useSelector(state=>state.cartList);
  let calculatedPrice = 0;
  const dispatch = useDispatch();
  console.log(props.items)
  useMemo(()=>{
    const st = cartList.reduce((acc,i)=>{return i.attributes.price+acc},0);
    console.log(st);
    dispatch(productAction.addPrice(st));
  },[cartList])
  return (
    <div className="priceboard">
      <div className="priceboard-header">
        <h2>PRICE DETAILS</h2>
      </div>
      <div className="priceboard-section">
        <ul>
          <li>
            <h3>Price ({cartList.length} items)</h3>
            <h3> ₹{totalPrice}</h3>
          </li>
          <li>
            <h3>Discount</h3>
            <h3>− ₹{0.3*totalPrice}</h3>
          </li>
          <li>
            <h3>Delivery Charges</h3>
            <h3> Free</h3>
          </li>
          <hr />
          <li>
            <h3>Total Amout</h3>
            <h3> ₹{totalPrice-(0.3*totalPrice)}</h3>
          </li>
        </ul>
      <button className="order-btn">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default PriceBoard;
