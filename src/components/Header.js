import React from 'react'
import './Header.css'
import { navigation } from '../common'

const Header = () => {
  return (
    <article>
      <header>
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
    </article>
  )
}

export default Header
