import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell,faCommentDots, faUserCircle, faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';

const HeaderLayout = () => {
  return (
  <div style={{ ..._styleHeader['contenedor'],}}>
    <FontAwesomeIcon style= {{..._styleIcons.pinterestIcon}} icon={faPinterest} />

    <span style= {{..._styleHeader.inicio}}>Inicio</span>
    <span style= {{..._styleHeader.hoy}}>Hoy</span>

    {/* <div style= {{..._styleHeader.inicio}}>Inicio</div>
    <div style= {{..._styleHeader.hoy}}>Hoy</div> */}

    <FontAwesomeIcon style= {{..._styleHeader.buscadoricon}} icon={faSearch} />
    <input style= {{..._styleHeader.buscador}} type="text" placeholder="Buscar" />
    
    <FontAwesomeIcon style= {{..._styleIcons.arrow_icon}} icon={faChevronDown} />
    <FontAwesomeIcon style= {{..._styleIcons.icons}} icon={faUserCircle} />
    <FontAwesomeIcon style= {{..._styleIcons.icons}} icon={faCommentDots} />
    <FontAwesomeIcon style= {{..._styleIcons.icons}} icon={faBell} />
  </div>);
};

const _styleHeader = {
  contenedor: {
    height: '100px',
    display: 'inline',
    padding: '0px 20px',
    backgroundColor: 'white',
  },
  buscador: {
    position: 'relative',
    /* left: '10', */
    display: 'inlineBlock',
    margin: '0px 10px 0px 0px',
    height: '3em',
    width: '70%',
    border: '0',
    borderRadius: '0px 50px 50px 0px',
    backgroundColor: '#efefef',
  },
  buscadoricon: {
    padding: '0.8em',
    position: 'relative',
    top: '15px',
    margin: '0em 0em 0em 0em',
    /* margin: '0px 0px 10px 0px', */
    borderWidth: '0px',
    borderRadius: '50px 0px 0px 50px',
    backgroundColor: '#efefef',
    color: '#767676',
  },
  inicio: {
    display: 'inlineBlock',
    fontWeight: 'bold',
    margin: '0px 10px',
    padding: '0.8em 1em 0.8em 1em' ,
    color: 'white',
    borderRadius: '50px',
    backgroundColor: '#111111',
    cursor: 'pointer',
  },
  hoy: {
    display: 'inlineBlock',
    fontWeight: 'bold',
    margin: '10px',
    cursor: 'pointer',
  },
};

const _styleIcons = {
  pinterestIcon: {
    position: 'relative',
    top: '5px',
    width: '1.5em',
    height: '1.5em',
    color: '#e60023',
    paddingTop: '0em',
    margin: '1.2em 0.1em 0em 0.6em',
    cursor: 'pointer',
  },
  icons: {
    width: '1.6em',
    height: '1.6em',
    float: 'right',
    paddingTop: '0em',
    margin: '1.5em 1em 0em 0em',
    color: '#767676',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  arrow_icon: {
    position: 'relative',
    top: '5px',
    width: '1em',
    height: '1em',
    float: 'right',
    paddingTop: '0em',
    margin: '1.5em 1em 0em 0em',
    color: '#767676',
    borderRadius: '15px',
    cursor: 'pointer', 
  }
}

export default HeaderLayout;


//negro 111111
//rojo e60023
//gris barra "buscar" efefef
//gris icons 767676
//gris hoover f0f0f0