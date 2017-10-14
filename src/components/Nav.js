import React from 'react'
import { NavLink } from 'react-router-dom'

const navStyle = {
  color: 'white',
  marginRight: '2em',
  fontSize: 'xx-large',
  textDecoration: 'none'
}

const Nav = () => (
  <header className='App-header'>
    <NavLink exact to='/' activeClassName='is-active' style={navStyle}>HOME</NavLink>
    <NavLink exact to='/react' activeClassName='is-active' style={navStyle}>REACT</NavLink>
    <NavLink exact to='/redux' activeClassName='is-active'style={navStyle}>REDUX</NavLink>
    <NavLink exact to='/running' activeClassName='is-active'style={navStyle}>RUNNING</NavLink>
  </header>
)

export default Nav
