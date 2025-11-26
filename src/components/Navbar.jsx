// --- NAVBAR COMPLÈTEMENT RESPONSIVE ---
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/theme.css";
import { FaSearch, FaRobot, FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaBars } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const location = useLocation();

  // Détection de la largeur d'écran
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on change de page ou redimensionne
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, windowWidth]);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/savoir-plus", label: "En savoir plus" }
  ];

  const quickAccessItems = [
    { 
      name: "Recherche", 
      icon: <FaSearch />,
      url: "/search",
      color: "#3B82F6"
    },
    { 
      name: "IA", 
      icon: <FaRobot />,
      url: "/ai-tools",
      color: "#8B5CF6"
    },
    { 
      name: "YouTube", 
      icon: <FaYoutube />,
      url: "https://youtube.com",
      color: "#FF0000",
      external: true
    },
    { 
      name: "Facebook", 
      icon: <FaFacebook />,
      url: "https://facebook.com",
      color: "#1877F2",
      external: true
    },
    { 
      name: "Twitter", 
      icon: <FaTwitter />,
      url: "https://twitter.com",
      color: "#1DA1F2",
      external: true
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin />,
      url: "https://linkedin.com",
      color: "#0A66C2",
      external: true
    },
    { 
      name: "GitHub", 
      icon: <FaGithub />,
      url: "https://github.com",
      color: "#333333",
      external: true
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram />,
      url: "https://instagram.com",
      color: "#E4405F",
      external: true
    }
  ];

  // Détermine l'affichage selon la largeur d'écran
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  return (
    <>
      {/* PREMIÈRE BARRE DE NAVIGATION */}
      <nav
        className={`tech-navbar ${isScrolled ? "scrolled" : ""}`}
        style={{
          background: isScrolled ? "rgba(10, 15, 31, 0.97)" : "rgba(10, 15, 31, 0.92)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.45)",
          height: isMobile ? "60px" : "75px",
          position: "fixed",
          top: isMobile ? "10px" : "15px",
          left: isMobile ? "3%" : "2.5%",
          right: isMobile ? "3%" : "2.5%",
          width: isMobile ? "94%" : "95%",
          maxWidth: "1400px",
          borderRadius: "15px",
          zIndex: 1000,
          boxShadow: isScrolled ? "0 10px 40px rgba(0, 0, 0, 0.45)" : "0 5px 25px rgba(0, 0, 0, 0.3)",
          transition: "0.4s ease-in-out",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: isMobile ? "0 0.8rem" : "0 1.5rem",
            position: "relative"
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              zIndex: 10,
              flexShrink: 0
            }}
          >
            <img
              src={Logo}
              alt="TaqwaTech"
              style={{
                width: isMobile ? "40px" : "55px",
                height: isMobile ? "40px" : "55px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 18px rgba(59,130,246,0.7))",
              }}
            />
            <span
              style={{
                marginLeft: "8px",
                fontSize: isMobile ? "0.85rem" : "1rem",
                fontWeight: "700",
                background: "linear-gradient(90deg,#ffffff,#b3c8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 12px rgba(59,130,246,0.6)",
                display: isMobile ? "none" : "block"
              }}
            >
              TaqwaTech
            </span>
          </Link>

          {/* BOUTON MENU MOBILE */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: "rgba(59, 130, 246, 0.2)",
                border: "1px solid rgba(59, 130, 246, 0.4)",
                borderRadius: "6px",
                padding: "0.4rem",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px"
              }}
            >
              <FaBars size={16} />
            </button>
          )}

          {/* MENU PRINCIPAL - DESKTOP/TABLETTE */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                gap: isTablet ? "0.5rem" : "0.8rem",
                alignItems: "center",
                position: "relative",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? "#fff" : "#bcd1ff",
                    textDecoration: "none",
                    fontWeight: "500",
                    padding: isTablet ? "0.4rem 0.7rem" : "0.5rem 1rem",
                    borderRadius: "8px",
                    transition: "all 0.25s ease-in-out",
                    background: location.pathname === item.path
                      ? "rgba(59,130,246,0.25)"
                      : "transparent",
                    textShadow: location.pathname === item.path
                      ? "0 0 12px rgba(59,130,246,0.8)"
                      : "none",
                    fontSize: isTablet ? "0.8rem" : "0.9rem",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#fff";
                    e.target.style.background = "rgba(59,130,246,0.12)";
                    e.target.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.color = "#bcd1ff";
                      e.target.style.background = "transparent";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {isTablet && item.label.length > 8 ? item.label.substring(0, 6) + "..." : item.label}
                </Link>
              ))}
            </div>
          )}

          {/* BOUTON CONTACT - DESKTOP/TABLETTE */}
          {!isMobile && (
            <Link
              to="/contact"
              style={{
                padding: isTablet ? "0.5rem 1rem" : "0.6rem 1.5rem",
                borderRadius: "10px",
                fontWeight: "600",
                color: "#fff",
                border: "1px solid rgba(59,130,246,0.55)",
                background: "linear-gradient(135deg,rgba(59,130,246,0.35),rgba(147,51,234,0.4))",
                textShadow: "0 0 12px rgba(59,130,246,0.8)",
                transition: "all 0.3s ease-in-out",
                textDecoration: "none",
                fontSize: isTablet ? "0.8rem" : "0.9rem",
                whiteSpace: "nowrap",
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 5px 15px rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {isTablet ? "Contact" : "Me contacter"}
            </Link>
          )}
        </div>

        {/* MENU MOBILE OVERLAY */}
        {isMobile && isMobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              background: "rgba(10, 15, 31, 0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem"
            }}
          >
            {/* BOUTON FERMER */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(59, 130, 246, 0.2)",
                border: "1px solid rgba(59, 130, 246, 0.4)",
                borderRadius: "6px",
                padding: "0.5rem",
                color: "#fff",
                cursor: "pointer",
                width: "40px",
                height: "40px"
              }}
            >
              ✕
            </button>

            {/* LIENS MOBILE */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "100%",
                maxWidth: "280px"
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: location.pathname === item.path ? "#3B82F6" : "#fff",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    padding: "1rem 1.5rem",
                    borderRadius: "10px",
                    background: location.pathname === item.path
                      ? "rgba(59, 130, 246, 0.15)"
                      : "transparent",
                    border: location.pathname === item.path
                      ? "1px solid rgba(59, 130, 246, 0.4)"
                      : "1px solid transparent",
                    width: "100%",
                    textAlign: "center",
                    transition: "all 0.3s ease"
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* BOUTON CONTACT MOBILE */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: "1rem 1.5rem",
                  borderRadius: "10px",
                  fontWeight: "600",
                  color: "#fff",
                  border: "1px solid rgba(59,130,246,0.6)",
                  background: "linear-gradient(135deg,rgba(59,130,246,0.4),rgba(147,51,234,0.5))",
                  textShadow: "0 0 12px rgba(59,130,246,0.8)",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  marginTop: "1rem",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                Me contacter
              </Link>
            </div>
          </div>
        )}

        {/* BANDE ANIMÉE SOUS LA NAV */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
            backgroundSize: "300% 100%",
            animation: "scrollLine 5s linear infinite",
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            borderRadius: "0 0 15px 15px"
          }}
        />
      </nav>

      {/* DEUXIÈME BARRE - ACCÈS RAPIDE */}
      {!isMobile && (
        <div
          style={{
            position: "fixed",
            top: isTablet ? "85px" : "105px",
            left: isTablet ? "3%" : "2.5%",
            right: isTablet ? "3%" : "2.5%",
            width: isTablet ? "94%" : "95%",
            maxWidth: "1400px",
            height: "50px",
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "10px",
            zIndex: 998,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isTablet ? "0 1rem" : "0 1.5rem",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            margin: "0 auto"
          }}
        >
          {/* TITRE ACCÈS RAPIDE */}
          <div
            style={{
              display: isTablet ? "none" : "flex",
              alignItems: "center",
              color: "#bcd1ff",
              fontWeight: "600",
              fontSize: "0.85rem",
              textShadow: "0 0 10px rgba(59,130,246,0.5)",
              minWidth: "110px"
            }}
          >
            <span style={{ marginRight: "8px", fontSize: "1rem" }}>⚡</span>
            Accès Rapide:
          </div>

          {/* ICÔNES D'ACCÈS RAPIDE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isTablet ? "0.6rem" : "1rem",
              flex: 1,
              justifyContent: "center",
              maxWidth: "500px",
              margin: "0 auto"
            }}
          >
            {quickAccessItems.slice(0, isTablet ? 6 : 8).map((item, index) => (
              <a
                key={index}
                href={item.url}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#bcd1ff",
                  transition: "all 0.3s ease-in-out",
                  padding: isTablet ? "0.2rem 0.4rem" : "0.3rem 0.6rem",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.background = `rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#bcd1ff";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.background = "transparent";
                }}
              >
                <span style={{ 
                  fontSize: isTablet ? "1rem" : "1.1rem", 
                  marginBottom: "1px" 
                }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: isTablet ? "0.55rem" : "0.65rem",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* BARRE DE RECHERCHE */}
          <div
            style={{
              display: isTablet ? "none" : "flex",
              alignItems: "center",
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              borderRadius: "6px",
              padding: "0.2rem 0.6rem",
              minWidth: "150px"
            }}
          >
            <input
              type="text"
              placeholder="Rechercher..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "0.75rem",
                width: "100%",
                padding: "0.2rem"
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollLine {
          0% { background-position: 0% 0; }
          100% { background-position: 300% 0; }
        }
      `}</style>

      {/* Espace réservé pour la hauteur des barres */}
      <div style={{ 
        height: isMobile ? "80px" : isTablet ? "150px" : "180px" 
      }}></div>
    </>
  );
};

export default Navbar;