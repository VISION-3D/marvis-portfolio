// --- NAVBAR SIMPLIFIÉE SANS BOUTON HAMBURGER ---
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/theme.css";
import { FaSearch, FaRobot, FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ width: 0, left: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  // Mise à jour de l'indicateur actif
  useEffect(() => {
    updateActiveIndicator();
  }, [location.pathname, windowWidth]);

  const updateActiveIndicator = () => {
    const activeLink = document.querySelector(`a[href="${location.pathname}"]`);
    if (activeLink) {
      const { offsetWidth, offsetLeft } = activeLink;
      setActiveIndicator({
        width: offsetWidth,
        left: offsetLeft
      });
    }
  };

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

  return (
    <>
      {/* PREMIÈRE BARRE DE NAVIGATION */}
      <nav
        className={`tech-navbar ${isScrolled ? "scrolled" : ""}`}
        style={{
          background: isScrolled
            ? "rgba(10, 15, 31, 0.97)"
            : "rgba(10, 15, 31, 0.92)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.45)",
          height: windowWidth < 768 ? "65px" : "75px",
          position: "fixed",
          top: windowWidth < 768 ? "10px" : "15px",
          left: windowWidth < 768 ? "5%" : "2.5%",
          right: windowWidth < 768 ? "5%" : "2.5%",
          width: windowWidth < 768 ? "90%" : "95%",
          maxWidth: "1400px",
          borderRadius: "15px",
          zIndex: 1000,
          boxShadow: isScrolled
            ? "0 10px 40px rgba(0, 0, 0, 0.45)"
            : "0 5px 25px rgba(0, 0, 0, 0.3)",
          transition: "0.4s ease-in-out",
          margin: "0 auto",
          overflow: "hidden"
        }}
      >
        <div
          className="tech-nav-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: windowWidth < 768 ? "0 1rem" : "0 1.5rem",
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
              zIndex: 10
            }}
          >
            <img
              src={Logo}
              alt="TaqwaTech"
              style={{
                width: windowWidth < 768 ? "45px" : "65px",
                height: windowWidth < 768 ? "45px" : "65px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 18px rgba(59,130,246,0.7))",
                transition: "0.3s ease-in-out"
              }}
            />
            <span
              style={{
                marginLeft: "10px",
                fontSize: windowWidth < 768 ? "0.9rem" : "1rem",
                fontWeight: "700",
                background: "linear-gradient(90deg,#ffffff,#b3c8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: `
                  0px 1px 1px rgba(0, 0, 0, 0.25),
                  0px 2px 2px rgba(0, 0, 0, 0.18),
                  0px 3px 3px rgba(0, 0, 0, 0.14),
                  0 0 12px rgba(59,130,246,0.6)
                `,
                display: windowWidth < 480 ? "none" : "block"
              }}
            >
              TaqwaTech
            </span>
          </Link>

          {/* MENU PRINCIPAL - VERSION SIMPLIFIÉE */}
          <div
            style={{
              display: "flex",
              gap: windowWidth < 768 ? "0.4rem" : "0.8rem",
              alignItems: "center",
              position: "relative"
            }}
          >
            {/* INDICATEUR ACTIF ANIMÉ */}
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                left: activeIndicator.left,
                width: activeIndicator.width,
                height: "2px",
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                borderRadius: "2px",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
                zIndex: 1
              }}
            />

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#fff" : "#bcd1ff",
                  textDecoration: "none",
                  fontWeight: "500",
                  padding: windowWidth < 768 ? "0.3rem 0.6rem" : "0.5rem 1rem",
                  borderRadius: "8px",
                  transition: "all 0.25s ease-in-out",
                  background: location.pathname === item.path
                    ? "rgba(59,130,246,0.25)"
                    : "transparent",
                  textShadow: location.pathname === item.path
                    ? "0 0 12px rgba(59,130,246,0.8)"
                    : "none",
                  position: "relative",
                  overflow: "hidden",
                  fontSize: windowWidth < 768 ? "0.8rem" : "0.9rem",
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
                {windowWidth < 768 ? 
                  (item.label === "Accueil" ? "Accueil" : 
                   item.label === "À propos" ? "À propos" :
                   item.label === "Services" ? "Services" :
                   item.label === "Portfolio" ? "Portfolio" : "Plus") 
                  : item.label
                }
              </Link>
            ))}
          </div>

          {/* BOUTON CONTACT */}
          <Link
            to="/contact"
            style={{
              padding: windowWidth < 768 ? "0.4rem 1rem" : "0.6rem 1.5rem",
              borderRadius: "10px",
              fontWeight: "600",
              color: "#fff",
              border: "1px solid rgba(59,130,246,0.55)",
              background: "linear-gradient(135deg,rgba(59,130,246,0.35),rgba(147,51,234,0.4))",
              textShadow: "0 0 12px rgba(59,130,246,0.8)",
              transition: "all 0.3s ease-in-out",
              position: "relative",
              overflow: "hidden",
              fontSize: windowWidth < 768 ? "0.8rem" : "0.9rem",
              textDecoration: "none",
              whiteSpace: "nowrap"
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
            {windowWidth < 768 ? "Contact" : "Me contacter"}
          </Link>
        </div>

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
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
          }}
        ></div>
      </nav>

      {/* DEUXIÈME BARRE - ACCÈS RAPIDE (CACHÉE SUR MOBILE) */}
      {windowWidth >= 768 && (
        <div
          style={{
            position: "fixed",
            top: windowWidth < 1024 ? "90px" : "105px",
            left: windowWidth < 768 ? "5%" : "2.5%",
            right: windowWidth < 768 ? "5%" : "2.5%",
            width: windowWidth < 768 ? "90%" : "95%",
            maxWidth: "1400px",
            height: "60px",
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "12px",
            zIndex: 998,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: windowWidth < 1024 ? "0 1rem" : "0 1.5rem",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            transition: "0.3s ease-in-out",
            margin: "0 auto"
          }}
        >
          {/* TITRE ACCÈS RAPIDE */}
          <div
            style={{
              display: windowWidth < 1024 ? "none" : "flex",
              alignItems: "center",
              color: "#bcd1ff",
              fontWeight: "600",
              fontSize: "0.9rem",
              textShadow: "0 0 10px rgba(59,130,246,0.5)",
              minWidth: "120px"
            }}
          >
            <span style={{ marginRight: "10px", fontSize: "1.1rem" }}>⚡</span>
            Accès Rapide:
          </div>

          {/* ICÔNES D'ACCÈS RAPIDE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: windowWidth < 1024 ? "0.8rem" : "1.2rem",
              flex: 1,
              justifyContent: "center",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            {quickAccessItems.map((item, index) => (
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
                  padding: windowWidth < 1024 ? "0.3rem 0.5rem" : "0.4rem 0.8rem",
                  borderRadius: "8px",
                  position: "relative"
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
                  fontSize: windowWidth < 1024 ? "1.1rem" : "1.3rem", 
                  marginBottom: "2px" 
                }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: windowWidth < 1024 ? "0.6rem" : "0.7rem",
                    fontWeight: "500",
                    textShadow: "0 0 8px currentColor"
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
              display: windowWidth < 1024 ? "none" : "flex",
              alignItems: "center",
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              borderRadius: "8px",
              padding: "0.3rem 0.8rem",
              transition: "0.3s ease-in-out",
              minWidth: "180px"
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
                fontSize: "0.8rem",
                width: "100%",
                padding: "0.3rem"
              }}
            />
            <button
              style={{
                background: "none",
                border: "none",
                color: "#3B82F6",
                cursor: "pointer",
                fontSize: "1rem",
                padding: "0.2rem"
              }}
            >
              🔍
            </button>
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
        height: windowWidth < 768 ? "100px" : windowWidth < 1024 ? "160px" : "180px" 
      }}></div>
    </>
  );
};

export default Navbar;