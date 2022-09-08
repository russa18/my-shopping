import React from 'react';
import shop from "./shop.png";
import "./Navbar.css";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const item = useSelector((state) => state.cart)

    return (
        <>
            <div className='nav-wrapper'>
                <Link to="/">
                    <img className="nav-logo" src={shop} alt="" />
                </Link>
                <div >
                    <input type="search" placeholder="Search for products, brands and more" name="nav-search" id="" className='nav-search nav-link' />
                    <Button variant="contained"><SearchIcon /></Button>
                </div>

                <Link to="/" className="nav-link nav-link-home"><HomeIcon fontSize="large" /></Link>
                <Link to="/cart" className="nav-link "  ><ShoppingCartIcon fontSize="large" /></Link>
                <div className='cart-count'>
                    cart items : {item.length}
                </div>
            </div>

        </>
    )
}

export default Navbar