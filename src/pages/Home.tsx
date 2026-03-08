import { motion } from 'framer-motion';
import { Smartphone, Play, Github, LayoutGrid, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';

const logo = "/icon.png";
const oshikatuIcon = "/oshikatuniiki.png";
const emotionIcon = "/emotiondiary.png";

const apps = [
  { 
    id: 'oshikatu', 
    name: '推し活日記', 
    tagline: '想い出を、美しく残す。',
    iconImage: oshikatuIcon,
    appStoreUrl: 'https://apps.apple.com/jp/app/%E6%8E%A8%E3%81%97%E6%B4%BB%E6%97%A5%E8%A8%98/id6751962585',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ryosuke.oshikatu&hl=en'
  },
  { 
    id: 'emotion-diary', 
    name: '感情日記', 
    tagline: '心の波を、穏やかに。',
    iconImage: emotionIcon,
    appStoreUrl: 'https://apps.apple.com/jp/app/emotion-diary-see-the-waves/id6757458952',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=jp.smri.emo0708&hl=en'
  }
];

const devLinks = {
  apple: 'https://apps.apple.com/jp/developer/ryosuke-yoshioka/id1837726385',
  google: 'https://play.google.com/store/apps/developer?id=Dev+by+Ryosuke&hl=en'
};

function Home() {
  return (
    <div className="app-container">
      <div className="bg-bubbles">
        <motion.div 
          className="bubble" 
          style={{ width: '400px', height: '400px', top: '-50px', left: '-100px' }}
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="bubble" 
          style={{ width: '300px', height: '300px', bottom: '10%', right: '-50px', background: 'var(--pastel-mint)' }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <nav className="navbar-pop">
        <Link to="/" className="logo-pop">
          <img src={logo} alt="shivio" />
          <span>shivio</span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="https://github.com/ryosuke-404" target="_blank" style={{ color: 'var(--navy)' }}>
            <Github size={22} />
          </a>
        </div>
      </nav>

      <header className="hero">
        <motion.div 
          className="hero-visual"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img src={logo} className="hero-img-pop" alt="shivio logo" />
        </motion.div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          shivio.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          琵琶湖のほとりから生まれる、<br/>
          心地よくて、ちょっとわくわくする技術。
        </motion.p>
      </header>

      <main className="section-pop">
        <div className="app-grid">
          {apps.map((app) => (
            <motion.div 
              key={app.id} 
              className="app-card-organic"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={app.iconImage} className="app-icon-large" alt={app.name} />
              <h2 className="app-name-luxe">{app.name}</h2>
              <p className="app-tagline-luxe">{app.tagline}</p>
              
              <div className="store-links-luxe">
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store-pop apple">
                  <Smartphone size={18} /> App Store
                </a>
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store-pop google">
                  <Play size={18} /> Play Store
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '120px', textAlign: 'center' }}>
          <div className="portfolio-header">
            <LayoutGrid size={20} />
            <span>ALL PRODUCTS</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <motion.a 
              href={devLinks.apple} 
              target="_blank" 
              className="btn-store-pop" 
              style={{ width: 'auto', padding: '16px 32px', background: 'var(--white)', border: '1px solid var(--pastel-blue)', color: 'var(--navy)' }}
              whileHover={{ scale: 1.05, background: 'var(--pastel-blue)' }}
            >
              App Store Explorer <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href={devLinks.google} 
              target="_blank" 
              className="btn-store-pop" 
              style={{ width: 'auto', padding: '16px 32px', background: 'var(--white)', border: '1px solid var(--pastel-blue)', color: 'var(--navy)' }}
              whileHover={{ scale: 1.05, background: 'var(--pastel-blue)' }}
            >
              Google Play Portfolio <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </main>

      <section className="cta-pop">
        <h2 style={{ fontFamily: 'var(--font-pop)', fontSize: '42px', color: 'var(--navy)', marginBottom: '24px' }}>
          Simple & Happy.
        </h2>
        <p style={{ color: 'var(--navy-soft)', maxWidth: '600px', margin: '0 auto', fontWeight: 600, fontSize: '20px', opacity: 0.7 }}>
          琵琶湖のほとりから、あなたの日常を少しだけ楽しく、<br/>
          そしてシンプルにするプロダクトを。
        </p>
      </section>

      <footer>
        <div style={{ fontFamily: 'var(--font-pop)', fontSize: '24px', color: 'var(--navy)', opacity: 0.2 }}>shivio.</div>
        <div className="footer-links-luxe" style={{ marginTop: '32px' }}>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
        <p style={{ marginTop: '48px', fontSize: '12px', fontWeight: 800, opacity: 0.2, color: 'var(--navy)', letterSpacing: '1px' }}>
          © 2026 SHIGA IO / SHIVIO BY RYOSUKE YOSHIOKA
        </p>
      </footer>
    </div>
  );
}

export default Home;
