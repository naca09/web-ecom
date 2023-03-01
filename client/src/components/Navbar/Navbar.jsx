import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="wrapper"></div>
            <div className="left">
                <div className="item">
                    <img src="img-e/en.png" alt="" />
                    <ArrowDropDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <ArrowDropDownIcon/>
                </div>
                <div className="item">
                    <Link to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link to="/products/3">Children</Link>
                </div>
            </div>
            <div className="center">
            <Link className='link' to="/">Store ll</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className="link" to="/">HomePabe</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Contect</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SavedSearchIcon/>
                    <PersonOutlineIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <FavoriteBorderIcon/>
                    <span>{Products.length}</span>
                    </div>
                </div>
            </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar
