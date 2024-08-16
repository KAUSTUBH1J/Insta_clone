import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import Insta_logo from '../image/instagram-logo-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompass,faSun,faMoon,faHouse,faPlus } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './context';


function Navbar(){
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const style = {
        color:isDarkMode?'#fff':'#464545'
    }

    const add_icon = {
        color: 'aliceblue',
        background: 'rgb(70, 69, 69)',
        padding: '2px',
        borderRadius: '2px',
    }

    return(
        <>
            <nav class={`navbar navbar-expand-lg   ${isDarkMode? 'bg-dark':'bg-body-tertiary'} `}>
                <div class="container-fluid ">
                    <div className="logo_container">
                        <img src={Insta_logo} className="logo" alt="logo"/>
                        <hr/>
                        <span className={`logo_text text-${isDarkMode? 'light':''} `} >Instagram</span>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <div className="side_contain">
                        <div>
                            <input type="text" className="sreach" placeholder="Serach"/>
                        </div>
                        <i class="fa-solid fa-sun"></i>
                        <div className="links">
                            <ul>
                                <li><Link to="/home"><FontAwesomeIcon icon={faHouse}  style={style} /></Link></li>
                                <li className="d-flex"><Link to="/create"><FontAwesomeIcon icon={faPlus} style={add_icon} /></Link></li>
                                <li  onClick={toggleTheme}>{isDarkMode ? <FontAwesomeIcon icon={faSun}  style={style} />:<FontAwesomeIcon icon={faMoon}  style={style}  />}</li>
                                <li><Link to="/"><FontAwesomeIcon icon={faCompass} style={style} /></Link></li>
                                <li><Link to="/Profile"><FontAwesomeIcon icon={faUser} style={style} /></Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className={`navbar ${isDarkMode? 'bg-dark':''}`}>
                    <div className="logo_container">
                        <img src={Insta_logo} className="logo" alt="logo"/>
                        <hr/>
                        <span className={`logo_text text-${isDarkMode? 'light':''} `} >Instagram</span>
                    </div>
                    <div>
                        <input type="text" className="sreach" placeholder="Serach"/>
                    </div>
                    <i class="fa-solid fa-sun"></i>
                    <div className="links">
                        <ul>
                            <li><FontAwesomeIcon icon={faHouse}  style={style} /></li>
                            <li  onClick={toggleTheme}>{isDarkMode ? <FontAwesomeIcon icon={faSun}  style={style} />:<FontAwesomeIcon icon={faMoon}  style={style}  />}</li>
                            <li><Link to="/"><FontAwesomeIcon icon={faCompass} style={style} /></Link></li>
                            <li><Link to="/"><FontAwesomeIcon icon={faUser} style={style} /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Navbar;