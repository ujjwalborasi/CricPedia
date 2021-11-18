import { React, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Tournaments.css'
import VanillaTilt from 'vanilla-tilt';
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
function Tournaments(props) {
  const options = {
    scale: 1.05,
    speed: 1000,
    max: 1,
    glare: true,
    "max-glare": 1

  }
  if (!props
  ) {

    return <>{(props) && (console.log(props.data[0]))}Loading.....</>
  }
  return (

    <>
      <div className='Container'>
        {(props.data.International_Tournaments) && (props.data.International_Tournaments.map(({ Name, Year, Format }) => (

          (Format === 'Test') && (<Tilt options={options} className='card'>
            <Link exact to={`/${Name}`} className='Link'>

              <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/Tournaments/International/${Format}/${Name}.png`} alt='#' />
              <p>{Name}</p>
            </Link>
          </Tilt>)
        )))
        }
      </div>
      <div className='Container'>
        {(props.data.International_Tournaments) && (props.data.International_Tournaments.map(({ Name, Year, Format }) => (
          (Format === 'ODI') && (<Tilt options={options} className='card'>
            <Link exact to={`/${Name}`} className='Link'>

              <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/Tournaments/International/${Format}/${Name}.png`} alt='#' />
              <p>{Name}</p>
            </Link>
          </Tilt>)
        )))
        }
      </div>



      <div className='Container'>
        {(props.data.International_Tournaments) && (props.data.International_Tournaments.map(({ Name, Year, Format }) => (

          (Format === 'T20') && (<Tilt options={options} className='card'>
            <Link exact to={`/${Name}`} className='Link'>

              <img className="Logo" src={`https://polar-tundra-98856.herokuapp.com/Images/Tournaments/International/${Format}/${Name}.png`} alt='#' />
              <p>{Name}</p>
            </Link>
          </Tilt>)
        )))
        }
      </div>



    </>

  )
}

export default Tournaments
