import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Smartphone, Play, Github, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import '../App.css';

const logo = "icon.png";
const logoText = "icon_text.png";
const oshikatuIcon = "oshikatuniiki.png";
const emotionIcon = "emotiondiary.png";

const translations = {
  en: {
    products: 'Products',
    mission: 'Mission',
    heroTag: 'Nature x Technology',
    heroTitle: 'Keep Thinking',
    heroDesc: 'Born from silence. Sophisticated digital waves that surprise the world just a little.',
    ecosystem: 'Shivio Collection',
    oshikatuTag: 'Keep your memories shining forever.',
    emotionTag: 'Painting the waves of your heart.',
    ourMission: 'OUR MISSION',
    missionTitle: 'Simple, Minimal, Beautiful.',
    missionDesc: 'We remove the noise of "complexity" and create tools to color the rich moments of life even more vividly.',
    terms: 'Terms',
    privacy: 'Privacy',
  },
  ja: {
    products: 'プロダクト',
    mission: 'ミッション',
    heroTag: 'Nature x Technology',
    heroTitle: 'Keep Thinking',
    heroDesc: '静寂の中から生まれる。世界を少しだけ驚かせる、洗練されたデジタルの波。',
    ecosystem: 'SHIVIO コレクション',
    oshikatuTag: '想い出を、永遠の輝きに。',
    emotionTag: '心の波を、美しく描く。',
    ourMission: '私たちの使命',
    missionTitle: 'Simple, Minimal, Beautiful.',
    missionDesc: '私たちは「複雑さ」というノイズを取り除き、人生の豊かな瞬間をより鮮やかに彩るための道具を作ります。',
    terms: '利用規約',
    privacy: 'プライバシー',
  }
};

const apps = [
  { 
    id: 'oshikatu', 
    name: '推し活日記', 
    taglineKey: 'oshikatuTag',
    iconImage: oshikatuIcon,
    appStoreUrl: 'https://apps.apple.com/jp/app/%E6%8E%A8%E3%81%97%E6%B4%BB%E6%97%A5%E8%A8%98/id6751962585',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ryosuke.oshikatu&hl=en',
    websiteUrl: 'https://smri2170.github.io/Official-Website-of-oshi-diary/'
  },
  { 
    id: 'emotion-diary', 
    name: '感情日記', 
    taglineKey: 'emotionTag',
    iconImage: emotionIcon,
    appStoreUrl: 'https://apps.apple.com/jp/app/emotion-diary-see-the-waves/id6757458952',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=jp.smri.emo0708&hl=en',
    websiteUrl: 'https://smri2170.github.io/Official-Website-of-Emotion-Diary/'
  }
];

