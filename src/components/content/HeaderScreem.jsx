import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./headerScreen.css"

const HeaderScreem = () => {

    const navbar = useRef()
    console.log(navbar.current)

    const menuBars = () => {
        navbar.current.classList.toggle("navbar_open")
    }
    return (
        <header className='header'>
            <h1 className='header_title'>
                <Link to="/">E-commerce</Link>
            </h1>
            <div onClick={menuBars} className='header_bars'>
            <i className="fa-solid fa-bars"></i>
            </div>
            <nav ref={navbar} className='navbar'>
                <ul className="navbar_list">
                    <li className="list_items">
                        <NavLink  to="/login" className={({isActive} ) => isActive ? "navbar_links-active navbar_links" : "navbar_links"} >
                        <i className="fa-solid fa-user"></i>
                        <p className='navbar_labal'>Login</p>
                        </NavLink>
                    </li>
                    <li className="list_items">
                        <NavLink to="/purchase" className=
                        {({isActive} ) => isActive ? "navbar_links-active navbar_links" : "navbar_links"}
                        >
                        <i className="fa-solid fa-store"></i>
                        <p className='navbar_labal'>Purchase</p>
                        </NavLink>
                    </li>
                    <li className="list_items">
                        <NavLink to="/cart" className=
                        {({isActive} ) => isActive ? "navbar_links-active navbar_links" : "navbar_links"} 
                        >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p className='navbar_labal'>Cart</p>

                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default HeaderScreem