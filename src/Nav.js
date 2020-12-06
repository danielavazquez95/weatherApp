import React from 'react';
import { NavMobile } from './NavMobile';

export const Nav = (props) => {

    const handleClick = (cityName) => {
        const {name}= props;
        name(cityName);
    };

    return (
        <>
            <NavMobile city={props.name}/>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-md-flex">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a onClick={()=> handleClick('Amsterdam')} className="nav-link" href="#">Amsterdam <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> handleClick('Barcelona')} href="#">Barcelona</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> handleClick('Brussels')} href="#">Brussels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> handleClick('Buenos Aires')} href="#">Buenos Aires</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> handleClick('Londres')} href="#">London</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> handleClick('Paris')} href="#">Paris</a>
                        </li>
                    </ul>
                </div>
        </nav>
      </>
    )
}
