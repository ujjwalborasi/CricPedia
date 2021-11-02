import React from 'react'
import './ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
function ImageSlider() {
    return (
        <div className='Slider-Container'>
            <div className='Slide-Button' id='Left-Slide'> <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" className="" /></div>
            <div className='Slider'>
                { <img src='https://polar-tundra-98856.herokuapp.com/Images/Eden Gardens.jpg' alt='#' className='Slider-Main-Image'></img> }
            </div>
            <div className="Slide-Button" id='Right-Slide'><FontAwesomeIcon icon={faArrowCircleRight} size="1x" className="" /></div>
        </div>
    )
}

export default ImageSlider
