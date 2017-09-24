import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <header>
    <hr />
    <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
    <NavLink exact to='/react' activeClassName='is-active'>React</NavLink>
    <NavLink exact to='/redux' activeClassName='is-active'>Redux</NavLink>
    <NavLink exact to='/running' activeClassName='is-active'>Running</NavLink>
    <hr />
  </header>
)

export default Nav
