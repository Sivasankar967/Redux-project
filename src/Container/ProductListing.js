import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import {setProducts} from '../redux/actions/productAction'

const ProductListing =()=>{
const Products = useSelector((state)=> state);
const dispatch = useDispatch();
console.log(Products)

const fetchProducts = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
    console.log('Err', err);
    })
    dispatch(setProducts(response.data))
}
    useEffect(()=>{
    fetchProducts();
    },[])

    console.log('Products : ',Products)
    return(
    <div className='ui grid container'>
        <ProductComponent/>
        </div>     
        )

};

export default ProductListing;