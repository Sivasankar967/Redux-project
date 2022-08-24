
import { ActionTypes } from "../constants/action-types"
export const setProducts =(Products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload :Products,
    }
}

export const selectedProduct =(Product)=>{
    return{    
        type:ActionTypes.SELECTED_PRODUCT,
        payload: Product,
    };
};


export const removeSelectedProduct =()=>{
    return{    
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
};