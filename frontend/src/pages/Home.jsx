import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import productData from "../Helper/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../store/index";
import './home.css';
import getData from "../api/index";

function Home(e) {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  function loadData(e) {
    console.log(e.target.value);
  }
  // console.log(productData);
  useEffect(() => {
    const dataapi = getData("http://localhost:1337/api/products/");
    dataapi.then(res=>{
      // console.log(res.data);
      dispatch(productAction.addProducts(res.data));
    });
    
  }, [productData]);
  // console.log(productList);
  return (
    <div className="home-product-list">
      {productList &&
        productList.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.attributes.ImageUrl}
              name={item.attributes.name}
              price={item.attributes.price}
              />
              
          );
        })}
    </div>
  );
}

export default Home;
