import React from "react";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import { FaLaptopCode, FaRobot, FaBolt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="tech-hero enhanced-hero"
      style={{
        background:
          "linear-gradient(to bottom, #03050baa, #03050b), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80') center/cover",
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

      {/* Contenu principal */}
      <div className="hero-container">
        <div className="hero-content">

          {/* Nom */}
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span className="title-gradient hero-title-glow">
              Saliou SENE
            </span>
          </h1>

          {/* Badge */}
          <div
            className="hero-badge premium-badge"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <span className="badge-pulse"></span>
            Développeur Full Stack & Intelligence Artificielle
          </div>

          {/* Sous-titre SEO enrichi */}
          <h2
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Création de{" "}
            <span className="text-energetic">sites web modernes</span> et{" "}
            <span className="text-energetic">applications intelligentes</span>
          </h2>

          {/* Description optimisée SEO */}
          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Développeur web et mobile, expert en solutions d'intelligence
            artificielle. J’accompagne entreprises et particuliers dans la
            conception, le développement et le déploiement de projets digitaux
            performants et sur mesure, du prototype à la mise en production.
          </p>

          {/* CTA */}
          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <Link to="/portfolio" className="btn-primary hero-btn-light">
              <span className="btn-sparkle"></span>
              Voir mes réalisations
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
        </div>

        {/* Visuels 3D */}
        <div className="hero-visual">

          {/* Carte Web */}
          <div className="floating-card card-1 upgraded-card">
            <div className="card-icon-3d"><FaLaptopCode /></div>
            <div className="card-text-3d">Développement Web</div>
          </div>

          {/* Carte IA */}
          <div className="floating-card card-2 upgraded-card">
            <div className="card-icon-3d"><FaRobot /></div>
            <div className="card-text-3d">Intelligence Artificielle</div>
          </div>

          {/* Carte Performance */}
          <div className="floating-card card-3 upgraded-card">
            <div className="card-icon-3d"><FaBolt /></div>
            <div className="card-text-3d">Ultra Performance</div>
          </div>

          {/* Effet Énergie */}
          <div className="energy-core upgraded-core"></div>
        </div>

        {/* Scroll */}
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
