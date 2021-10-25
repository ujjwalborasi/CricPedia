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
      if (!props
        ) {

            return <>{(props) && (console.log(props.data[0]))  }Loading.....</>
        }
    return (
    <div className='stadium-Main'>
    <div className='cardscontainer'>
     {(props.data)&& (props.data.map(({Capacity, Name, Country, City, CountryCode})=>(<Tilt options={options}>
                <Link exact to ={ `/Stadiums/${Name}`} className='Link'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={`https://polar-tundra-98856.herokuapp.com/Images/${Name}.jpg`} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'>  {Name}</h2>
                <p className='text'> {City}</p>
                <p className='text'> {Country}</p>
                <p className='text'>Capacity: {Capacity}</p>
                <img src={`https://flagcdn.com/32x24/${CountryCode}.png`} srcset={`https://flagcdn.com/32x24/${CountryCode}.png 2x,https://flagcdn.com/48x36/${CountryCode}.png 3x`} width="32"   height="24" alt="flag"></img>
                </div>
            </div>
                </Link>
            </Tilt>)) )}
            {/* <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={mcgImage} alt='#' />
                <div className='Stadium_Info'>
                <p className='text'> Melbourne, Australia</p>
                <h2 className='Name'>  Melbourne Cricket Ground</h2>
                </div>
            </div>
                </Link>
            </Tilt> */}
            
           
        </div>
    </div>
    )
}

export default Stadiums
