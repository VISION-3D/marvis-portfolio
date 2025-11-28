import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaShieldAlt, FaBolt } from "react-icons/fa";
import { FaUser, FaClock } from "react-icons/fa";
import { FaRocket, FaStar, FaTools } from "react-icons/fa";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaServer, FaBullhorn, FaComments } from "react-icons/fa";
import SEO from "../components/SEO";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
<div className="portfolio-page">
      <SEO
        title="TaqwaTech - Portfolio"
        description="Découvrez le portfolio de TaqwaTech avec nos projets web, applications et solutions IA réalisés."
      />
    </div>

  const projects = [
    {
      title: "Site E-commerce Moderne",
      description: "Plateforme e-commerce complète avec panier, paiement sécurisé et administration avancée",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoLink: "",
      codeLink: "",
      category: "web",
      status: "live",
      featured: true,
      client: "Boutique de Mode",
      duration: "6 semaines"
    },
    {
      title: "Application de Gestion d'Entreprise",
      description: "Outil complet de gestion avec CRM, facturation et tableau de bord analytique",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Vue.js", "Express", "MySQL", "Chart.js", "JWT"],
      demoLink: "#",
      codeLink: "#",
      category: "web",
      status: "live",
      featured: false,
      client: "Startup Tech",
      duration: "8 semaines"
    },
    {
      title: "Chatbot IA pour Support Client",
      description: "Assistant intelligent avec apprentissage automatique et intégration WhatsApp",
      img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Python", "TensorFlow", "React", "WebSocket", "OpenAI"],
      demoLink: "",
      codeLink: "",
      category: "ai",
      status: "live",
      featured: true,
      client: "Centre d'Appel",
      duration: "10 semaines"
    },
    {
      title: "Application Mobile de Productivité",
      description: "App de gestion des tâches avec synchronisation cloud et notifications intelligentes",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["React Native", "Firebase", "Redux", "iOS", "Android"],
      demoLink: "",
      codeLink: "",
      category: "mobile",
      status: "live",
      featured: false,
      client: "Entreprise SaaS",
      duration: "12 semaines"
    },
    {
      title: "API REST Sécurisée pour FinTech",
      description: "API bancaire avec authentification avancée, documentation Swagger et microservices",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Node.js", "JWT", "Swagger", "MongoDB", "Docker"],
      demoLink: "",
      codeLink: "",
      category: "backend",
      status: "live",
      featured: true,
      client: "FinTech Startup",
      duration: "7 semaines"
    },
    {
      title: "Tableau de Bord Analytique en Temps Réel",
      description: "Dashboard avec visualisation de données en direct et rapports automatisés",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["React", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
      demoLink: "",
      codeLink: "",
      category: "web",
      status: "live",
      featured: false,
      client: "Agence Marketing",
      duration: "5 semaines"
    },
    {
      title: "Campagne Publicitaire Digitale",
      description: "Stratégie complète Google Ads et réseaux sociaux avec optimisation ROI",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Google Ads", "Meta Ads", "Analytics", "SEO", "CRO"],
      demoLink: "",
      codeLink: "",
      category: "marketing",
      status: "completed",
      featured: false,
      client: "Restaurant Premium",
      duration: "3 semaines"
    },
    {
      title: "Stratégie de Communication Digitale",
      description: "Refonte complète de l'identité digitale et stratégie de contenu",
      img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Branding", "Content Strategy", "Social Media", "Email Marketing"],
      demoLink: "",
      codeLink: "",
      category: "communication",
      status: "completed",
      featured: true,
      client: "Cabinet d'Avocats",
      duration: "4 semaines"
    }
  ];

  const filters = [
    { id: "all", label: "Tous les projets", count: projects.length, icon: <FaStar /> },
    { id: "web", label: "Développement Web", count: projects.filter(p => p.category === "web").length, icon: <FaLaptopCode /> },
    { id: "mobile", label: "Applications Mobile", count: projects.filter(p => p.category === "mobile").length, icon: <FaMobileAlt /> },
    { id: "ai", label: "Intelligence Artificielle", count: projects.filter(p => p.category === "ai").length, icon: <FaRobot /> },
    { id: "backend", label: "API & Backend", count: projects.filter(p => p.category === "backend").length, icon: <FaServer /> },
    { id: "marketing", label: "Marketing Digital", count: projects.filter(p => p.category === "marketing").length, icon: <FaBullhorn /> },
    { id: "communication", label: "Communication", count: projects.filter(p => p.category === "communication").length, icon: <FaComments /> }
  ];

  const stats = [
    { number: "+30", label: "Projets Effectués", icon: <FaRocket color="#6C63FF" /> },
    { number: "100%", label: "Satisfaction", icon: <FaStar color="#FBBF24" /> },
    { number: "+15", label: "Technologies Maîtrisées", icon: <FaTools color="#10B981" /> },
    { number: "100%", label: "Délais Respectés", icon: <FaClock color="#EF4444" /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const getStatusColor = (status) => {
      switch (status) {
        case "live": return "#10B981";
        case "development": return "#F59E0B";
        case "completed": return "#3B82F6";
        default: return "#6B7280";
      }
    };

    const getStatusText = (status) => {
      switch (status) {
        case "live": return "En Ligne";
        case "development": return "En Développement";
        case "completed": return "Terminé";
        default: return status;
      }
    };

    return (
      <div className="project-card-compact">
        {/* Badge Featured */}
        {project.featured && (
          <div className="featured-badge-compact">
            <span>⭐</span>
            Projet Vedette
          </div>
        )}

        {/* Image du Projet */}
        <div className="project-image-compact">
          {!imageLoaded && (
            <div className="image-skeleton-compact"></div>
          )}
          <img 
            src={project.img} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
          
          {/* Overlay avec Actions */}
          <div className="project-overlay-compact">
            <div className="project-actions-compact">
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  className="action-btn-compact demo-btn-compact"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>👁️</span>
                  Voir
                </a>
              )}
              
              <button 
                className="action-btn-compact code-btn-compact"
                onClick={() => {
                  if (project.codeLink) {
                    window.open(project.codeLink, '_blank');
                  } else {
                    alert("Code source disponible sur demande : marvissene25@gmail.com");
                  }
                }}
              >
                <span>💻</span>
                Code
              </button>
            </div>
          </div>

          {/* Status Badge */}
          <div 
            className="project-status-compact"
            style={{ backgroundColor: getStatusColor(project.status) }}
          >
            {getStatusText(project.status)}
          </div>
        </div>

        {/* Contenu du Projet */}
        <div className="project-content-compact">
          <h3 className="project-title-compact">{project.title}</h3>
          
          <p className="project-description-compact">{project.description}</p>

          {/* Informations Client */}
          <div className="project-meta-compact">
            <span className="client-info">
              <FaUser /> {project.client}
            </span>
            <span className="duration-info">
              <FaClock /> {project.duration}
            </span>
          </div>
          
          {/* Technologies Utilisées */}
          <div className="project-tech-compact">
            {project.tech.map((technology, index) => (
              <span key={index} className="tech-tag-compact">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="portfolio-page-compact">
      


      
      {/* Hero Section Compacte */}
      <section className="portfolio-hero-compact">
        <div className="container">
          <div className="portfolio-hero-content-compact text-center">
            <div className="tech-badge-portfolio-compact">
              <span className="pulse-dot-tech"></span>
              Mon Portfolio
            </div>
            
            <h1 className="portfolio-hero-title-compact">
              Mes <span className="tech-gradient-text">Réalisations</span>
            </h1>
            
            <p className="portfolio-hero-description-compact">
              Découvrez une sélection de mes projets de développement web, applications mobiles, 
              solutions d'intelligence artificielle et stratégies digitales.
            </p>

            {/* Stats Compactes */}
            <div className="portfolio-stats-compact">
              {stats.map((stat, index) => (
                <div key={index} className="portfolio-stat-compact">
                  <div className="stat-icon-compact">{stat.icon}</div>
                  <div className="stat-number-compact">{stat.number}</div>
                  <div className="stat-label-compact">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filtres Compacts */}
      <section className="portfolio-filters-compact">
        <div className="container">
          <div className="filters-container-compact">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                className={`filter-btn-compact ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className="filter-icon-compact">{filter.icon}</span>
                <span className="filter-text-compact">{filter.label}</span>
                <span className="filter-count-compact">{filter.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid des Projets avec Espace Optimisé */}
      <section className="portfolio-grid-compact">
        <div className="container">
          <div className="projects-grid-compact">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="no-projects-message-compact">
              <div className="no-projects-icon">🔍</div>
              <h3>Aucun projet trouvé</h3>
              <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
            </div>
          )}
        </div>
      </section>

      {/* Section Expertise Compacte */}
      <section className="expertise-section-compact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="expertise-title">Pourquoi choisir mes services ?</h2>
              <div className="expertise-features">
                <div className="expertise-feature">
                  <FaCheckCircle className="feature-icon" />
                  <div>
                    <h4>Solutions Sur Mesure</h4>
                    <p>Chaque projet est unique et adapté à vos besoins spécifiques</p>
                  </div>
                </div>
                <div className="expertise-feature">
                  <FaBolt className="feature-icon" />
                  <div>
                    <h4>Délais Respectés</h4>
                    <p>Livraison dans les temps avec un suivi rigoureux</p>
                  </div>
                </div>
                <div className="expertise-feature">
                  <FaShieldAlt className="feature-icon" />
                  <div>
                    <h4>Support Continu</h4>
                    <p>Accompagnement et maintenance après la livraison</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-mini-card">
                <h3>Prêt à démarrer ?</h3>
                <p>Discutons de votre projet dès maintenant</p>
                <div className="cta-mini-actions">
                  <Link to="/contact" className="btn-mini-primary">
                    <FaRocket />
                    Commencer
                  </Link>
                  <a href="https://wa.me/221779490685" className="btn-mini-secondary">
                    <span>💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Compacte */}
      <section className="portfolio-cta-compact">
        <div className="container text-center">
          <div className="cta-content-compact">
            <h2>Transformons votre idée en réalité</h2>
            <p>Contactez-moi pour un devis personnalisé et gratuit</p>
            
            <div className="cta-actions-compact">
              <Link to="/contact" className="btn-cta-primary-compact">
                <FaRocket />
                Démarrer mon projet
              </Link>
              
              <a 
                href="mailto:marvissene25@gmail.com"
                className="btn-cta-secondary-compact"
              >
                <span>📧</span>
                Discuter de mon projet
              </a>
            </div>

            <div className="cta-guarantees-compact">
              <div className="guarantee-item-compact">
                <FaCheckCircle />
                <span>Devis gratuit</span>
              </div>
              <div className="guarantee-item-compact">
                <FaShieldAlt />
                <span>Garantie satisfaction</span>
              </div>
              <div className="guarantee-item-compact">
                <FaBolt />
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;