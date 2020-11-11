import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';

import './Navbar.scss';
import Profil from '../../../assets/Navbar/profil.jpg';
import Logo from '../../../assets/Navbar/logo.png';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      navColor: 'transparent'
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const navbarColor =
        window.scrollY < 5 ? 'transparent' : 'rgb(20, 20, 20)';
      this.setState({
        navColor: navbarColor
      });
    });
  }

  render() {
    const { navColor } = this.state;
    return (
      <div
        className="navbar__globalContainer"
        style={{ backgroundColor: navColor }}
      >
        <div className="navbar__container">
          <span className="navbar__linkLeft">Home</span>
          <span className="navbar__linkLeft">TV Shows</span>
          <span className="navbar__linkLeft">Movies</span>
          <span className="navbar__linkLeft">Recently Added</span>
        </div>

        <img className="navbar__logo" src={Logo} alt="logo" />

        <div className="navbar__container">
          <AiOutlineSearch className="navbar__icon navbar__linkRight" />
          <BiBell className="navbar__icon navbar__linkRight" />
          <span className="navbar__linkRight">My List</span>
          <span className="navbar__linkRight">
            <img className="navbar__imgProfil" src={Profil} alt="profil" />
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
