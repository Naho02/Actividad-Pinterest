import React, { useState } from 'react';
import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH, faUpload, faChevronDown, faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';

const PinCard = (props) => {
  const [myHover, setmyHover] = useState(false);
  return (
    <div 
      onMouseEnter={() => setmyHover(true)}
      onMouseLeave={() => setmyHover(false)}
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }} >

        {myHover &&
          <div className = 'botonesOcultos'>
            <div  style={{ ..._stylesPinCard.tableroTitulo }}>
              <span>Tablero... </span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <div style={{ ..._stylesPinCard.guardar }}>Guardar</div>

            <FontAwesomeIcon style= {{..._stylesPinCard.link_icon, ..._stylesPinCard[props.tam]}} icon={faExternalLinkSquareAlt} />
            <div style={{ ..._stylesPinCard.link_page, ..._stylesPinCard[props.tam]}}>page.com</div>

            <FontAwesomeIcon style={{ ..._stylesPinCard.icon_upload, ..._stylesPinCard[props.tam]}} icon={faUpload} />
            <FontAwesomeIcon style= {{..._stylesPinCard.icon_dots, ..._stylesPinCard[props.tam]}} icon={faEllipsisH} />

          </div>
        }

        <img className={ `${myHover ? "colorFoto" : ""} `} src={props.image} alt='Fail to load' style={{..._stylesPinCard.pin_card.image, width:'100%', height:'100%', borderRadius:'16px', cursor:'zoom-in'}}/>
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
  tableroTitulo: {
    position: 'absolute',
    fontWeight: 'bold',
    margin: '10px 0px 0px 0px',
    padding: '0.8em 1em 0.8em 1em' ,
    color: 'white',
    cursor: 'pointer',
  },
  guardar: {
    position: 'absolute',
    fontWeight: 'bold',
    margin: '10px 10px 10px 125px',
    padding: '0.8em 1em 0.8em 1em' ,
    color: 'white',
    borderRadius: '50px',
    cursor: 'pointer',
    backgroundColor: '#e60023'
  },
  link_page: {
    color: 'black',
    cursor: 'pointer',
    position: 'absolute',
    backgroundColor: 'white',
    margin: '10px 10px 20px 42px',
    padding: '0.2em 0.8em 0.3em 0.8em',
    borderRadius: '0px 50px 50px 0px',
    fontWeight: 'bold',
  },
  link_icon: {
    color: 'black',
    cursor: 'pointer',
    position: 'absolute',
    backgroundColor: 'white',
    margin: '10px 10px 20px 15px',
    padding: '0.43em 0.43em 0.43em 0.8em',
    borderRadius: '50px 0px 0px 50px',
  },
  icon_dots: {
    color: 'black',
    cursor: 'pointer',
    position: 'absolute',
    backgroundColor: 'white',
    margin: '10px 10px 20px 190px',
    padding: '0.4em',
    borderRadius: '30px',

  },
  icon_upload: {
    color: 'black',
    cursor: 'pointer',
    position: 'absolute',
    backgroundColor: 'white',
    margin: '10px 10px 20px 152px',
    padding: '0.4em',
    borderRadius: '30px',

  },
  small_icons: {
    marginTop: '190px',
  },
  medium_icons: {
    marginTop: '260px',
  },
  large_icons: {
    marginTop: '375px',
  },
};

export default PinCard;
