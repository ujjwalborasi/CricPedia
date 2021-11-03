import React, { useState } from 'react'
import './ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
function ImageSlider() {
    const [Image, SetImage] = useState()
    const Slide = (id)=>{
        
    }
    return (
        <div className='Slider-Container'>
            <div className='Slide-Button' id='Left-Slide'> <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" className="" color='white'/></div>
            <div className='Slider'>
                <img src='https://polar-tundra-98856.herokuapp.com/Images/Eden Gardens.jpg' alt='#' className='Slider-Faded-Left-Image' ></img> 
                 <img src='https://polar-tundra-98856.herokuapp.com/Images/Eden Gardens.jpg' alt='#' className='Slider-Main-Image' ></img> 
                 <img src='https://polar-tundra-98856.herokuapp.com/Images/Eden Gardens.jpg' alt='#' className='Slider-Faded-Right-Image' ></img> 
            </div>
            <div className="Slide-Button" onClick={() => Slide('Right')} id='Right-Slide'><FontAwesomeIcon icon={faArrowCircleRight} size="1x" className="" color='white' /></div>
        </div>
    )
}

export default ImageSlider
