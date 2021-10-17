import React from 'react'
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCrown, faFlag, faHistory, faList, faStar, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
function Blogs() {
    return (
       
             <div className=" HomeFeatures">
                <div className="FeatureCards">
               
                        <Link className="SmallCards" exact to="/Blogs" > <span className="ButtonText2"> Stadiums</span> <FontAwesomeIcon icon={faHistory} className="Arrow2" size="1px" /> </Link>
                        <Link className="SmallCards" exact to="/list/Rank" > <span className="ButtonText2"> Players</span> <FontAwesomeIcon icon={faUser} className="Arrow2" size="1px" /> </Link>
                        <Link className="SmallCards" exact to="/list/Country" > <span className="ButtonText2"> Blogs</span> <FontAwesomeIcon icon={faFlag} className="Arrow2" size="1px" /> </Link>
                        <Link className="SmallCards" exact to="/list/Profession" > <span className="ButtonText2"> Teams</span> <FontAwesomeIcon icon={faUsers}  className="Arrow2" size="1px" /> </Link>
                        <Link className="SmallCards" exact to="/list/Oldest" > <span className="ButtonText2"> Schdules</span> <FontAwesomeIcon icon={faList} className="Arrow2" size="1px" /> </Link>
                        <Link className="SmallCards" exact to="/list/Youngest" > <span className="ButtonText2"> Matches</span> <FontAwesomeIcon icon={faFlag} className="Arrow2" size="1px" /> </Link>
                        <Link className="SmallCards" exact to="/list" > <span className="ButtonText2"> Occassions</span> <FontAwesomeIcon icon={faCrown} className="Arrow2" size="1px" /> </Link>
                
                </div>
            </div>
     
    )
}

export default Blogs
