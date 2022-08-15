import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialStates ={
    productList : [],
    cartList : [],
    totalPrice:0,
}
const productSlice = createSlice({
    name:'product',
    initialState:initialStates,
    reducers:{
        addProducts(state,actions){
            state.productList=[...actions.payload];
        },
        addToCart(state,actions){
            state.cartList.push(actions.payload);
        },
        removeFromCart(state,actions){
            state.cartList.splice(actions.payload,1);
        },
        addPrice(state,actions){
            state.totalPrice = actions.payload;
        }
    }
})


const store = configureStore(productSlice);
export const productAction = productSlice.actions;
export default store;
