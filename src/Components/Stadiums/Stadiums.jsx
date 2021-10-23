import React, { useEffect, useRef} from 'react'
import {  Link } from 'react-router-dom'
import './Stadium.css';
import StadiumImage from '../../Assets/Lords.jpg'
import GabbaImage from '../../Assets/gabba.jpg'
import WACAImage from '../../Assets/waca.jpg'
import SSImage from '../../Assets/skystadium.jpg'
import MoImage from '../../Assets/ManukaOval.jpg'
import scgImage from '../../Assets/scg.jpg'
import mcgImage from '../../Assets/mcg.jpg'
import VanillaTilt from 'vanilla-tilt';



function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
function Stadiums(props) {
   
    const options = {
        scale: 1.1,
        speed: 1000,
        max: 1,
        glare: true,
        "max-glare": 0.7
    
      }
      if (!props.data
        ) {
            return <>Loading.....</>
        }




    return (
    <div className='stadium-Main'>
    <div className='cardscontainer'>
     
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={mcgImage} alt='#' />
                <div className='Stadium_Info'>
                <p className='text'> Melbourne, Australia</p>
                <h2 className='Name'>  Melbourne Cricket Ground</h2>
                </div>
            </div>
                </Link>
            </Tilt>
            
           
        </div>
    </div>
    )
}

export default Stadiums
