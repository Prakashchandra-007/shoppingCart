import React ,{useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productdetail.css";
function ProductDetail() {
  
  const { id } = useParams("id");
  const productList = useSelector(state=>state.productList);

  // console.log(productList);
  const [product] = productList.filter(item=>{
    return item.id == id;
  });
  console.log(product); 
  return (
    <div className="product-details-container">
      <div className="product-gallary">
        <img src={product && product.attributes.ImageUrl} alt="" />
      </div>
      <div className="product-information">
        <p>{product.attributes.name}</p>
        <p style={{color:'green'}}>Extra ₹4000 off</p>
        <span><h1>₹{product.attributes.price}</h1><p style={{textDecoration: 'line-through',color: '#787678'}}>₹11,99933% off</p></span >
        <p>POCO C31 (Royal Blue, 64 GB) (4 GB RAM)</p>
      
      </div>
    </div>
  );
}

export default ProductDetail;
