import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Instagram, Phone, Youtube, MessageCircle, Send, Facebook, Twitter, Chrome as Reddit, Globe } from 'lucide-react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const categories = [
  ["Kitchens", "Steel Kitchens", "Wardrobes"],
  ["Sofas", "Functional Sofas", "Accent Chairs", "Pouffe"],
  ["Coffee Tables", "Corner Tables", "Console Tables", "Side Boards"],
  ["Dining Tables", "Dining Chairs"],
  ["Beds", "Bedside Tables", "Rugs", "Lighting", "Decor"]
];

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  React.useEffect(() => {
    const handleClick = () => setDropdownOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      padding: '2rem 5rem', 
      display: 'flex', 
      alignItems: 'center', 
      zIndex: 1000, 
      background: 'rgba(245, 245, 240, 0.8)', 
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s var(--ease-premium)'
    }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.2em', cursor: 'pointer', display: 'flex', gap: '0.4rem', fontWeight: 400 }}>
            <span style={{ color: 'var(--color-obsidian)' }}>THE</span>
            <span style={{ color: 'var(--color-obsidian)', fontWeight: 600 }}>FURNOLOGY</span>
          </div>
        </Link>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '3rem' }}>
        <div 
          className="nav-link" 
          style={{ cursor: 'pointer' }}
          onClick={toggleDropdown}
        >
          Collection
        </div>
        <Link to="/" className="nav-link">Bespoke</Link>
        <Link to="/" className="nav-link">Heritage</Link>
      </div>
      
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              width: '100%',
              background: 'var(--color-bg)',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              padding: '6rem 5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '4rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
              zIndex: 1001
            }}
          >
            {categories.map((col, colIdx) => (
              <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {col.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/catalog/${encodeURIComponent(cat)}`} 
                    className="dropdown-item" 
                    onClick={() => setDropdownOpen(false)} 
                    style={{ 
                      textDecoration: 'none', 
                      color: idx === 0 ? 'var(--color-obsidian)' : 'var(--color-text-muted)', 
                      fontSize: '0.75rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      transition: 'all 0.3s ease',
                      fontWeight: idx === 0 ? 600 : 400
                    }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
        <a href="#" className="nav-link" style={{ fontSize: '0.7rem' }}>Contact</a>
        <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)' }}></div>
        <Instagram size={16} style={{ cursor: 'pointer', color: 'var(--color-obsidian)' }} />
      </div>
    </nav>
  );
};

const WhatsAppFloat = () => (
  <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
    <MessageCircle size={24} />
  </a>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero" style={{ height: '100vh', padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#f5f5f0' }}>
      <motion.div 
        style={{ opacity, y: y1, zIndex: 10, textAlign: 'center', padding: '0 2rem' }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{ letterSpacing: '0.4em', color: 'var(--color-accent)', fontSize: '0.8rem', textTransform: 'uppercase', display: 'block', marginBottom: '2rem' }}
        >
          Established MMXXIV
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', fontWeight: 300, marginBottom: '2rem', fontStyle: 'italic' }}
        >
          The Furnology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ letterSpacing: '0.5em', color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}
        >
          Curation of extraordinary living spaces
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
        >
          <button className="btn-premium" onClick={() => document.getElementById('lookbook').scrollIntoView({ behavior: 'smooth' })}>
            View Collection
          </button>
          <button className="btn-outline">
            Our Story
          </button>
        </motion.div>
      </motion.div>

      <div style={{ position: 'absolute', bottom: '10vh', width: '100%', height: '50vh', zIndex: 5, overflow: 'hidden' }}>
        <motion.img 
          src="/hero-sofa.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          alt="Hero Background"
        />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '40px', color: 'var(--color-obsidian)', cursor: 'pointer', zIndex: 20, opacity: 0.5 }}
        onClick={() => document.getElementById('lookbook').scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};


const Lookbook = () => {
  const categoriesList = [
    { title: "Luxe Leather Sofas", desc: "Hand-tufted, exceptionally crafted living room centerpieces.", img: "/hero-sofa.webp" },
    { title: "Accent Chairs", desc: "Statement pieces designed for comfort and unmistakable presence.", img: "/accent-chair.jpeg" },
    { title: "Coffee & Corner tables", desc: "Sculptural forms in marble and brass that anchor any space.", img: "/coffee-tables.png" },
    { title: "Console Tables", desc: "Elegant entry and hallway statements with premium finishes.", img: "/consoles.jpg" },
    { title: "Side Boards", desc: "Sophisticated storage solutions combining form and function.", img: "/side-board.jpg" },
    { title: "Dining Tables", desc: "Grand surfaces tailored for memorable gatherings.", img: "/dining-table.jpg" },
    { title: "Beds", desc: "Sanctuaries of rest featuring bespoke headboards.", img: "/bed-new.jpg" },
    { title: "Rugs", desc: "Woven artistry that grounds and textures your environment.", img: "/rug-new.jpg" },
    { title: "Lighting", desc: "The finishing touches that illuminate and elevate.", img: "/lighting-new.png" }
  ];

  return (
    <section id="lookbook" style={{ background: '#FFFFFF', padding: '12rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '10rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Collection</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 300 }}>Curated Masterpieces</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        {categoriesList.map((item, i) => {
          const isRight = i % 2 === 0;
          return (
            <div key={i} style={{ 
              display: 'flex', 
              flexDirection: isRight ? 'row' : 'row-reverse', 
              flexWrap: 'wrap', 
              alignItems: 'center',
              gap: '4rem',
              padding: '0 5rem'
            }}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: '1 1 500px', height: '80vh', overflow: 'hidden', background: '#f5f5f0' }}
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={item.img} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
                  alt={item.title} 
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ flex: '1 1 400px', padding: '2rem' }}
              >
                <h4 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.5rem', fontStyle: 'italic' }}>{item.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '400px', marginBottom: '2.5rem' }}>{item.desc}</p>
                <Link to={`/catalog/${encodeURIComponent(item.title)}`} style={{ textDecoration: 'none' }}>
                  <button className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '0.7rem' }}>Discover</button>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const MediaSection = () => {
  return (
    <section id="media" style={{ padding: '10rem 5rem', background: 'var(--color-bg)' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Media</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300 }}>The Art of Living</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3].map(i => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ position: 'relative', paddingBottom: '125%', height: 0, overflow: 'hidden', background: '#e0e0d5' }}
          >
            {/* Using images instead of iframes for a cleaner look as requested by user's preference for existing site images */}
            <img src={i === 1 ? "/hero-sofa.webp" : i === 2 ? "/accent-chair.jpeg" : "/coffee-tables.png"} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Media Thumbnail" />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: '#fff', zIndex: 10 }}>
               <Instagram size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const QandA = () => {
  const faqs = [
    { 
      q: "What is your sourcing philosophy?", 
      a: "We believe in 'Curation over Collection'. Every piece is hand-selected from master artisans across Europe and Asia, focusing on timeless silhouettes and sustainable luxury materials." 
    },
    { 
      q: "How does the bespoke design process work?", 
      a: "Our process begins with a personal consultation to understand your spatial needs. We then collaborate with our partner workshops to customize dimensions, wood finishes, and upholstery fabrics." 
    },
    { 
      q: "What are your quality control best practices?", 
      a: "We maintain a multi-stage inspection process. First, at the artisan's workshop during construction. Second, a pre-shipment evaluation. Finally, a white-glove inspection upon arrival." 
    },
    { 
      q: "What is the typical delivery timeline?", 
      a: "Curated pieces typically arrive within 6-10 weeks. Bespoke commissions, requiring hand-craftsmanship and international logistics, generally take 14-18 weeks." 
    }
  ];

  return (
    <section id="qa" style={{ padding: '10rem 5rem', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Q&A</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '6rem', fontWeight: 300 }}>Standards & Process</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderLeft: '1px solid rgba(0,0,0,0.05)', paddingLeft: '2rem' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--color-obsidian)', marginBottom: '1rem', fontStyle: 'italic' }}>{faq.q}</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Heritage = () => (
  <section id="heritage" style={{ padding: '12rem 5rem', background: 'var(--color-bg)' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ flex: 1.2, minWidth: '350px' }}>
        <h2 style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Heritage</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2.5rem', fontWeight: 300 }}>The Furnology <br /> <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Legacy</span></h3>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', lineHeight: 2, fontSize: '1rem' }}>
          Born from a passion for timeless design, The Furnology bridges the gap between master craftsmanship and modern living spaces. Our journey started in a small atelier, driven by the belief that furniture is not just functional—it is the soul of a home.
        </p>
        <button className="btn-premium">Explore Story</button>
      </div>
      <div style={{ flex: 1, minWidth: '350px' }}>
        <div style={{ position: 'relative', height: '550px', overflow: 'hidden', background: '#e0e0d5' }}>
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="/sofa.png" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
            alt="Heritage" 
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '10rem 5rem', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: 1, minWidth: '350px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Inquire</h2>
            <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '4rem', fontWeight: 300 }}>Begin a <span style={{ fontStyle: 'italic' }}>Conversation</span></h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '500px', margin: '0 auto' }}>
              <input type="text" placeholder="Full Name" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1rem', outline: 'none', fontStyle: 'italic' }} />
              <input type="email" placeholder="Email Address" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1rem', outline: 'none', fontStyle: 'italic' }} />
              <textarea placeholder="Tell us about your project..." rows="3" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1rem', outline: 'none', fontStyle: 'italic', resize: 'none' }}></textarea>
              <button className="btn-premium" style={{ alignSelf: 'center', marginTop: '1rem' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <main style={{ background: 'var(--color-bg)' }}>
      <Hero />
      <Lookbook />
      <MediaSection />
      <QandA />
      <Heritage />
      <Contact />
      <WhatsAppFloat />
    </main>
  );
};

const CatalogPage = () => {
  const { category } = useParams();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '150px', background: 'var(--color-bg)' }}>
      <div style={{ padding: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--color-obsidian)', fontWeight: 300, fontStyle: 'italic' }}>{category}</h1>
        <p style={{ color: 'var(--color-accent)', letterSpacing: '0.4em', textTransform: 'uppercase', marginTop: '1rem', fontSize: '0.7rem' }}>Curated Selections</p>
        
        <div style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', padding: '0 5rem' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ padding: '2rem', background: '#FFFFFF' }}>
              <div style={{ width: '100%', height: '450px', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/sofa.png" style={{ width: '90%', height: '90%', objectFit: 'contain', opacity: 0.8 }} alt="Product" />
              </div>
              <h5 style={{ marginTop: '2rem', color: 'var(--color-obsidian)', fontSize: '1rem', fontStyle: 'italic' }}>Selection #{i}</h5>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', letterSpacing: '0.1em', fontSize: '0.7rem', textTransform: 'uppercase' }}>Bespoke Inquiry</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const socials = [
    { name: "Instagram", icon: <Instagram size={14} />, url: "#" },
    { name: "Whatsapp", icon: <MessageCircle size={14} />, url: "#" },
    { name: "Pinterest", icon: <Globe size={14} />, url: "#" },
    { name: "Youtube", icon: <Youtube size={14} />, url: "#" }
  ];

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:category" element={<CatalogPage />} />
      </Routes>
      <footer style={{ padding: '8rem 4rem', textAlign: 'center', background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginBottom: '4rem' }}>
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              style={{ 
                color: 'var(--color-obsidian)', 
                textDecoration: 'none', 
                fontSize: '0.65rem', 
                letterSpacing: '0.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textTransform: 'uppercase',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <span>{social.name}</span>
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', opacity: 0.4, color: 'var(--color-obsidian)' }}>© 2026 THE FURNOLOGY | LONDON • MILAN • DUBAI</p>
      </footer>
    </div>
  );
}

