import React from 'react'
import {  NavLink  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
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
            </div>

        </>
    )
}

export default Home;
