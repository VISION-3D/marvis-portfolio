import React from "react";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import { FaLaptopCode, FaRobot, FaBolt, FaLightbulb } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="tech-hero enhanced-hero"
      style={{
        background:
          "linear-gradient(to bottom, #03050baa, #03050b), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80') center/cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 1rem",
      }}
    >
      {/* Effets de fond */}
      <div className="hero-energy-overlay">
        <div className="energy-pulse"></div>
        <div className="digital-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      {/* Contenu principal centré */}
      <div
        className="hero-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
          gap: "1.2rem",
        }}
      >
        {/* Nom */}
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="150">
          <span className="title-gradient hero-title-glow">TAQWATECH</span>
        </h1>

        {/* Badge */}
        <div
          className="hero-badge premium-badge"
          data-aos="fade-down"
          data-aos-delay="250"
        >
          <span className="badge-pulse"></span>
          Développement Full Stack & Expertise  en Intelligence Artificielle
        </div>

        {/* Sous-titre */}
        <h2
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          CREATION{" "}
          <span className="text-energetic">SITES WEB ULTRA-MODERNES</span> ET{" "}
          <span className="text-energetic">APPLICATIONS INTELLIGENTES</span>{" "}
          QUI  TRANSFORMENT  VOS IDEES  EN REALITES.
        </h2>

        {/* Description */}
        <p
          className="hero-description"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          Avec plus de 30 projets réalisés, donne vie à vos ambitions grâces des solutions digitales performantes.
          Du prototype à la mise en production, chaque projet est pensé pour
          l’innovation, l’efficacité et l’expérience utilisateur.
        </p>

        {/* CTA */}
        <div
          className="hero-actions"
          data-aos="fade-up"
          data-aos-delay="550"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link to="/portfolio" className="btn-primary hero-btn-light">
            <span className="btn-sparkle"></span>
            Découvrir mes réalisations
          </Link>

          <Link to="/contact" className="btn-secondary hero-btn-outline">
            <span className="btn-pulse"></span>
            Discutons de votre projet
          </Link>
        </div>

        {/* Stats */}
        <div
          className="hero-stats"
          data-aos="fade-up"
          data-aos-delay="700"
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div className="stat-item">
            <div className="stat-number">+30</div>
            <div className="stat-label">Projets réalisés</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction client</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24h</div>
            <div className="stat-label">Support réactif</div>
          </div>
        </div>

        {/* Bande d’icônes horizontale */}
        <div
          className="hero-side-bar-horizontal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.5rem 1rem",
            background: "rgba(255, 255, 255, 0.07)",
            borderRadius: "1rem",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            marginTop: "2rem",
          }}
        >
          <FaRobot
            style={{
              color: "#EF4444",
              fontSize: "2.2rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
          <FaLaptopCode
            style={{
              color: "#6C63FF",
              fontSize: "2.2rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
          <FaBolt
            style={{
              color: "#FFD700",
              fontSize: "2.2rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
          <FaLightbulb
            style={{
              color: "#10B981",
              fontSize: "2.2rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        </div>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="scroll-arrow"></div>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
