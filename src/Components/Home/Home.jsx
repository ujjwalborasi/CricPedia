import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBlog, faCalendar, faFlag, faHome, faList, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
function Home() {
    return (
        <>
            <div className='Main-Container'>
                <div className='Middle-Container'>
                    <div className='Button-Container'>
                        <NavLink className="Home-Button" exact to="/Matches">
                            <span className="Button-Text">CHECK LIST</span> <FontAwesomeIcon icon={faArrowRight} size="1px" className="Button-Icon" />
                        </NavLink>
                        <NavLink className="Home-Button" exact to="/Stadiums">
                            <span className="Button-Text">SEE GALLERY</span> <FontAwesomeIcon icon={faArrowRight} size="1px" className="Button-Icon" />
                        </NavLink>
                    </div>
                </div>
                <div className='Middle-Container'>
                    <div className='Box-Container'>
                        <Link className="Small-Box" exact to="/Blogs" > <span className="Box-Text"> Blogs</span> <FontAwesomeIcon icon={faBlog} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/list/Rank" > <span className="Box-Text"> Stats</span> <FontAwesomeIcon icon={faList} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/list/Country" > <span className="Box-Text"> Country</span> <FontAwesomeIcon icon={faFlag} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/list/Profession" > <span className="Box-Text"> Stadiums</span> <FontAwesomeIcon icon={faHome} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/list/Oldest" > <span className="Box-Text"> Players</span> <FontAwesomeIcon icon={faUser} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/list/Youngest" > <span className="Box-Text"> Teams</span> <FontAwesomeIcon icon={faUsers} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/list" > <span className="Box-Text"> Schedule</span> <FontAwesomeIcon icon={faCalendar} className="Box-Icon" size="1px" /> </Link>
                    </div>
                </div>

                <div className='Middle-Container'>
                    

                </div>





            </div>

        </>
    )
}

export default Home;
