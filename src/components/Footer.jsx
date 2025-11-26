import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../assets/Logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="tech-footer">
  <div className="footer-container">

    {/* COLONNE 1 : LOGO + DESCRIPTION */}
    <div className="footer-brand">

      <div className="footer-logo">
        <img src={Logo} alt="TaqwaTech" className="footer-logo-img" />

        <span
          className="footer-logo-title"
          style={{
            marginLeft: "-100px",
            fontSize: "2rem",
            fontWeight: "700",
            background: "linear-gradient(90deg,#ffffff,#b3c8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: `
              0px 1px 1px rgba(0, 0, 0, 0.25),
              0px 2px 2px rgba(0, 0, 0, 0.18),
              0px 3px 3px rgba(0, 0, 0, 0.14),
              0 0 10px rgba(59,130,246,0.55)
            `,
          }}
        >
          TaqwaTech
        </span>

      </div>

          <p className="footer-description">
            Solutions digitales avancées : IA, développement web, mobile, systèmes,
            e-commerce et automatisation intelligente.
          </p>

          <div className="footer-socials">
            <a href="#" className="social-link github"></a>
            <a href="#" className="social-link linkedin"></a>
            <a href="#" className="social-link twitter"></a>
            <a href="#" className="social-link email"></a>
          </div>
        </div>

        {/* COLONNE 2 : NAVIGATION */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/" className="footer-link">Accueil</Link>
          <Link to="/a-propos" className="footer-link">À propos</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/portfolio" className="footer-link">Portefeuille</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        {/* COLONNE 3 : SERVICES */}
        <div className="footer-services">
          <h4>Services</h4>
          <span className="service-tag">Développement Web et Mobile</span>
          <span className="service-tag">Applications Web</span>
          <span className="service-tag">Intelligence Artificielle</span>
          <span className="service-tag">API & Backend</span>
          <span className="service-tag">Conseil numérique</span>
        </div>

        {/* COLONNE 4 : CONTACT */}
       <div className="contact-item">
  <FaEnvelope style={{ marginRight: "8px", color: "#00ffff" }} />
  <a href="mailto:marvissene25@gmail.com">contactaqwatech@gmail.com </a>
</div>

<div className="contact-item">
  <FaPhone style={{ marginRight: "8px", color: "#00ffff" }} />
  Disponible sur demande
</div>

<div className="contact-item">
  <FaGlobe style={{ marginRight: "8px", color: "#00ffff" }} />
  Sénégal et international
</div>

      {/* BAS DU FOOTER */}
    

<div className="footer-bottom">
  <span>© {currentYear} TaqwaTech — Saliou SENE. Tous droits réservés.</span>

  <div className="footer-legal">
    <a href="#">Politique de confidentialité</a>
    <a href="#">Conditions d'utilisation</a>
  </div>

  <div className="footer-socials">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FaFacebookF style={{ color: "#00ffff", marginRight: "10px" }} />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <FaTwitter style={{ color: "#00ffff", marginRight: "10px" }} />
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn style={{ color: "#00ffff", marginRight: "10px" }} />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FaInstagram style={{ color: "#00ffff" }} />
    </a>
  </div>
</div>


      {/* ONDES ÉNERGÉTIQUES */}
      <div className="footer-energy">
        <div className="energy-wave"></div>
      </div>
          </div>
    </footer>
  );
};

export default Footer;
