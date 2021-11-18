import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

import {
    faFacebook, faTwitter
    , faTelegram, faPinterest, faInstagram, faYoutube, faLinkedin, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="Column">
                    <div className="Social_Media">
                        <FontAwesomeIcon icon={faYoutube} className="Icon" color="white" />
                        <FontAwesomeIcon icon={faTwitter} className="Icon" color="white" />
                        <FontAwesomeIcon icon={faFacebook} className="Icon" color="white" />
                        <FontAwesomeIcon icon={faInstagram} className="Icon" color="white" />
                        <FontAwesomeIcon icon={faLinkedin} className="Icon" color="white" />
                        <FontAwesomeIcon icon={faTelegram} className="Icon" color="white" />
                        <FontAwesomeIcon icon={faPinterest} className="Icon" color="white" />
                     
                    </div>
                </div>
                <div className="Column">
                <Link className='footlink' exact to ='/Teams'>Teams</Link>
                <Link className='footlink' exact to ='/Blogs'>Blogs</Link>
                <Link className='footlink' exact to ='/Tournaments'>Tournaments</Link>
                <Link className='footlink' exact to ='/Leagues'>Leagues</Link>
                <Link className='footlink' exact to ='/Stats'>Stats</Link>
                <Link className='footlink' exact to ='/Stadiums'>Stadiums</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;
