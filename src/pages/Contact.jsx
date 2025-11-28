import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBullseye, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  // 🔥🔥🔥 REMPLACE AVEC TES VRAIS IDs EMAILJS 🔥🔥🔥
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_abc123', // ← REMPLACE par ton Service ID
    TEMPLATE_ID: 'template_xyz789', // ← REMPLACE par ton Template ID  
    PUBLIC_KEY: 'pk_abcdefgh123456' // ← REMPLACE par ta Public Key
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ FONCTION CORRECTE AVEC GESTION D'ERREUR AMÉLIORÉE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSendStatus('');

    // Validation supplémentaire
    if (!formData.name || !formData.email || !formData.message) {
      setSendStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `Contact portfolio - ${formData.name}`,
          message: formData.message,
          reply_to: formData.email // Important pour pouvoir répondre
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email envoyé avec succès:', result);
      
      setSendStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSendStatus(''), 5000);
    } catch (error) {
      console.error('ERREUR EmailJS:', error);
      
      // Gestion d'erreur détaillée
      if (error.text?.includes('Invalid template ID')) {
        setSendStatus('config_error');
      } else {
        setSendStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ MÉTHODES DE CONTACT (inchangées)
  const contactMethods = [
    {
      icon: <FaEnvelope style={{ color: "#EC4899" }} />,
      title: "Email",
      value: "contactaqwatech@gmail.com",
      description: "Réponse sous 24h",
      action: () => {
        const subject = "Nouveau contact depuis votre portfolio";
        const body = "Bonjour M. (Mme),\n\nJe suis intéressé(e) par vos services et je souhaiterais discuter de mon projet avec vous.\n\nCordialement,";
        window.location.href = `mailto:contactaqwatech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      },
      color: "#EC4899"
    },
    {
      icon: <FaWhatsapp style={{ color: "#25D366" }} />,
      title: "WhatsApp",
      value: "+221 76 949 06 85",
      description: "Discutons en direct",
      action: () => {
        const message = "Bonjour M. (Mme), je suis intéressé(e) par vos services et je souhaiterais discuter de mon projet avec vous.";
        window.open(`https://api.whatsapp.com/send?phone=221779490685&text=${encodeURIComponent(message)}`, '_blank');
      },
      color: "#25D366"
    },
    {
      icon: <FaMapMarkerAlt style={{ color: "#6C63FF" }} />,
      title: "Localisation",
      value: "Thiès, Sénégal",
      description: "Remote & Présentiel",
      action: () => {
        window.open("https://www.google.com/maps/place/Thiès,+Sénégal", '_blank');
      },
      color: "#6C63FF"
    }
  ];

  const socialNetworks = [
    { 
      name: "GitHub", 
      icon: <FaGithub style={{ color: "#333" }} />, 
      link: "https://github.com/Marvis225",
      action: () => window.open("https://github.com/Marvis225", '_blank')
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin style={{ color: "#0077B5" }} />, 
      link: "https://linkedin.com/in/saliou-sene",
      action: () => window.open("https://linkedin.com/in/saliou-sene", '_blank')
    },
    { 
      name: "Twitter", 
      icon: <FaTwitter style={{ color: "#1DA1F2" }} />, 
      link: "https://twitter.com/Marvis_Sene",
      action: () => window.open("https://twitter.com/Marvis_Sene", '_blank')
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram style={{ color: "#E4405F" }} />, 
      link: "https://instagram.com/marvis_tech",
      action: () => window.open("https://instagram.com/marvis_tech", '_blank')
    }
  ];

  const faqs = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Les délais varient selon la complexité du projet. Un site vitrine simple : 1-2 semaines. Une application complexe : 1-3 mois."
    },
    {
      question: "Proposez-vous un support après livraison ?",
      answer: "Oui, nous proposons un support technique de 30 jours gratuit après la livraison, puis des formules de maintenance mensuelles."
    },
    {
      question: "Travaillez-vous en remote ?",
      answer: "Absolument ! Nous travaillons principalement à distance avec des clients partout dans le monde."
    },
    {
      question: "Quels sont vos modes de paiement ?",
      answer: "Nous proposons un paiement échelonné : 30% à la signature, 40% à la mi-projet, 30% à la livraison. Paiement par virement bancaire ou mobile money."
    }
  ];

  return (
    <div className="contact-page">
      <SEO
        title="TaqwaTech - Contact"
        description="Contactez TaqwaTech pour vos projets en développement web, applications et solutions IA sur mesure."
      />

      {/* Hero Section Contact */}
      <section className="contact-hero-tech">
        <div className="contact-hero-background">
          <div className="contact-orb orb-1"></div>
          <div className="contact-orb orb-2"></div>
          <div className="communication-waves"></div>
        </div>
        
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minHeight: "60vh",
            gap: "1rem",
          }}
        >
          <div className="contact-hero-content">
            <div className="tech-badge-contact" data-aos="fade-down">
              <span className="pulse-dot-contact"></span>
              Contact
            </div>

            <h1 className="contact-hero-title" data-aos="fade-up">
              Discutons de votre <span className="tech-gradient-text">projet</span>
            </h1>

            <p
              className="contact-hero-description"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Vous avez une idée de projet ? Envie de collaborer ? 
              Contactez-nous et nous vous répondrons dans les plus brefs délais.
            </p>

            {/* Communication Indicators */}
            <div className="communication-indicators" data-aos="fade-up" data-aos-delay="400">
              <div className="indicator">
                <div className="indicator-dot active"></div>
                <span>En ligne</span>
              </div>
              <div className="indicator">
                <div className="indicator-dot"></div>
                <span>Réponse rapide</span>
              </div>
              <div className="indicator">
                <div className="indicator-dot"></div>
                <span>Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-tech">
        <div className="container">
          <div className="contact-grid">
            {/* Informations de Contact */}
            <div className="contact-info-tech" data-aos="fade-right">
              <div className="contact-info-header">
                <h2>Nos coordonnées</h2>
                <p>Plusieurs moyens de nous contacter pour discuter de votre projet</p>
              </div>

              {/* Méthodes de Contact */}
              <div className="contact-methods-grid">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="contact-method-card clickable"
                    onClick={method.action}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    style={{ '--method-color': method.color }}
                  >
                    <div className="method-icon-wrapper">
                      <div 
                        className="method-icon"
                        style={{ backgroundColor: `${method.color}20` }}
                      >
                        {method.icon}
                      </div>
                      <div className="method-glow"></div>
                    </div>
                    
                    <div className="method-content">
                      <h3 className="method-title">{method.title}</h3>
                      <span className="method-value">{method.value}</span>
                      <p className="method-description">{method.description}</p>
                    </div>
                    
                    <div className="method-energy"></div>
                    <div className="click-indicator">
                      <span>Cliquez pour nous contacter</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux Sociaux */}
              <div className="social-section-tech">
                <h3>Suivez-nous</h3>
                <div className="social-grid-tech">
                  {socialNetworks.map((social, index) => (
                    <div
                      key={index}
                      className="social-card-tech clickable"
                      onClick={social.action}
                      style={{ '--social-color': social.color }}
                      data-aos="flip-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="social-icon">{social.icon}</div>
                      <span className="social-name">{social.name}</span>
                      <div className="social-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div className="contact-form-tech" data-aos="fade-left">
              <form onSubmit={handleSubmit} className="tech-contact-form">
                <div className="form-header">
                  <h3>Envoyez un message</h3>
                  <p>Décrivez votre projet en détail pour une réponse personnalisée</p>
                </div>

                <div className="form-grid">
                  {/* Nom complet */}
                  <div className="form-group" data-aos="fade-up">
                    <label htmlFor="name" className="form-label-tech">
                      <span className="label-icon"><FaUser style={{ color: "#6C63FF" }} /></span>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input-tech"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                    />
                    <div className="input-glow"></div>
                  </div>

                  {/* Email */}
                  <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="email" className="form-label-tech">
                      <span className="label-icon"><FaEnvelope style={{ color: "#EC4899" }} /></span>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input-tech"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                    <div className="input-glow"></div>
                  </div>

                  {/* Sujet */}
                  <div className="form-group full-width" data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="subject" className="form-label-tech">
                      <span className="label-icon"><FaBullseye style={{ color: "#8B5CF6" }} /></span>
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input-tech"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Développement site web"
                    />
                    <div className="input-glow"></div>
                  </div>

                  {/* Message */}
                  <div className="form-group full-width" data-aos="fade-up" data-aos-delay="300">
                    <label htmlFor="message" className="form-label-tech">
                      <span className="label-icon"><FaCommentDots style={{ color: "#10B981" }} /></span>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea-tech"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet en détail..."
                    ></textarea>
                    <div className="input-glow"></div>
                  </div>
                </div>

                {/* Messages de statut AMÉLIORÉS */}
                {sendStatus === 'success' && (
                  <div className="status-message success" data-aos="fade-up">
                    ✅ Message envoyé avec succès ! Nous vous répondrons dans les 24h.
                  </div>
                )}
                {sendStatus === 'error' && (
                  <div className="status-message error" data-aos="fade-up">
                    ❌ Erreur d'envoi. Vérifiez votre connexion ou utilisez WhatsApp.
                  </div>
                )}
                {sendStatus === 'config_error' && (
                  <div className="status-message error" data-aos="fade-up">
                    ⚠️ Configuration manquante. Contactez-nous par WhatsApp.
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button 
                  type="submit" 
                  className={`submit-btn-tech ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  {isSubmitting ? (
                    <>
                      <div className="submit-spinner"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon"><FaPaperPlane /></span>
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-tech">
        <div className="container">
          <div className="faq-header text-center" data-aos="fade-up">
            <h2>Questions fréquentes</h2>
            <p>Trouvez rapidement des réponses à vos questions les plus courantes</p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item-tech"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="faq-question">
                  <div className="question-icon">❓</div>
                  <h4>{faq.question}</h4>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
                <div className="faq-energy"></div>
              </div>
            ))}
          </div>

          {/* CTA supplémentaire */}
          <div className="faq-cta" data-aos="fade-up">
            <div className="faq-cta-content">
              <h3>Vous avez d'autres questions ?</h3>
              <p>N'hésitez pas à nous contacter directement pour toute information supplémentaire</p>
              <div className="faq-cta-actions">
                <button 
                  onClick={() => {
                    const message = "Bonjour, j'ai une question supplémentaire à vous poser.";
                    window.open(`https://api.whatsapp.com/send?phone=221779490685&text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="btn-tech-primary"
                >
                  Nous contacter maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;