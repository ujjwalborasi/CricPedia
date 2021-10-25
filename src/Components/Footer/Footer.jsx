import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

import {
    faFacebook, faTwitter
    , faTelegram, faPinterest, faInstagram, faYoutube, faLinkedin, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

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
                  <p className="footlink">Commmunity</p>  
                </div>
                <div className="Column">
                   <p className="footlink">Support</p> 
                </div>
            </div>
        </>
    )
}

export default Footer;