const CharacterReveal = ({ text, className, style }: { text: string, className?: string, style?: any }) => {
  const characters = text.split('');
  return (
    <div className={className} style={style} key={text}>
      {characters.map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

function Home() {
  const [lang, setLang] = useState<'en' | 'ja'>('ja');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ja') {
      document.body.style.fontFamily = "'Noto Sans JP', 'Inter', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang]);
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.4], [1, 0.9]);
  const y = useTransform(smoothProgress, [0, 0.4], [0, -100]);
  const orbX = useTransform(smoothProgress, [0, 1], [0, 200]);
  const orbY = useTransform(smoothProgress, [0, 1], [0, -150]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ja' : 'en');

  return (
    <div className="app-container" ref={targetRef}>
      {/* Dynamic Background */}
      <div className="parallax-bg">
        <motion.div 
          className="floating-orb" 
          style={{ 
            width: '800px', 
            height: '800px', 
            top: '-20%', 
            left: '-20%', 
            background: 'var(--pastel-blue)',
            x: orbX,
            y: orbY
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="floating-orb" 
          style={{ 
            width: '600px', 
            height: '600px', 
            bottom: '5%', 
            right: '-10%', 
            background: 'var(--pastel-mint)',
            x: useTransform(smoothProgress, [0, 1], [0, -300]),
            y: useTransform(smoothProgress, [0, 1], [0, 100])
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <nav className="navbar-rich">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="shivio" style={{ borderRadius: '8px', width: '32px', height: '32px' }} />
          <span style={{ fontFamily: 'var(--font-pop)', fontWeight: 700, color: 'var(--navy-deep)', marginLeft: '8px' }}>shivio</span>
        </Link>
        <div className="nav-links-rich">
          {['products', 'mission'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => { e.preventDefault(); document.getElementById(item === 'products' ? 'projects' : 'mission')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="nav-link-item"
              whileHover={{ y: -2, opacity: 1 }}
            >
              {t[item as keyof typeof t]}
            </motion.a>
          ))}
          <motion.button 
            onClick={toggleLang} 
            className="nav-link-item" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            whileHover={{ scale: 1.1 }}
          >
            <Globe size={16} /> {lang === 'en' ? 'JP' : 'EN'}
          </motion.button>
          <motion.a 
            href="https://github.com/ryosuke-404" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link-item"
            whileHover={{ rotate: 15, scale: 1.2 }}
          >
            <Github size={20} />
          </motion.a>
        </div>
      </nav>

      <motion.header className="hero-rich" style={{ opacity, scale, y }}>
        <motion.div 
          className="hero-bg-overlay"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        />
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '32px' }}
            >
              <motion.img 
                src={logoText} 
                alt="shivio logo" 
                className="hero-logo-img"
              />
            </motion.div>
            
            <motion.div 
              className="hero-tag"
              initial={{ opacity: 0, letterSpacing: '16px' }}
              animate={{ opacity: 1, letterSpacing: '4px' }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ color: '#fff', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              {t.heroTag}
            </motion.div>

            <CharacterReveal 
              text={t.heroTitle} 
              className="hero-title-rich" 
              style={{ fontSize: 'clamp(40px, 8vw, 84px)', letterSpacing: '-2px' }}
            />

            <AnimatePresence mode="wait">
              <motion.p 
                key={lang}
                className="hero-desc-rich"
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 0.8, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
                transition={{ duration: 0.8 }}
              >
                {t.heroDesc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ position: 'absolute', bottom: '10%' }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '2px', height: '60px', background: 'linear-gradient(to bottom, var(--light-blue), transparent)' }}
          />
        </motion.div>
      </motion.header>

      <section id="projects" className="app-section-rich">
        <div className="section-header-rich">
          <motion.h2 
            className="section-title-rich"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {t.ecosystem}
          </motion.h2>
        </div>

        <div className="app-grid">
          {apps.map((app, index) => (
            <motion.div 
              key={app.id} 
              className="app-card-luxe"
              initial={{ opacity: 0, y: 100, rotateY: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'contents' }}>
                <motion.img 
                  src={app.iconImage} 
                  className="app-icon-rich" 
                  alt={app.name}
                  loading="lazy"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <h3 style={{ fontFamily: 'var(--font-pop)', fontSize: '36px', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                  {app.name}
                </h3>
              </a>
              <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--navy)', opacity: 0.5, marginBottom: '32px' }}>
                {t[app.taglineKey as keyof typeof t]}
              </p>

              <motion.a 
                href={app.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-store-rich" 
                style={{ width: '100%', marginBottom: '24px', background: 'var(--pastel-blue)', color: 'var(--navy-deep)', border: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={20} /> Official Website
              </motion.a>
              
              <div className="store-links-luxe">
                <motion.a 
                  href={app.appStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-store-rich apple"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(5, 25, 40, 0.3)' }}
                >
                  <Smartphone size={20} /> App Store
                </motion.a>
                <motion.a 
                  href={app.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-store-rich google"
                  whileHover={{ y: -5, background: 'var(--navy-deep)', color: 'white' }}
                >
                  <Play size={20} /> Play Store
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="mission" className="feature-box">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <motion.span 
            initial={{ letterSpacing: '10px', opacity: 0 }}
            whileInView={{ letterSpacing: '4px', opacity: 0.5 }}
            transition={{ duration: 1 }}
            style={{ fontSize: '12px', fontWeight: 800 }}
          >
            {t.ourMission}
          </motion.span>
          <h2 style={{ marginTop: '24px' }}>{t.missionTitle}</h2>
          <AnimatePresence mode="wait">
            <motion.p 
              key={lang}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ fontSize: '20px', maxWidth: '700px', margin: '32px auto 64px', lineHeight: 1.8 }}
            >
              {t.missionDesc}
            </motion.p>
          </AnimatePresence>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
            {[Zap, Globe, ShieldCheck].map((Icon, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                whileHover={{ y: -10, color: 'var(--light-blue)', scale: 1.2 }}
              >
                <Icon size={40} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer>
        <motion.div 
          className="footer-logo-rich"
          whileHover={{ opacity: 1, letterSpacing: '8px' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          shivio.
        </motion.div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '48px' }}>
          {['terms', 'privacy'].map((item) => (
            <Link key={item} to={`/${item}`} className="footer-link">
              {t[item as keyof typeof t]}
            </Link>
          ))}
          <a href="https://x.com/your_account" target="_blank" rel="noopener noreferrer" className="footer-link">
            X (Twitter)
          </a>
        </div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '4px' }}>
          © 2026 SHIVIO COLLECTION
        </p>
      </footer>
    </div>
  );
}

export default Home;
