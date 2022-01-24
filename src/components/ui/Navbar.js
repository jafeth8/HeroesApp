import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate=useNavigate();

    const handleLogout = () => {
        //navigate("/login",{replace:true})
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=> "nav-item nav-link " + (isActive ? "active" : "")} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>k

                    <NavLink 
                        
                        //className="nav-item nav-link"
                        /*aunque la clase isActive se detecta automaticamente esta metodologia se puede usar para poner otras clases aparte de la clase ya mencionanda */
                        className={({isActive})=> "nav-item nav-link " + (isActive ? "active" : "")}  
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> "nav-item nav-link " + (isActive ? "active" : "")} 
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        Romeo
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={handleLogout} 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}