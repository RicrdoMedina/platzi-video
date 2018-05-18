import React from 'react'
import './footer.css'

const Footer = () => (
  <footer className="footer">
    <span className="footer-item">
      <a className="link" href="#">Cursos</a>
    </span>
    <span className="footer-item">
      <a className="link" href="#">Blog</a>
    </span>
    <span className="footer-item">
      <a className="link" href="#">Team Platzi</a>
    </span>
    <span className="footer-item">
      <a className="link" href="#">Politicas de privacidad</a>
    </span>
    <span className="footer-item">
      <a className="link" href="#">Condiciones</a>
    </span>
    <span className="footer-item">
      <a className="link" href="#">
        <span className="icon">
          <i className="far fa-copyright"></i>
        </span>
        2018 Platzi - Curso React JS
      </a>
    </span>
  </footer>
)

export default Footer
