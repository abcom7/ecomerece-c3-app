import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Product from '../components/Product'




const Cart = () => {
  
  
    const cart_item = useSelector((state) => state.ecom.cart_item)
    const ProductsInfo = useSelector((state) => state.ecom.ProductsInfo)
    const [Mesg, setMesg] = useState('.')

    useEffect(() => {
        if (cart_item.length === 0) { setMesg("Cart is empty") }

    });

    var result = []
    var total=0;
   
    for (var i = 0; i <cart_item.length; i++) {
        result = [...result, ProductsInfo.filter((ProductsInfo) => ProductsInfo.id === cart_item[i])]
        total += result[0][0].price
    }
    
    return (
        <div>
             <div className='col-12 d-flex justify-content-center text-primary'>{Mesg}</div>
            
            <div className="d-flex  flex-wrap  ">
            
                {result.map((json, i) => {
                    return <Product data={json[0]} Cart={true} key={i} />
                })
                }

            </div>
            <div className='col-12 d-flex justify-content-center text-primary fs-1'>Overall : {total}$</div>
        </div>
    )


}
export default Cart;