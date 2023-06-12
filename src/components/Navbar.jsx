import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='bg-black max-w-7xl mx-auto flex align-middle text-white justify-between'>
            <div className="logo">
                <NavLink to="/">
                    <img src="/general/logo/deadful_tomatoes.svg" alt="Logo Dreadful Tomatoes" />
                </NavLink>
            </div>
            <div className="links flex mr-10">
                <div className='flex items-center gap-2'>
                    <img src="/general/icon/clapperboard.svg" alt="clapperboard" />
                    <NavLink to="/movies" className=" md:inline-block">Movies</NavLink>
                </div>
                <div className='flex items-center gap-2'>
                    <img width={24} src="/general/icon/tv.svg" alt="tv" />
                    <NavLink to="/series" className=" md:inline-block">Series</NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar