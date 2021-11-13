import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBlog, faCalendar, faFlag, faHome, faList, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import ImageSlider from '../Image-Slider/ImageSlider';
function Home() {
    return (
        <>
            <div className='Main-Container'>
                <div className='Middle-Container' id='sec1'>
                {/* <video autoPlay loop muted className='Video-Background'>
                    <source src='' type='video/mp4'></source>
                </video> */}
                    <div className='Button-Container'>
                        <NavLink className="Home-Button" exact to="/Matches">
                            <span className="Button-Text">SEE MATCHES</span> <FontAwesomeIcon icon={faArrowRight} size="1px" className="Button-Icon" />
                        </NavLink>
                        <NavLink className="Home-Button" exact to="/Stadiums">
                            <span className="Button-Text">SEE STADIUMS</span> <FontAwesomeIcon icon={faArrowRight} size="1px" className="Button-Icon" />
                        </NavLink>
                    </div>
                </div>
                <div className='Middle-Container' id='sec2'>
                    <div className='Box-Container'>
                        <Link className="Small-Box" exact to="/Blogs" > <span className="Box-Text"> Blogs</span> <FontAwesomeIcon icon={faBlog} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/Stats" > <span className="Box-Text"> Stats</span> <FontAwesomeIcon icon={faList} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/Countries" > <span className="Box-Text"> Country</span> <FontAwesomeIcon icon={faFlag} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/Stadiums" > <span className="Box-Text"> Stadiums</span> <FontAwesomeIcon icon={faHome} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/Profiles" > <span className="Box-Text"> Players</span> <FontAwesomeIcon icon={faUser} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/Countries" > <span className="Box-Text"> Teams</span> <FontAwesomeIcon icon={faUsers} className="Box-Icon" size="1px" /> </Link>
                        <Link className="Small-Box" exact to="/Matches" > <span className="Box-Text"> Schedule</span> <FontAwesomeIcon icon={faCalendar} className="Box-Icon" size="1px" /> </Link>
                    </div>
                </div>

                <div className='Middle-Container' id='sec3'>
                    <div className='Blog-Preview-Container'>
                        <p className='Title-Blog'>Lorem ipsum </p>
                      
                            <img className='Blog-Poster' src ={`https://polar-tundra-98856.herokuapp.com/Images/Bellerive Oval.jpg`}/>
                        
                        
                    </div>

                </div>
                
                <ImageSlider/>
            </div>
        </>
    )
}

export default Home;
