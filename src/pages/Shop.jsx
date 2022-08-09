import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import Product from "../components/Product"

const Shop = () => {
    const ProductsInfo = useSelector((state) => state.ecom.ProductsInfo) 
    const [productsInfo, setProductsInfo] = useState([])
    
    useEffect(() => {
        const data = ProductsInfo.filter((product) => product.productsInfo === "Shop")
         setProductsInfo(data)
    }, [!productsInfo])
    return (
    <div>
       <h2>Shop</h2>
       <div className="d-flex  flex-wrap  ">
        {productsInfo.map((json, i) => {
          return <Product data={json}  key={i} />
        })}
    </div>
    </div>
  )
}

export default Shop