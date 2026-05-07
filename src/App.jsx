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
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '1.5rem 5rem', display: 'flex', alignItems: 'center', zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.3em', cursor: 'pointer', display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: '#FFFFFF' }}>THE</span>
            <span style={{ color: 'var(--color-accent)' }}>FURNOLOGY</span>
          </div>
        </Link>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', fontSize: '0.85rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
        <div 
          className="nav-link" 
          style={{ cursor: 'pointer', color: 'var(--color-text)' }}
          onClick={toggleDropdown}
        >
          Collection
        </div>
      </div>
      
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '90px',
              left: '50%',
              background: 'rgba(10, 10, 10, 0.99)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(201,169,110,0.2)',
              padding: '5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              width: 'min(98vw, 1400px)',
              gap: '4rem',
              boxShadow: '0 50px 100px rgba(0,0,0,0.95)',
              zIndex: 1001,
              borderRadius: '2px'
            }}
          >
            {categories.map((col, colIdx) => (
              <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {col.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/catalog/${encodeURIComponent(cat)}`} 
                    className="dropdown-item" 
                    onClick={() => setDropdownOpen(false)} 
                    style={{ 
                      textDecoration: 'none', 
                      color: 'var(--color-text-muted)', 
                      fontSize: '0.8rem', 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase', 
                      whiteSpace: 'nowrap', 
                      transition: 'all 0.3s ease',
                      fontWeight: cat.includes('Tables') || cat.includes('Kitchens') || cat === 'Sofas' || cat === 'Beds' || cat === 'Rugs' ? '700' : '400'
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
        <a href="#" className="social-icon" style={{ color: 'var(--color-accent)' }}><Instagram size={18} /></a>
        <a href="#" className="social-icon" style={{ color: 'var(--color-accent)' }}><Youtube size={22} /></a>
        <a href="#" className="social-icon" style={{ color: 'var(--color-accent)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

const WhatsAppFloat = () => (
  <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="whatsapp-float" style={{ 
    position: 'fixed', 
    bottom: '40px', 
    right: '40px', 
    background: 'var(--color-bg)', 
    color: 'var(--color-accent)', 
    width: '60px', 
    height: '60px', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    zIndex: 2000, 
    border: '1px solid var(--color-accent)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
  }}
  onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-bg)'}}
  onMouseLeave={(e) => {e.currentTarget.style.background = 'var(--color-bg)'; e.currentTarget.style.color = 'var(--color-accent)'}}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.062c-3.414 0-6.193 2.774-6.193 6.183 0 1.258.38 2.428 1.026 3.407l-.658 2.406 2.473-.647c.942.534 2.022.843 3.176.843 3.414 0 6.194-2.774 6.194-6.183 0-3.409-2.78-6.183-6.194-6.183zm3.435 8.76c-.147.414-.716.757-1.157.808-.344.039-.79.055-1.284-.105-.308-.099-.68-.242-1.12-.433-1.87-.805-3.08-2.72-3.174-2.844-.093-.125-.76-.998-.76-1.903 0-.905.474-1.35.643-1.542.169-.192.373-.24.498-.24.125 0 .25.002.358.006.113.004.266-.042.417.321.156.374.536 1.306.583 1.402.047.096.078.208.014.337-.064.128-.096.208-.192.321-.096.112-.204.25-.292.336-.101.096-.208.201-.09.404.118.203.524.862 1.127 1.398.777.69 1.43.905 1.634 1.006.203.101.323.084.444-.055.121-.139.521-.606.66-.814.14-.208.28-.176.47-.107.191.069 1.21.57 1.417.674.208.105.347.157.397.243.05.086.05.5-.097.914z"/>
    </svg>
  </a>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        style={{ y: y1, position: 'absolute', fontSize: '12vw', fontFamily: 'var(--font-display)', color: 'rgba(245, 237, 214, 0.02)', whiteSpace: 'nowrap', zIndex: 0, pointerEvents: 'none' }}
      >
        EXQUISITE CRAFTSMANSHIP
      </motion.div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem', marginTop: '18vh' }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ letterSpacing: '0.5em', color: 'var(--color-accent)', fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Premier Furniture Sourcing Partner
        </motion.p>
        
        <div style={{ height: '1px', width: '100px', background: 'var(--color-accent)', margin: '0 auto 2rem', opacity: 0.5 }}></div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.5rem' }}
        >
          <span style={{ color: '#FFFFFF' }}>The</span> <span style={{ color: 'var(--color-accent)' }}>Furnology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ letterSpacing: '0.6em', color: 'var(--color-text-muted)', fontSize: 'clamp(0.8rem, 2vw, 1rem)', textTransform: 'uppercase', marginBottom: '4rem' }}
        >
          SCIENCE OF BEAUTIFUL LIVING
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <button className="btn-premium" onClick={() => document.getElementById('lookbook').scrollIntoView({ behavior: 'smooth' })}>
            Explore Collection
          </button>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <motion.img 
          src="/hero-sofa.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.5, duration: 2.5, ease: "easeOut" }}
          alt="Black Sofa Hero"
        />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '40px', color: 'var(--color-accent)', cursor: 'pointer', zIndex: 20 }}
        onClick={() => document.getElementById('lookbook').scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
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
    <section id="lookbook" style={{ background: '#0a0a0a', padding: '10rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '8rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Lookbook</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'var(--font-display)' }}>Curated Categories</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {categoriesList.map((item, i) => {
          const isRight = i % 2 === 0;
          return (
            <div key={i} style={{ display: 'flex', flexDirection: isRight ? 'row' : 'row-reverse', flexWrap: 'wrap', minHeight: '70vh', alignItems: 'center' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ flex: '1 1 500px', height: '70vh', overflow: 'hidden' }}
              >
                <motion.img 
                  whileInView={{ scale: 1.15 }}
                  transition={{ duration: 4, ease: "linear" }}
                  src={item.img} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  alt={item.title} 
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ flex: '1 1 500px', padding: 'clamp(2rem, 5vw, 8rem)' }}
              >
                <h4 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', color: 'var(--color-text)' }}>{item.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '500px' }}>{item.desc}</p>
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
    <section id="media" style={{ padding: '10rem 5rem', background: '#080808' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Media</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-display)' }}>Inside Furnology</h3>
      </div>

      {/* YouTube Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '6rem' }}>
        {[1, 2, 3].map(i => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '2px', border: '1px solid rgba(201,169,110,0.1)' }}
          >
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0`} 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>

      {/* Instagram Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {[1, 2, 3].map(i => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ height: '500px', borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.1)' }}
          >
             <iframe 
               src="https://www.instagram.com/p/C_m_Z_xS_x_/?utm_source=ig_embed&amp;utm_campaign=loading" 
               style={{ width: '100%', height: '100%', border: 'none' }}
               scrolling="no" 
               allowTransparency="true" 
               allow="encrypted-media"
             ></iframe>
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
      a: "We believe in 'Curation over Collection'. Every piece is hand-selected from master artisans across Europe and Asia, focusing on timeless silhouettes, structural integrity, and sustainable luxury materials." 
    },
    { 
      q: "How does the bespoke design process work?", 
      a: "Our process begins with a personal consultation to understand your spatial needs and aesthetic vision. We then collaborate with our partner workshops to customize dimensions, wood finishes, upholstery fabrics, and hardware, providing detailed renders and material samples for your approval." 
    },
    { 
      q: "What are your quality control best practices?", 
      a: "We maintain a multi-stage inspection process. First, at the artisan's workshop during construction. Second, a pre-shipment evaluation. Finally, a white-glove inspection upon arrival in our distribution center. We verify grain matching, joint stability, and finish consistency to ensure every piece meets our 'Extraordinary Standard'." 
    },
    { 
      q: "What is the typical delivery timeline?", 
      a: "Curated pieces from our active collection typically arrive within 6-10 weeks. Bespoke commissions, requiring hand-craftsmanship and international logistics, generally take 14-18 weeks. We provide real-time tracking updates throughout the journey." 
    },
    { 
      q: "How do you ensure sustainable practices?", 
      a: "We prioritize workshops that use FSC-certified hardwoods, low-VOC finishes, and ethically sourced leathers. By focusing on heirloom quality, we aim to reduce the environmental impact of 'disposable furniture' by providing pieces that last generations." 
    }
  ];

  return (
    <section id="qa" style={{ padding: '10rem 5rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Q&A</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '5rem', fontFamily: 'var(--font-display)' }}>Our Process & Standards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem 8rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderLeft: '1px solid var(--color-accent-muted)', paddingLeft: '2.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '1.5rem', letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>{faq.q}</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '1.1rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Heritage = () => (
  <section id="heritage" style={{ padding: '10rem 5rem', background: '#080808' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ flex: 1.5, minWidth: '350px' }}>
        <h2 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Legacy</h2>
        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '2.5rem', fontFamily: 'var(--font-display)' }}>The Furnology <br /> <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Heritage</span></h3>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', lineHeight: 2, fontSize: '1.2rem' }}>
          Born from a passion for timeless design, The Furnology bridges the gap between master craftsmanship and modern living spaces. Our journey started in a small atelier, driven by the belief that furniture is not just functional—it is the soul of a home. Today, we continue that tradition by partnering with world-class artisans to bring you curated masterpieces that define extraordinary living.
        </p>
        <button className="btn-premium">Read Our Story</button>
      </div>
      <div style={{ flex: 1, minWidth: '350px' }}>
        <div style={{ position: 'relative', height: '600px', overflow: 'hidden', borderRadius: '2px' }}>
          <motion.img 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/sofa.png" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} 
            alt="Heritage Craftsmanship" 
          />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--color-accent-muted)', margin: '1.5rem', pointerEvents: 'none' }}></div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '10rem 5rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8rem', flexWrap: 'wrap' }}>
          {/* Left Side: Text and Contact Info */}
          <div style={{ flex: 1, minWidth: '400px' }}>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--color-accent)', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Inquire</h2>
            <h3 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '4rem', fontFamily: 'var(--font-display)' }}>Let's Build Something <br /> <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Beautiful</span></h3>
            
            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <Mail size={24} color="var(--color-accent)" />
                  <div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Email Us</p>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>concierge@furnology.co</p>
                  </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <Phone size={24} color="var(--color-accent)" />
                  <div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Call Us</p>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>+1 234 567 890</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div style={{ flex: 1, minWidth: '400px', background: '#0d0d0d', padding: '4rem', border: '1px solid rgba(201,169,110,0.1)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>Name *</label>
                <input type="text" required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)', padding: '1rem 0', color: 'var(--color-text)', fontSize: '1.1rem', outline: 'none' }} placeholder="Your Full Name" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>Phone Number *</label>
                <input type="tel" required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)', padding: '1rem 0', color: 'var(--color-text)', fontSize: '1.1rem', outline: 'none' }} placeholder="+1 234 567 890" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Email ID (Optional)</label>
                <input type="email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)', padding: '1rem 0', color: 'var(--color-text)', fontSize: '1.1rem', outline: 'none' }} placeholder="concierge@furnology.co" />
              </div>
              <button className="btn-premium" style={{ marginTop: '2rem', width: '100%' }}>Send Inquiry</button>
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
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>{category}</h1>
        <p style={{ color: 'var(--color-accent)', letterSpacing: '0.5em', textTransform: 'uppercase', marginTop: '1rem' }}>Catalog coming soon</p>
        
        <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', padding: '0 5rem' }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{ border: '1px solid rgba(201,169,110,0.1)', padding: '2rem', background: '#0d0d0d' }}>
              <div style={{ width: '100%', height: '400px', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/sofa.png" style={{ width: '80%', height: '80%', objectFit: 'contain', opacity: 0.8 }} alt="Placeholder" />
              </div>
              <h5 style={{ marginTop: '2rem', color: 'var(--color-text)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>{category} Collection Piece #{i}</h5>
              <p style={{ color: 'var(--color-accent)', marginTop: '0.5rem', letterSpacing: '0.1em' }}>INQUIRE FOR BESPOKE DETAILS</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const socials = [
    { name: "Facebook", icon: <Facebook size={18} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "#" },
    { name: "Whatsapp", icon: <MessageCircle size={18} />, url: "#" },
    { name: "WeChat", icon: <Globe size={18} />, url: "#" },
    { name: "Pinterest", icon: <Globe size={18} />, url: "#" },
    { name: "Youtube", icon: <Youtube size={18} />, url: "#" },
    { name: "X", icon: <Twitter size={18} />, url: "#" },
    { name: "Reddit", icon: <Reddit size={18} />, url: "#" }
  ];

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:category" element={<CatalogPage />} />
      </Routes>
      <footer style={{ padding: '6rem 4rem', textAlign: 'center', color: 'var(--color-text-muted)', background: '#000', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              style={{ 
                color: 'var(--color-accent)', 
                textDecoration: 'none', 
                fontSize: '0.8rem', 
                letterSpacing: '0.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              className="footer-social-link"
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', opacity: 0.5 }}>© 2026 THE FURNOLOGY | DESIGNED FOR THE EXTRAORDINARY</p>
      </footer>
    </div>
  );
}
