// --- CODE CORRIGÉ - BARRE CENTRÉE ---
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/theme.css";
import { FaSearch,FaRobot,FaYoutube, FaFacebook,FaTwitter,FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ width: 0, left: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mise à jour de l'indicateur actif quand la route change
  useEffect(() => {
    updateActiveIndicator();
  }, [location.pathname]);

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
          height: "75px",
          position: "fixed",
          top: "15px",
          left: "2.5%", // Modifié pour centrage correct
          right: "2.5%", // Modifié pour centrage correct
          width: "95%", // Largeur réduite
          maxWidth: "1400px",
          borderRadius: "15px",
          zIndex: 1000,
          boxShadow: isScrolled
            ? "0 10px 40px rgba(0, 0, 0, 0.45)"
            : "0 5px 25px rgba(0, 0, 0, 0.3)",
          transition: "0.4s ease-in-out",
          margin: "0 auto", // Centrage automatique
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
            padding: "0 1.5rem",
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
              src="/logo.png"
              alt="Marvis Technologie et IA"
              style={{
                width: "65px",
                height: "65px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 18px rgba(59,130,246,0.7))",
                transition: "0.3s ease-in-out"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.filter =
                  "drop-shadow(0 0 35px rgba(59,130,246,0.9))";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.filter =
                  "drop-shadow(0 0 18px rgba(59,130,246,0.7))";
              }}
            />

            <span
              style={{
                marginLeft: "10px",
                fontSize: "0.9rem",
                fontWeight: "600",
                background: "linear-gradient(90deg,#fff,#b3c8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 12px rgba(59,130,246,0.6)"
              }}
            >
              Marvis Technologie et IA
            </span>
          </Link>

          {/* MENU PRINCIPAL */}
          <div
            style={{
              display: "flex",
              gap: "0.8rem",
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
                  color:
                    location.pathname === item.path ? "#fff" : "#bcd1ff",
                  textDecoration: "none",
                  fontWeight: "500",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  transition: "all 0.25s ease-in-out",
                  background:
                    location.pathname === item.path
                      ? "rgba(59,130,246,0.25)"
                      : "transparent",
                  textShadow:
                    location.pathname === item.path
                      ? "0 0 12px rgba(59,130,246,0.8)"
                      : "none",
                  position: "relative",
                  overflow: "hidden",
                  fontSize: "0.9rem"
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
                {item.label}
                
                {/* EFFET DE SURVOL */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: "0%",
                    height: "1px",
                    background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                    transition: "all 0.3s ease-in-out",
                    transform: "translateX(-50%)"
                  }}
                />
              </Link>
            ))}
          </div>

          {/* BOUTON CONTACT */}
          <Link
            to="/contact"
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: "10px",
              fontWeight: "600",
              color: "#fff",
              border: "1px solid rgba(59,130,246,0.55)",
              background:
                "linear-gradient(135deg,rgba(59,130,246,0.35),rgba(147,51,234,0.4))",
              textShadow: "0 0 12px rgba(59,130,246,0.8)",
              transition: "all 0.3s ease-in-out",
              position: "relative",
              overflow: "hidden",
              fontSize: "0.9rem"
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
            <span style={{ position: "relative", zIndex: 2 }}>
              Me contacter
            </span>
            
            {/* EFFET DE LUMIÈRE AU SURVOL */}
            <span
              style={{
                position: "absolute",
                top: "0",
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transition: "left 0.5s ease-in-out"
              }}
            />
          </Link>
        </div>

        {/* BANDE ANIMÉE SOUS LA NAV - MULTICOUCHE */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
            backgroundSize: "300% 100%",
            animation: "scrollLine 5s linear infinite",
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
          }}
        ></div>
      </nav>

      {/* DEUXIÈME BARRE - ACCÈS RAPIDE */}
      <div
        style={{
          position: "fixed",
          top: "105px", // Position sous la première barre (75px + 15px top + 15px marge)
          left: "2.5%", // Même position que la première barre
          right: "2.5%", // Même position que la première barre
          width: "95%", // Même largeur que la première barre
          maxWidth: "1400px", // Même max-width
          height: "60px",
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          borderRadius: "12px",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          transition: "0.3s ease-in-out",
          margin: "0 auto" // Centrage automatique
        }}
      >
        {/* TITRE ACCÈS RAPIDE */}
        <div
          style={{
            display: "flex",
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
            gap: "1.2rem",
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
                padding: "0.4rem 0.8rem",
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
              <span style={{ fontSize: "1.3rem", marginBottom: "2px" }}>
                {item.icon}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "500",
                  textShadow: "0 0 8px currentColor"
                }}
              >
                {item.name}
              </span>
              
              {/* INDICATEUR DE COULEUR */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0%",
                  height: "2px",
                  background: item.color,
                  borderRadius: "2px",
                  transition: "width 0.3s ease-in-out",
                  boxShadow: `0 0 8px ${item.color}`
                }}
              />
            </a>
          ))}
        </div>

        {/* BARRE DE RECHERCHE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "8px",
            padding: "0.3rem 0.8rem",
            transition: "0.3s ease-in-out",
            minWidth: "180px"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(59, 130, 246, 0.2)";
            e.target.style.borderColor = "rgba(59, 130, 246, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(59, 130, 246, 0.1)";
            e.target.style.borderColor = "rgba(59, 130, 246, 0.3)";
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

      <style>{`
        @keyframes scrollLine {
          0% { background-position: 0% 0; }
          100% { background-position: 300% 0; }
        }
        
        /* Animation pour l'effet de surbrillance au survol */
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Style pour la barre de recherche */
        input::placeholder {
          color: #94a3b8;
        }

        input:focus {
          background: rgba(59, 130, 246, 0.15) !important;
        }
      `}</style>

      {/* Espace réservé pour la hauteur des deux barres */}
      <div style={{ height: "180px" }}></div>
    </>
  );
};

export default Navbar;