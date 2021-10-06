import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH, faUpload, faChevronDown, faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';

const PinCardContent = (props) => {
  return (
    <div>
        <div style={{ ..._stylesPinCardCont.tableroTitulo }}>
            <span>Tablero... </span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div style={{ ..._stylesPinCardCont.guardar }}>Guardar</div>

        {/* <FontAwesomeIcon style= {{..._stylesPinCardCont.link_icon}} icon={faExternalLinkSquareAlt} />
        <div style={{ ..._stylesPinCardCont.link_page }}>page.com</div>
        <FontAwesomeIcon style= {{..._stylesPinCardCont.icons}} icon={faUpload} />
        <FontAwesomeIcon style= {{..._stylesPinCardCont.icons}} icon={faEllipsisH} /> */}
    
    </div>
  );
};

const _stylesPinCardCont = {
  pin_card: {
      backgroundColor: 'black',
      margin: '15px 10px',
      padding: 0,
      borderRadius: '16px',
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
  tableroTitulo: {
    position: 'absolute',
    fontWeight: 'bold',
    margin: '10px 10px 10px 10px',
    padding: '0.8em 1em 0.8em 1em' ,
    color: 'white',
    cursor: 'pointer',
},
  link_page: {
      position: 'absolute',
      color: 'black',
      fontWeight: 'bold',
      margin: '0px 10px',
      padding: '0.2em 0.8em 0.3em 0.8em',
      borderRadius: '0px 50px 50px 0px',
      backgroundColor: 'white',
      cursor: 'pointer',
  },
  link_icon: {
      position: 'absolute',
      padding: '0.2em 0.8em 0.3em 0.8em',
      borderWidth: '0px',
      borderRadius: '50px 0px 0px 50px',
      backgroundColor: 'white',
      color: 'black',
  },
  icons: {
      position: 'absolute',
      backgroundColor: 'white',
      color: 'black',
    },
};

export default PinCardContent;