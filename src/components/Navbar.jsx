import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar_Container">
        <div className="nav_Title">
            <h1>Prakhar</h1>
        </div>
        <div className="nav_TabsContainer">
            <ul className='nav_Tabs'>
                <li className='nav_Links'><a href="#Home">Home</a></li>
                <li className='nav_Links'><a href="">About</a></li>
                <li className='nav_Links'><a href="">Portfolio</a></li>
                <li className='nav_Links'><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar