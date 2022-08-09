import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Cart from "../pages/Cart"

const Navbar = () => {
    const cart_item = useSelector((state) => state.ecom.cart_item)

  return (
<div>
        <nav class="navbar navbar-expand-lg bg-dark shadow-sm">
    <div class="container">
    <img src= "" alt="The Logo of the store" height={80} width={80} />
          <Link className="navbar-brand fw-bold fs-4" to="/">
          LULALA
            </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link active text-white"   to="/"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "orange" : "white"
                                    })} >Home</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link active text-white"   to="/Products"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "orange" : "white"
                                    })} >Products</Link>
                </li>

            </ul>
            </div>
          <Link className='nav-link text-danger d-flex flex-row'to ="/Cart" ><img src={Cart} style={{"width":"30px", "margin":"5px"}}/>{cart_item.length} <i class="bi bi-cart4"></i></Link>
      
 
    </div>
</nav>
    </div>
   
  )
}

export default Navbar