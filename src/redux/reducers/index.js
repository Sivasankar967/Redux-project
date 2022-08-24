import { combineReducers } from 'redux';
import { ProductReducer,selectedProductReducer } from './productReducer';


const reducers = combineReducers ({
allProducts : ProductReducer,
Product :selectedProductReducer
});

export default reducers