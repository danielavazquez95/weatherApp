import React from 'react';

export const Nav = (props) => {

    const handleClick = (cityName) => {
        const {name}= props;
        name(cityName);
    };


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a onClick={()=> handleClick('Amsterdam')} className="nav-link" href="#">Amsterdam <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=> handleClick('Barcelona')} href="#">Barcelona</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=> handleClick('Bruselas')} href="#">Bruselas</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=> handleClick('Buenos Aires')} href="#">Buenos Aires</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=> handleClick('Paris')} href="#">Paris</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=> handleClick('Londres')} href="#">London</a>
                </li>
               
               
               
               
            </ul>
            </div>
      </nav>
    )
}
