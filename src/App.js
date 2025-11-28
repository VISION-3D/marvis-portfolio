import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: false, offset: 100 });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Helmet>
        <title>TaqwaTech – Développement Web & IA</title>
        <meta
          name="description"
          content="TaqwaTech propose des solutions innovantes en développement web, mobile et intelligence artificielle pour entreprises et startups."
        />
        <meta name="keywords" content="développeur web Sénégal, développeur full stack, intelligence artificielle, agence web, création site web, applications web et mobile" />
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TaqwaTech",
            "url": "https://taqwatech.vercel.app/",
            "logo": "https://taqwatech.vercel.app/favicon.ico",
            "sameAs": [
              "https://www.linkedin.com/in/taqwatech",
              "https://twitter.com/taqwatech"
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main style={{ paddingTop: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
