import React from 'react'
import './Header.css'
import { navigation } from '../common'

const Header = () => {
  return (
    <header>
      <a href="/" className="logo"></a>
      <ul>
        {navigation.map((navItem, i) => {
          return (
            <li key={i}>
              <a href={'#' + navItem.id}>{navItem.name}</a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
