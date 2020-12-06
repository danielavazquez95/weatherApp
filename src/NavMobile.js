import React, { useState } from 'react';

export const NavMobile = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const handleClick = (cityName) => {
        const {city}= props;
        city(cityName);
    };

    return (
        <>
            <div className='navbar nav-mobile d-sm-block d-md-none bg-dark' onClick={showSidebar}>
                <div  className='menu-bars'>
                    <i className="fas fa-bars d-md-none" onClick={showSidebar}/>
                </div>
            </div>

            <nav className={sidebar ? 'nav-menu active bg-dark d-sm-block d-md-none' : 'nav-menu  bg-dark d-sm-block d-md-none'} onClick={showSidebar}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle bg-dark d-block">
                        <a onClick={()=> handleClick('Amsterdam')} className="menu-bars nav-text" href="#">Amsterdam <span className="sr-only">(current)</span></a>
                        <a className="menu-bars nav-text" onClick={()=> handleClick('Barcelona')} href="#">Barcelona</a>
                        <a className="menu-bars nav-text" onClick={()=> handleClick('Brussels')} href="#">Brussels</a>
                        <a className="menu-bars nav-text" onClick={()=> handleClick('Buenos Aires')} href="#">Buenos Aires</a>
                        <a className="menu-bars nav-text" onClick={()=> handleClick('Londres')} href="#">London</a>
                        <a className="menu-bars nav-text" onClick={()=> handleClick('Paris')} href="#">Paris</a>
                    </li>
                </ul>
            </nav>
                    
        </>
    )
};
