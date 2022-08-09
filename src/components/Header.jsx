import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png' alt='logo'></img>
        <h4>Status HTTP</h4>
      </div>
    </header>
  )
}

export default Header;