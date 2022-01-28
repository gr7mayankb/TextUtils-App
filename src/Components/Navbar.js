import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <h1 className="navbar-brand mx-2 font-weight-bolder">{props.title}</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link mx-2 active" style={{borderBottom : '2px solid red'}} onClick={() => {props.active('home')}} to="/">{props.homeText}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={() => {props.active('about')}}  to="/About">{props.aboutText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input btn-btn-dark" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
        </div>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    homeText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Add Title Here',
    aboutText: 'About Us',
    homeText: 'Home'
}
