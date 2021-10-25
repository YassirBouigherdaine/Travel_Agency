import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'




function Header() {

    const slideImages = [

        '/pics/pic3.jpg',
        '/pics/pic6.jpg',
        '/pics/pic7.jpg'
        
    ];



    return (
        <div>
            <nav id="home" className="navbar navbar-expand navbar-dark bg-primary">
                <div className="container-fluid">
                    <a id="myBrand" className="navbar-brand " href="#home"><span className="text-warning fs-4"><b>Holi</b></span>day</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse ">
                        <form id="myHeaderForm" className="d-flex position-absolute top-50 start-50 translate-middle myInput">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit"><i class="bi bi-search"></i></button>
                        </form>
                        <ul className="navbar-nav position-absolute top-50 end-0 translate-middle-y">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tours">Tours</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#offers">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact us</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About us</a>
                        </li>
                            
                    </ul>
                        
                    </div>
                </div>
            </nav>

            <div>
                <div>
                    <Slide easing="ease ">
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                <span >
                                    <h3 className="display-6 px-5 fs-1  mb-1"><b>Travel the world</b></h3>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                <span >
                                    <h3 className="display-6 px-5 fs-1 mb-1"><b>Travel the world</b></h3>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                <span >
                                    <h3 className="display-6 px-5 fs-1  mb-1"><b>Travel the world</b></h3>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </span>
                            </div>
                        </div>

                    </Slide>
                </div>
            </div>

            
            <nav className=" navbar navbar-expand navbar-dark bg-dark "></nav>
        
        </div>       
        );
   
}

export default Header;

