import React from 'react'
import { Link } from 'react-scroll';
import { FaAlignJustify } from "react-icons/fa";
function Navbar() {
    
    const [state, setState] = React.useState(true);
    
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
               {/* <div  className='navbar__left-logo'>
                <img src='src/components/logo.webp' alt='' /></div> */}
                <h1 style={{color:'111010',fontFamily:"monospace",fontSize:"40px"}}>Hanadi  </h1>
                    { state ? (
                        <ul className="navbar__right">
                            <li>
                                <Link
                                    to="home"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Home
    </Link>
                            </li>
                            <li>
                                <Link
                                    to="ser"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Pojects
    </Link>

                            </li>
                            <li>
                                <Link
                                    to="tecn"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Blogs
    </Link>

                            </li>
                            <li>
                                <Link
                                    to="about"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    About Me!
    </Link>

                            </li>
                            
                        </ul>
                    ):''
            }
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
                    
                </div>
            </div>
        </nav>
    )

}

export default Navbar;