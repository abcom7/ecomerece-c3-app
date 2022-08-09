
const initialState = {
    ProductsInfo:[{
        "category": " ",
        "description": " ",
        "id": 0,
        "image": " ",
        "price": 0,
        "rating": { "rate": 0, "count": 0 },
        "title": " initial state"
      }],
      
      cart_item:[],
    }    

const eReducer = ( state = initialState, action) =>{
    switch (action.type){
        case"addCart":
        return {
            ...state,
            ProductsInfo: action.payload
        }
        case"deleteCart":
        return {
            ...state,
            cart_item: [...state.cart_item,action.payload],
            cart_counter:state.cart_counter+1
        }
        case"removeCart":
        return { ...state, 
            cart_item: state.cart_item.filter((cart_item)=> cart_item!==action.payload), cart_counter:state.cart_counter-1
        }
        
        default:
            return state;
  
}
}
export default eReducer