import React from 'react';
function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'transparent' }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Drinkly</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white" href="#">Popular</a>
                        <a className="nav-link text-white" href="#">About us</a>
                        <a href="#" className="nav-link text-white">
                            <i className="fas fa-heart"></i>
                        </a>
                        <a className="nav-link text-white" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
