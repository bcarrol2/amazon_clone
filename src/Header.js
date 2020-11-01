import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className="header">
            <MenuIcon className="header__menuIcon" />
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG1.png" />
            </Link>
            <div className="header__search" >
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />   
            </div>
            <div className="header__nav">
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello name,</span>
                        <span className="headeer__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="headeer__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="headeer__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
