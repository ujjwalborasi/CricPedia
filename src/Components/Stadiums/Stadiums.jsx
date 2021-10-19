import React, { useEffect, useRef } from 'react'
import {  NavLink, Link } from 'react-router-dom'
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
function Stadiums() {
    const options = {
        scale: 1.1,
        speed: 1000,
        max: 1,
        glare: true,
        "max-glare": 0.7
    
      }
    return (
    <div className='stadium-Main'>
    <div className='cardscontainer'>
        {}
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={mcgImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={StadiumImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={scgImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={WACAImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={SSImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={MoImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            <Tilt options={options}>
                <Link exact to = '/Stadiums/MCG'>
            <div className = 'stadium'>
                <img className="StadiumImage" src={GabbaImage} alt='#' />
                <div className='Stadium_Info'>
                <h2 className='Name'> Melbourne Cricket Ground</h2>
                <p className='text'> Melbourne, Australia</p>
                </div>
            </div>
                </Link>
            </Tilt>
            
           
        </div>
    </div>
    )
}

export default Stadiums
