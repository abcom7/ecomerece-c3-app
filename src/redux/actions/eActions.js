export const addCart = (Product) => {
    return {
        type:"addCart",
        payload: Product
        
    }
}

export const deleteCart = (Product) => {
   
    return {
        type:"deleteCart",
        payload: Product
        
    }
}
export const removeCart = (Product) => {
   
    return {
        type:"removeCart",
        payload: Product
        
    }
}
