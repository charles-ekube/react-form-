import React from 'react';
import { Avatar, Logo } from '../../../assets/images';
import './style.css';



const Navbar = () => {

    return (
        <>
            <header>
                <nav className='navbar-container'>
                    <ul className='navbar-list'>
                        <li className='menu-btn'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                        <li className='logo'>
                            <img src={Logo} alt='logo'/>
                            <span>1StopShop</span>
                        </li>
                        <li className='avatar'>
                            <img src={Avatar} alt='avatar'/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export {Navbar}