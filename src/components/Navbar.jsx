import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black max-w-7xl mx-auto flex align-middle text-white justify-between'>
            <div className="logo">
                <img src="/general/logo/deadful_tomatoes.png" alt="Logo Dreadful Tomatoes" />
            </div>
            <div className="links flex mr-10">
                <div className='flex items-center gap-2'>
                    <img src="/general/icon/clapperboard.svg" alt="clapperboard" />
                    <a href="#" className="hidden md:inline-block">Movies</a>
                </div>
                <div className='flex items-center gap-2'>
                    <img width={24} src="/general/icon/tv.svg" alt="tv" />
                     <a href="#" className="hidden md:inline-block">Series</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar