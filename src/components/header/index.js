import React from 'react'
import { NavLink } from 'react-router-dom'
import GoogleAuth from '../googleAuth'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Streamy
      </NavLink>
      <div className="right menu"></div>
      <NavLink to="/" className="item">
        All streams
      </NavLink>
      <GoogleAuth />
    </div>
  )
}

export default Header
