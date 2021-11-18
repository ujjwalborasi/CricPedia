import { React, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Leagues.css'
import VanillaTilt from 'vanilla-tilt';
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}
function Leagues() {
    const options = {
        scale: 1.1,
        speed: 1000,
        max: 1,
        glare: true,
        "max-glare": 1

    }
    return (

        <>


            <div className='Container'>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>
                        
                            <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_1987.png`} alt='#' />
                        
                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>
                        
                            <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_1992.png`} alt='#' />
                        
                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>
                        
                            <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_1996.png`} alt='#' />
                        
                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>
                        
                            <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_1999.png`} alt='#' />
                        
                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>
                        
                            <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_2003.png`} alt='#' />
                      
                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>
                        
                            <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_2007.png`} alt='#' />
                        
                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_2011.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_2015.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_World_Cup_2019.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2007.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2009.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2010.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2012.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2014.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2016.png`} alt='#' />

                    </Link>
                </Tilt>
                <Tilt options={options} className= 'card'>
                    <Link exact to={`/Stadiums/`} className='Link'>

                        <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/ICC_WT20_2021.png`} alt='#' />

                    </Link>
                </Tilt>
            </div>

        </>

    )
}

export default Leagues
