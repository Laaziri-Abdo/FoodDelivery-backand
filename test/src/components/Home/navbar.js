import React from 'react';
import {link} from 'react-router-dom'
import Logo from '../assest/imgs/food.png'
import { useSelector,useDispatch } from 'react-redux';
import { logoutAction } from '../../Action/authActions';



const Navbar = ({Dashboard}) => {
    const authenticated = useSelector(state => state.authenticated)
    const dispatch = useDispatch()
  return (
    <div>
    <nav className="navbar nav-first navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/">
            <img src={Logo} />
        </a>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link text-primary" href="/">CALL US : <span className="pl-2 text-muted">(123) 456 7890</span></a>
            </li>                   
        </ul>
    </div>
</nav>
<nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    <div className="container">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"> 
                <li className="nav-item">
                    <a className="nav-link" href="#about">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#service">Our Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#team">Our Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testmonial">Testmonials</a>
                </li>
            </ul> 
            <ul className="navbar-nav ml-auto">
            { Dashboard && authenticated &&
                <li className="nav-item d-flex align-items-center mx-3">
                    { Dashboard === 'owner' &&
                        <a href="http://localhost:3000/owner/Dashboard" className="btn btn-primary mt-3">
                            <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                            <span className="d-sm-inline d-none">Livreur Dashboard</span>
                        </a>
                    }
                    { Dashboard === 'admin' && 
                        <a href="http://localhost:3000/Dashboard" className="btn btn-primary mt-3">
                            <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                            <span className="d-sm-inline d-none">Admin Dashboard</span>
                        </a>
                    } 
                </li>
              }
            
            <li className="nav-item d-flex align-items-center">
                { !authenticated && 
                    <a href="http://localhost:3000/auth/login"className="btn btn-primary mt-3">
                        <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                        <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                }
                { authenticated && 
                    <a href="javascript:;" 
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(logoutAction())
                    }} className="btn btn-primary mt-3">
                        <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                        <span className="d-sm-inline d-none">Logout</span>
                    </a>
                } 
            </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  );
}

export default Navbar;
