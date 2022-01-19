import Logo from '../img/succulent.png'; // import는 src 기준
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const imgStyle = {width:'100px', height:'auto'};
  const [myImg, setImage] = useState({});

  useEffect(()=>{
    axios.get('./data/img.json').then( res => setImage({backgroundImage:`url(${res.data[0].img})` }) )
  },[myImg])

  return (
    <header id="headBox" style={{ display:'flex', justifyContent:'space-around'}}>
      <h1><Link to="/"><img src={Logo} alt="사이트 이름" style={imgStyle} /></Link></h1>
      <nav className="gnb">
        {/* 내부에서 경로를 처리하는 형태는 public */}
          <ul className='gnb'>
            <li><NavLink to="/">home</NavLink> </li>
            <li><NavLink to="about">about</NavLink></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;
