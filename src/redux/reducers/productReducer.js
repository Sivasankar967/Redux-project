import { ActionTypes } from "../constants/action-types";

const initialState ={
    Products:[],
}

export const ProductReducer =(state = initialState,{type,payload}) => {
 switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {...state ,Products:payload};
        default:
         return state;
 }
};

export const selectedProductReducer =(state = {},{type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_PRODUCT:
           return {...state , ...payload};
          
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
           return {};
           default:
            return state;
    }
   };