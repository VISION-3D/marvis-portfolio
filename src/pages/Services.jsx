import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaMobileAlt, FaRobot, FaBullhorn, FaComments, FaTools, FaLightbulb, FaRocket } from "react-icons/fa";
import { FaMoneyBillWave, FaClock, FaBullseye, FaHeadset } from "react-icons/fa";
import SEO from "../components/SEO";



const Services = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [expandedService, setExpandedService] = useState(null);

  const services = {
    web: {
     
      title: "Création de site web",
      description: "Sites web modernes, responsives et performants",
      features: ["Site vitrine", "E-commerce", "Application web", "Dashboard"],
      details: "Des solutions web sur mesure utilisant les technologies les plus récentes comme React, Next.js et Vue.js pour des performances optimales et une expérience utilisateur exceptionnelle.",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      price: "À partir de 500€",
      delay: "1-4 semaines",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je crée des sites web sur mesure qui allient design moderne, performance et expérience utilisateur optimale. Chaque projet est unique et répond à vos objectifs spécifiques.`
    },
    mobile: {
      
      title: "Applications mobiles",
      description: "Développement d'applications mobiles multiplateformes",
      features: ["React Native", "Applications hybrides", "UI/UX Design", "Déploiement Store"],
      details: "Applications natives et hybrides pour iOS et Android avec une expérience utilisateur optimale, des performances exceptionnelles et des fonctionnalités avancées.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      price: "À partir de 1500€",
      delay: "4-8 semaines",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je développe des applications mobiles performantes qui offrent une expérience utilisateur exceptionnelle sur iOS et Android.`
    },
    ai: {
    
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure pour automatiser vos processus",
      features: ["Machine Learning", "Chatbots", "Traitement des données", "Automatisation"],
      details: "Intégration d'IA et de machine learning pour automatiser vos processus, analyser vos données et améliorer l'efficacité de votre entreprise avec des solutions innovantes.",
      technologies: ["Python", "TensorFlow", "OpenAI", "ChatGPT", "Computer Vision"],
      price: "À partir de 2000€",
      delay: "6-12 semaines",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je développe des solutions d'intelligence artificielle sur mesure pour transformer votre entreprise.`
    },
    marketing: {
      
      title: "Publicité numérique",
      description: "Campagnes publicitaires performantes et stratégies digitales",
      features: ["Google Ads", "Réseaux sociaux", "Analytics", "ROI optimisé"],
      details: "Stratégies publicitaires complètes sur Google et les réseaux sociaux avec optimisation du ROI, analyse des performances et ajustements en temps réel.",
      technologies: ["Google Ads", "Meta Ads", "Analytics", "SEO", "CRO"],
      price: "À partir de 300€/mois",
      delay: "2-4 semaines",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je crée et gère des campagnes publicitaires performantes qui génèrent des résultats concrets.`
    },
    communication: {
      
      title: "Communication numérique",
      description: "Stratégie de présence en ligne et branding digital",
      features: ["Branding", "Réseaux sociaux", "Content marketing", "Community"],
      details: "Développement d'une identité digitale forte et stratégie de contenu engageante pour renforcer votre présence en ligne et fidéliser votre audience.",
      technologies: ["Branding", "Content Strategy", "Social Media", "Email Marketing"],
      price: "À partir de 400€/mois",
      delay: "3-6 semaines",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je développe votre stratégie de communication digitale pour renforcer votre marque et engager votre audience.`
    },
    maintenance: {
      
      title: "Maintenance informatique",
      description: "Support technique continu et maintenance de vos applications",
      features: ["Support 24/7", "Mises à jour", "Sécurité", "Optimisation"],
      details: "Services de maintenance proactive pour garantir la performance, la sécurité et l'évolutivité de vos applications avec support réactif et sauvegardes régulières.",
      technologies: ["Monitoring", "CI/CD", "Sécurité", "Performance", "Backups"],
      price: "À partir de 200€/mois",
      delay: "Continu",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je garantis le bon fonctionnement et la sécurité de vos applications avec un service de maintenance complet.`
    },
    consulting: {
    
      title: "Conseil Digital",
      description: "Conseils en stratégie digitale et transformation numérique",
      features: ["Audit technique", "Roadmap produit", "Architecture", "Best practices"],
      details: "Accompagnement stratégique pour votre transformation digitale avec des solutions adaptées à vos objectifs business, audit complet et plan d'action détaillé.",
      technologies: ["Architecture", "DevOps", "Cloud", "SEO", "Analytics"],
      price: "À partir de 100€/h",
      delay: "Flexible",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `Je vous accompagne dans votre transformation digitale avec un conseil stratégique personnalisé.`
    },
    seo: {
      
      title: "SEO et référencement",
      description: "Optimisation pour les moteurs de recherche et visibilité en ligne",
      features: ["Audit SEO", "Technical SEO", "Content SEO", "Analytics"],
      details: "Stratégie de référencement naturel complète pour améliorer votre visibilité sur Google, augmenter votre trafic qualifié et booster vos conversions.",
      technologies: ["SEO Technique", "Content Strategy", "Analytics", "Performance"],
      price: "À partir de 450€/mois",
      delay: "3-6 mois",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop&auto=format&q=80",
      fullDescription: `J'optimise votre visibilité sur Google avec une stratégie SEO complète et durable.`
    }
  };

 const tabs = [
  { id: "web", label: "Sites Web", icon: <FaGlobe size={24} /> },
  { id: "mobile", label: "Apps Mobile", icon: <FaMobileAlt size={24} /> },
  { id: "ai", label: "Intelligence Artificielle", icon: <FaRobot size={24} /> },
  { id: "marketing", label: "Publicité", icon: <FaBullhorn size={24} /> },
  { id: "communication", label: "Communication", icon: <FaComments size={24} /> },
  { id: "maintenance", label: "Maintenance", icon: <FaTools size={24} /> },
  { id: "consulting", label: "Conseil", icon: <FaLightbulb size={24} /> },
  { id: "seo", label: "SEO", icon: <FaRocket size={24} /> }

  ];

  const currentService = services[activeTab];

  return (
    <div className="services-page" style={{backgroundColor: "#0A0F1F", color: "#ffffff"}}>
    

      
      {/* Hero Section Services avec Background Énergétique */}
      <section className="services-hero-tech" style={{
        background: "linear-gradient(to bottom, #0A0F1FAA, #0A0F1F), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80') center/cover",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Overlay énergétique */}
        <div className="services-hero-overlay">
          <div className="services-energy-pulse" style={{borderColor: "#ffffff20"}}></div>
          <div className="services-digital-particles">
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
          </div>
        </div>

        {/* Contenu Principal */}
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="services-hero-content text-center">
             
            {/* Badge Animé */}
            <div className="services-hero-badge" style={{
              backgroundColor: "#ffffff15",
              border: "1px solid #ffffff30",
              color: "#ffffff",
              backdropFilter: "blur(10px)"
            }}>
              <span className="services-pulse-dot" style={{backgroundColor: "#ffffff"}}></span>
              Mes Services
            </div>

  <h1 className="services-hero-title animated-title">
  Des solutions <span className="neon-word">complètes</span> pour votre succès digital
</h1>



            {/* Description */}
            <p className="services-hero-description" style={{color: "#e0e0e0"}}>
              Nous  proposons une gamme de services de développement et de stratégie digitale 
              pour répondre à tous vos besoins, du simple site vitrine aux applications complexes.
            </p>

            {/* Stats Services */}
            <div className="services-stats-grid">
              <div className="services-stat-item" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <div className="services-stat-number" style={{color: "#ffffff"}}>{Object.keys(services).length}+</div>
                <div className="services-stat-label" style={{color: "#e0e0e0"}}>Services Spécialisés</div>
              </div>
              <div className="services-stat-item" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <div className="services-stat-number" style={{color: "#ffffff"}}>+30 </div>
                <div className="services-stat-label" style={{color: "#e0e0e0"}}>Projets Réalisés </div>
              </div>
              <div className="services-stat-item" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <div className="services-stat-number" style={{color: "#ffffff"}}>100%</div>
                <div className="services-stat-label" style={{color: "#e0e0e0"}}>Satisfaction Client</div>
              </div>
              <div className="services-stat-item" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <div className="services-stat-number" style={{color: "#ffffff"}}> + 15</div>
                <div className="services-stat-label" style={{color: "#e0e0e0"}}>Technologies Métrisées </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par Onglets Technologiques */}
      <section className="services-tabs-section" style={{backgroundColor: "#0A0F1F"}}>
        <div className="container">
          <div className="services-tabs-container">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`services-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedService(null);
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                style={{
                  backgroundColor: activeTab === tab.id ? "#ffffff15" : "transparent",
                  border: activeTab === tab.id ? "1px solid #ffffff30" : "1px solid #ffffff20",
                  color: "#ffffff",
                  backdropFilter: "blur(10px)"
                }}
              >
                <span className="tab-icon" style={{color: "#ffffff"}}>{tab.icon}</span>
                <span className="tab-text">{tab.label}</span>
                <div className="tab-indicator" style={{backgroundColor: "#ffffff"}}></div>
                <div className="tab-glow" style={{backgroundColor: "#ffffff"}}></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Service Actif Détaillé */}
      <section className="service-detail-section" style={{backgroundColor: "#0A0F1F"}}>
        <div className="container">
          <div className="service-detail-grid">
             </div>
            {/* Carte Principale du Service */}
            <div className="service-main-card" data-aos="fade-right" style={{
              backgroundColor: "#ffffff10",
              border: "1px solid #ffffff20",
              backdropFilter: "blur(10px)"
            }}>
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon-large" style={{
                    backgroundColor: "#ffffff15",
                    border: "1px solid #ffffff30",
                    color: "#ffffff"
                  }}>{currentService.icon}</div>
                  <div className="service-icon-glow" style={{backgroundColor: "#ffffff"}}></div>
                </div>
                <div className="service-basic-info">
                  <h2 className="service-title-large" style={{color: "#ffffff"}}>{currentService.title}</h2>
                  <p className="service-description-large" style={{color: "#e0e0e0"}}>{currentService.description}</p>
                </div>
              </div>

              <div className="service-content-grid">
                <div className="service-text-content">
                  <p className="service-full-description" style={{color: "#e0e0e0"}}>
                    {currentService.fullDescription}
                  </p>

                  <div className="service-features-detailed">
                    <h3 className="features-title" style={{color: "#ffffff"}}>Ce que je propose</h3>
                    <div className="features-grid-detailed">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="feature-item-detailed" style={{color: "#e0e0e0"}}>
                          <span className="feature-check" style={{color: "#ffffff"}}>✓</span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-actions-detailed">
                    <Link to="/contact" className="btn-service-primary-large" style={{
                      backgroundColor: "#ffffff",
                      color: "#0A0F1F",
                      border: "2px solid #ffffff"
                    }}>
                      <span className="btn-sparkle-service" style={{backgroundColor: "#ffffff"}}></span>
                      Discuter de ce service
                    </Link>
                  </div>
                </div>

                <div className="service-image-content">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="service-detail-image"
                  />
                  <div className="service-image-glow" style={{backgroundColor: "#ffffff"}}></div>
                </div>
              </div>
            </div>

          {/* Sidebar Informations */}
<div className="service-info-sidebar" data-aos="fade-left">
<div className="services-page">
  {/* SEO pour cette page */}
  <SEO
    title="TaqwaTech - Nos Services"
    description="Découvrez les services de TaqwaTech : développement web, applications, solutions IA et digital sur mesure."
  />



  {/* Informations Pratiques */}
  <div className="info-card service-practical-info" style={{
    backgroundColor: "#ffffff10",
    border: "1px solid #ffffff20",
    color: "#ffffff"
  }}>
    <h3 className="info-card-title" style={{color: "#ffffff"}}>Informations Pratiques</h3>
    <div className="practical-details-grid">
      
      <div className="practical-detail-item">
        <span className="detail-icon" style={{color: "#ffffff"}}><FaMoneyBillWave /></span>
        <div className="detail-content">
          <span className="detail-label" style={{color: "#e0e0e0"}}>Prix</span>
          <span className="detail-value" style={{color: "#ffffff"}}>{currentService.price}</span>
        </div>
      </div>

      <div className="practical-detail-item">
        <span className="detail-icon" style={{color: "#ffffff"}}><FaClock /></span>
        <div className="detail-content">
          <span className="detail-label" style={{color: "#e0e0e0"}}>Délai</span>
          <span className="detail-value" style={{color: "#ffffff"}}>{currentService.delay}</span>
        </div>
      </div>

      <div className="practical-detail-item">
        <span className="detail-icon" style={{color: "#ffffff"}}><FaBullseye /></span>
        <div className="detail-content">
          <span className="detail-label" style={{color: "#e0e0e0"}}>Méthodologie</span>
          <span className="detail-value" style={{color: "#ffffff"}}>Agile & Itérative</span>
        </div>
      </div>

      <div className="practical-detail-item">
        <span className="detail-icon" style={{color: "#ffffff"}}><FaHeadset /></span>
        <div className="detail-content">
          <span className="detail-label" style={{color: "#e0e0e0"}}>Support</span>
          <span className="detail-value" style={{color: "#ffffff"}}>Inclus 30 jours</span>
        </div>
      </div>

    </div>
  </div>
</div>
            <div className="service-info-sidebar" data-aos="fade-left">

              {/* Technologies */}
              <div className="info-card service-tech-info" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <h3 className="info-card-title" style={{color: "#ffffff"}}>Technologies utilisées</h3>
                <div className="tech-tags-grid">
                  {currentService.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag-service" data-aos="zoom-in" data-aos-delay={index * 50} style={{
                      backgroundColor: "#ffffff15",
                      border: "1px solid #ffffff30",
                      color: "#ffffff"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Processus de Travail */}
              <div className="info-card service-process-info" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <h3 className="info-card-title" style={{color: "#ffffff"}}>Processus de Travail</h3>
                <div className="process-steps-compact">
                  <div className="process-step-compact">
                    <div className="step-number-compact" style={{
                      backgroundColor: "#ffffff",
                      color: "#0A0F1F"
                    }}>1</div>
                    <div className="step-content-compact">
                      <h4 style={{color: "#ffffff"}}>Consultation</h4>
                      <p style={{color: "#e0e0e0"}}>Analyse de vos besoins</p>
                    </div>
                  </div>
                  <div className="process-step-compact">
                    <div className="step-number-compact" style={{
                      backgroundColor: "#ffffff",
                      color: "#0A0F1F"
                    }}>2</div>
                    <div className="step-content-compact">
                      <h4 style={{color: "#ffffff"}}>Conception</h4>
                      <p style={{color: "#e0e0e0"}}>Maquettes et planning</p>
                    </div>
                  </div>
                  <div className="process-step-compact">
                    <div className="step-number-compact" style={{
                      backgroundColor: "#ffffff",
                      color: "#0A0F1F"
                    }}>3</div>
                    <div className="step-content-compact">
                      <h4 style={{color: "#ffffff"}}>Développement</h4>
                      <p style={{color: "#e0e0e0"}}>Implémentation et tests</p>
                    </div>
                  </div>
                  <div className="process-step-compact">
                    <div className="step-number-compact" style={{
                      backgroundColor: "#ffffff",
                      color: "#0A0F1F"
                    }}>4</div>
                    <div className="step-content-compact">
                      <h4 style={{color: "#ffffff"}}>Livraison</h4>
                      <p style={{color: "#e0e0e0"}}>Déploiement et formation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tous les Services en Bref */}
      <section className="all-services-overview-tech" style={{backgroundColor: "#0A0F1F"}}>
        <div className="container">
          <div className="section-header-tech text-center">
            <h2 className="section-title-tech" style={{color: "#ffffff"}}>Tous mes <span className="tech-gradient-text">services</span></h2>
            <p className="section-subtitle-tech" style={{color: "#e0e0e0"}}>
              Découvrez l'ensemble de mes compétences et domaines d'expertise
            </p>
          </div>

          <div className="services-overview-grid-tech">
            {tabs.map((tab, index) => (
              <ServiceOverviewCard 
                key={tab.id}
                service={services[tab.id]}
                serviceKey={tab.id}
                activeTab={activeTab}
                expandedService={expandedService}
                setActiveTab={setActiveTab}
                setExpandedService={setExpandedService}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Énergétique */}
      <section className="services-cta-tech" style={{
        background: "linear-gradient(135deg, #0A0F1F 0%, #1a1f3f 100%)",
        color: "#ffffff"
      }}>
        <div className="services-cta-background">
          <div className="cta-circuit-services" style={{borderColor: "#ffffff20"}}></div>
          <div className="cta-energy-services" style={{backgroundColor: "#ffffff"}}></div>
        </div>
        
        <div className="container text-center">
          <div className="services-cta-content">
            <h2 data-aos="fade-up" style={{color: "#ffffff"}}>
              Prêt à <span className="tech-gradient-text">démarrer</span> votre projet ?
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" style={{color: "#e0e0e0"}}>
              Contactez-moi pour un devis personnalisé et gratuit adapté à vos besoins spécifiques
            </p>
            
            <div className="services-cta-actions" data-aos="zoom-in" data-aos-delay="400">
              <Link to="/contact" className="btn-tech-primary btn-large" style={{
                backgroundColor: "#ffffff",
                color: "#0A0F1F",
                border: "2px solid #ffffff"
              }}>
                <span className="btn-rocket" style={{color: "#0A0F1F"}}>🚀</span>
                Obtenir un devis gratuit
              </Link>
            </div>

            <div className="cta-guarantees" data-aos="fade-up" data-aos-delay="600">
              <div className="guarantee-item" style={{color: "#ffffff"}}>
                <span className="guarantee-icon" style={{color: "#ffffff"}}>✅</span>
                <span>Devis gratuit et sans engagement</span>
              </div>
              <div className="guarantee-item" style={{color: "#ffffff"}}>
                <span className="guarantee-icon" style={{color: "#ffffff"}}>🛡️</span>
                <span>Garantie satisfait ou remboursé 15 jours</span>
              </div>
              <div className="guarantee-item" style={{color: "#ffffff"}}>
                <span className="guarantee-icon" style={{color: "#ffffff"}}>⚡</span>
                <span>Réponse sous 24h maximum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Composant Carte de Service
const ServiceOverviewCard = ({ service, serviceKey, activeTab, expandedService, setActiveTab, setExpandedService, index }) => (
  <div 
    className={`service-overview-card-tech ${activeTab === serviceKey ? 'active' : ''}`}
    onClick={() => {
      setActiveTab(serviceKey);
      setExpandedService(expandedService === serviceKey ? null : serviceKey);
    }}
    data-aos="zoom-in"
    data-aos-delay={index * 100}
    style={{
      backgroundColor: "#ffffff10",
      border: activeTab === serviceKey ? "2px solid #ffffff" : "1px solid #ffffff20",
      color: "#ffffff",
      backdropFilter: "blur(10px)"
    }}
  >
    {/* Image du service */}
    <div className="service-overview-image">
      <img src={service.image} alt={service.title} />
      <div className="service-image-overlay-tech" style={{backgroundColor: "rgba(255,255,255,0.1)"}}></div>
      <div className="service-icon-overview" style={{
        backgroundColor: "#ffffff",
        color: "#0A0F1F"
      }}>{service.icon}</div>
    </div>

    <div className="service-overview-content">
      <h3 className="overview-title-tech" style={{color: "#ffffff"}}>{service.title}</h3>
      <p className="overview-description-tech" style={{color: "#e0e0e0"}}>{service.description}</p>

      {/* Contenu dépliable */}
      {expandedService === serviceKey && (
        <div className="service-expanded-content">
          <div className="expanded-details">
            <p style={{color: "#e0e0e0"}}>{service.details}</p>
            
            <div className="expanded-pricing">
              <div className="pricing-item">
                <span className="pricing-label" style={{color: "#e0e0e0"}}>💰 Tarif :</span>
                <span className="pricing-value" style={{color: "#ffffff"}}>{service.price}</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label" style={{color: "#e0e0e0"}}>⏱️ Délai :</span>
                <span className="pricing-value" style={{color: "#ffffff"}}>{service.delay}</span>
              </div>
            </div>

            <Link 
              to="/contact"
              className="btn-service-choose"
              style={{
                backgroundColor: "#ffffff",
                color: "#0A0F1F",
                border: "1px solid #ffffff"
              }}
            >
              Choisir ce service
            </Link>
          </div>
        </div>
      )}

      {/* Indicateur "En savoir plus" */}
      <div 
        className="service-expand-indicator"
        onClick={(e) => {
          e.stopPropagation();
          setExpandedService(expandedService === serviceKey ? null : serviceKey);
        }}
        style={{color: "#ffffff"}}
      >
        <span>{expandedService === serviceKey ? '▼ Moins' : 'En savoir plus'}</span>
        <span className={`expand-arrow ${expandedService === serviceKey ? 'expanded' : ''}`} style={{color: "#ffffff"}}>
          ▼
        </span>
      </div>
    </div>

    <div className="service-overview-glow" style={{backgroundColor: "#ffffff"}}></div>
  </div>
);

export default Services;