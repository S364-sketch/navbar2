import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Slidebar } from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Navbar() {
    const [sidebar,setsidebar]=useState(false);
    const showsidebar=()=>setsidebar(!sidebar);
    const hidesiderbar=()=>{
        setsidebar(!sidebar);
    }
    return (
        <>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                <MenuIcon onClick={showsidebar}/>
                </Link>
            </div>
             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className="nav-menu-items">
                 <li className="navbar-toggle">
                     <Link to="#" className="menu-bars">
                     <CloseIcon onClick={hidesiderbar}/>
                     </Link>
                 </li>
                 {Slidebar.map((item,index)=>{
                     return(
                         <>
                         <li key={index} className={item.cName}>
                             <Link to={item.path}>
                                 {item.icon}
                                 <span>{item.title}</span>
                             </Link>
                         </li>
                         </>
                     )
                 })}
             </ul>
            </nav>
        </>
    )
}

export default Navbar;