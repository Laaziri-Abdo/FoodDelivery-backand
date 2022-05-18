import React from 'react';
// import "../../assets/css/style.css";
// import "../../assets/plugins/animation/css/animate.min.css"
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../Action/authActions';
const Sidebare = () => {
    const authenticated = useSelector(state => state.authenticated)
    const dispatch = useDispatch()
    
  return (
      
    <div>
        <nav className="pcoded-navbar">
    
    <div className="navbar-wrapper">
        <div className="navbar-brand header-logo">
            <a href="index.html" className="b-brand">
                <div className="b-bg">
                    <i className="feather icon-trending-up"></i>
                </div>
                <span className="b-title">Datta Able</span>
            </a>
            <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
        </div>
        <div className="navbar-content scroll-div">
            <ul className="nav pcoded-inner-navbar">
                <li className="nav-item pcoded-menu-caption">
                    <label>Navigation</label>
                </li>
                <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                    <a href="#" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                </li>
               
                <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                   
                   
                        <li className=""><a href="bc_button.html" className="">Repas</a></li>
                        <li className=""><a href="bc_badges.html" className="">Annonce</a></li>
                        <li className=""><a href="bc_breadcrumb-pagination.html" className="">Command</a></li>
                        <li className=""><a href="bc_collapse.html" className="">Livreurs</a></li>
                        <li className=""><a href="bc_tabs.html" className="">Tabs & pills</a></li>
                        <li className="">
                        { authenticated && 
                    <a href="javascript:;" 
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(logoutAction())
                    }} >
                       
                   Logout
                    </a>
                }
                            </li>
                </li>
               
                
               
               
               
                
               
              
               
            </ul>
        </div>
    </div>
</nav>
    </div>
  );
}

export default Sidebare;
