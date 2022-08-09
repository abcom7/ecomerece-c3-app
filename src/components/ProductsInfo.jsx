import React, { useEffect, useState }from "react";
import { Link } from "react-router-dom";
import {addCart} from "../redux/actions/eActions";

const ProductsInfo = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(true);
    let component = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(component){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                component = false;
            }
        }
        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <p>loading...</p>
            </div>
            </>
        );
    };

    const ShowProducts = () => {
        return(
            <>
            {filter.map((Product) => {
                return(
                    <>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4" key={Product.id}>
                            <img src={Product.image} className="card-img-top" alt={Product.title} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{Product.title.substring(0,12)}...</h5>
                                <p className="card-text lead fw-bold">
                                ${Product.price}
                                </p>
                                <div>
        <Link to={`/product/${Product.id}`}>
          <button
            onClick={() => addCart(Product)}
          >
            View Item
          </button>
        </Link>
      </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
            </>
        )
        
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row justify-content-center">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
    }

export default ProductsInfo;
