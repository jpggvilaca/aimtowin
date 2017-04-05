import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <article>
      <footer>
        <div className="contacts">
          <p>&copy; 2017 AimToWin eSports</p>
          <h4>Contactos</h4>
          <ul>
            <li className="atwmail">
              <div></div>
              <a href="mailto:info@atwesports.com">
                info@atwesports.com
              </a>
            </li>
            <li className="atwmail">
              <div></div>
              <a href="mailto:inscricoes@atwesports.com">
                inscricoes@atwesports.com
              </a>
            </li>
            <li className="atwmail">
              <div></div>
              <a href="mailto:idrone@aiminho.pt">
                idrone@aiminho.pt
              </a>
            </li>
          </ul>
          <ul>
          <li className="fb">
            <div></div>
            <a href="https://www.facebook.com/Minhoesportscup/">
              Minho Esports Cup
            </a>
          </li>
          <li className="fb">
            <div></div>
            <a href="https://www.facebook.com/IDroneExperience/">
              iDrone Experience
            </a>
          </li>
          </ul>
        </div>
      </footer>
    </article>
  )
}

export default Footer
