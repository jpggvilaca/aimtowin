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
        <ul className="logos">
          <li className="alientech">
            <a href="https://www.alientech.pt/" target="_blank">
              <div></div>
            </a>
          </li>
          <li className="ca">
            <a href="http://www.credito-agricola.pt/CAI" target="_blank">
              <div></div>
            </a>
          </li>
        </ul>
      </footer>
    </article>
  )
}

export default Footer
