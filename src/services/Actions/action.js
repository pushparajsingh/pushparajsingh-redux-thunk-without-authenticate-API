import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'


export const addToCart = () =>{
   console.log("hello world")
    return {
        type:ADD_TO_CART,
    }
}   
export const removeToCart = () =>{
    

    return {
      type:REMOVE_TO_CART
    }
}

 export const show_posts = (a) => {
    return { 
        type:'GET_POST',
        payload:a
    }
 }        
          

