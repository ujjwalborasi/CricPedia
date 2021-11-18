import { React, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Teams.css'
import VanillaTilt from 'vanilla-tilt';
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}
function Teams(props) {
    const options = {
        scale: 1.05,
        speed: 1000,
        max: 1,
        glare: true,
        "max-glare": 1

    }
    if (!props
        ) {

            return <>{(props) && (console.log(props.data[0]))  }Loading.....</>
        }
    return (

        <>
            <div className='Container'>
        {(props.data.Teams) && (props.data.Teams.map(({Name, Abbrevation, Country})=>(
            
            <Tilt options={options} className= 'card'>
                <Link exact to={`/Teams`} className='Link'>
    
                    <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/Teams/International/${Name}.png`} alt='#' />
    
                </Link>
            </Tilt>
        )))
    }
        </div>



        </>

    )
}

export default Teams
