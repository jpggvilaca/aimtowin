import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <article>
        <p>&copy; 2017 AimToWin eSports</p>
        <div className="contacts">
        <h4>Contactos</h4>
        <ul>
          <li>
            <a href="mailto:info@atwesports.com">
              info@atwesports.com
            </a>
          </li>
          <li>
            <a href="mailto:inscricoes@atwesports.com">
              inscricoes@atwesports.com
            </a>
          </li>
        </ul>
        </div>
      </article>
    </footer>
  )
}

export default Footer
