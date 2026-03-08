import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Play, Github, ArrowUpRight, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../App.css';

const logo = `${import.meta.env.BASE_URL}icon.png`;
const oshikatuIcon = `${import.meta.env.BASE_URL}oshikatuniiki.png`;
const emotionIcon = `${import.meta.env.BASE_URL}emotiondiary.png`;

const apps = [
  { 
    id: 'oshikatu', 
    name: '推し活日記', 
    tagline: '想い出を、永遠の輝きに。',
    iconImage: oshikatuIcon,
    appStoreUrl: 'https://apps.apple.com/jp/app/%E6%8E%A8%E3%81%97%E6%B4%BB%E6%97%A5%E8%A8%98/id6751962585',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ryosuke.oshikatu&hl=en'
  },
  { 
    id: 'emotion-diary', 
    name: '感情日記', 
    tagline: '心の波を、美しく描く。',
    iconImage: emotionIcon,
    appStoreUrl: 'https://apps.apple.com/jp/app/emotion-diary-see-the-waves/id6757458952',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=jp.smri.emo0708&hl=en'
  }
];

function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="app-container" ref={targetRef}>
      {/* Dynamic Background */}
      <div className="parallax-bg">
        <motion.div 
          className="floating-orb" 
          style={{ width: '600px', height: '600px', top: '-10%', left: '-10%', background: 'var(--pastel-blue)' }}
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="floating-orb" 
          style={{ width: '500px', height: '500px', bottom: '10%', right: '-5%', background: 'var(--pastel-mint)' }}
          animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <nav className="navbar-rich">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="shivio" style={{ borderRadius: '8px', width: '32px', height: '32px' }} />
          <span style={{ fontFamily: 'var(--font-pop)', fontWeight: 700, color: 'var(--navy-deep)', marginLeft: '8px' }}>shivio</span>
        </Link>
        <div className="nav-links-rich">
          <a href="#projects" className="nav-link-item">Products</a>
          <a href="#mission" className="nav-link-item">Mission</a>
          <a href="https://github.com/ryosuke-404" target="_blank" rel="noopener noreferrer" className="nav-link-item"><Github size={20} /></a>
        </div>
      </nav>

      <motion.header className="hero-rich" style={{ opacity, scale, y }}>
        <div className="hero-tag">Nature x Technology</div>
        <motion.h1 
          className="hero-title-rich"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Beyond<br/>Excellence.
        </motion.h1>
        <motion.p 
          className="hero-desc-rich"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          琵琶湖のほとり、静寂の中から生まれる。<br/>
          世界を少しだけ驚かせる、洗練されたデジタルの波。
        </motion.p>
      </motion.header>

      <section id="projects" className="app-section-rich">
        <div className="section-header-rich">
          <motion.h2 
            className="section-title-rich"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Ecosystem
          </motion.h2>
        </div>

        <div className="app-grid">
          {apps.map((app, index) => (
            <motion.div 
              key={app.id} 
              className="app-card-luxe"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <motion.img 
                src={app.iconImage} 
                className="app-icon-rich" 
                alt={app.name}
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              />
              <h3 style={{ fontFamily: 'var(--font-pop)', fontSize: '36px', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                {app.name}
              </h3>
              <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--navy)', opacity: 0.5, marginBottom: '56px' }}>
                {app.tagline}
              </p>
              
              <div className="store-links-luxe">
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store-rich apple">
                  <Smartphone size={20} /> App Store
                </a>
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store-rich google">
                  <Play size={20} /> Play Store
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="mission" className="feature-box">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '4px', opacity: 0.5 }}>OUR MISSION</span>
          <h2 style={{ marginTop: '24px' }}>Simple, Minimal, Beautiful.</h2>
          <p style={{ fontSize: '20px', maxWidth: '700px', margin: '32px auto 64px', opacity: 0.7, lineHeight: 1.8 }}>
            私たちは「複雑さ」というノイズを取り除き、<br/>
            人生の豊かな瞬間をより鮮やかに彩るための道具を作ります。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
            <motion.div whileHover={{ y: -10, color: 'var(--light-blue)' }}><Zap size={40} /></motion.div>
            <motion.div whileHover={{ y: -10, color: 'var(--aqua)' }}><Globe size={40} /></motion.div>
            <motion.div whileHover={{ y: -10, color: 'var(--light-blue)' }}><ShieldCheck size={40} /></motion.div>
          </div>
        </motion.div>
      </section>

      <footer>
        <div className="footer-logo-rich">shivio.</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '48px' }}>
          <Link to="/terms" style={{ color: 'var(--navy-deep)', textDecoration: 'none', fontWeight: 700, fontSize: '14px', opacity: 0.6 }}>Terms</Link>
          <Link to="/privacy" style={{ color: 'var(--navy-deep)', textDecoration: 'none', fontWeight: 700, fontSize: '14px', opacity: 0.6 }}>Privacy</Link>
        </div>
        <p style={{ fontSize: '12px', fontWeight: 800, color: 'var(--navy-deep)', opacity: 0.2, letterSpacing: '4px' }}>
          © 2026 SHIGA IO / SHIVIO COLLECTION
        </p>
      </footer>
    </div>
  );
}

export default Home;
