
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bird,
  Cat,
  Check,
  Clock3,
  Dog,
  Heart,
  MapPin,
  Menu,
  Package,
  PawPrint,
  Rabbit,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const categories = [
  { name: "Kedi Ürünleri", detail: "Minik patilere özel", icon: Cat, color: "peach" },
  { name: "Köpek Ürünleri", detail: "Sadık dostlarımıza", icon: Dog, color: "sage" },
  { name: "Kuş Ürünleri", detail: "Renkli arkadaşlara", icon: Bird, color: "butter" },
  { name: "Küçük Dostlar", detail: "Her cana sevgiyle", icon: Rabbit, color: "lavender" },
];

const products = [
  {
    name: "Premium Kedi Maması",
    category: "KEDİ BESLENME",
    price: "₺420",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Eğlenceli Oyun Topu",
    category: "OYUNCAK & AKSESUAR",
    price: "₺190",
    image:
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Konforlu Dost Yatağı",
    category: "YAŞAM & KONFOR",
    price: "₺690",
    image:
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const openDemo = () => {
    setMenuOpen(false);
    setDemoOpen(true);
  };

  useEffect(() => {
    if (!demoOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDemoOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [demoOpen]);

  return (
    <main>
      {/* DUYURU ÇUBUĞU */}
      <div className="announcement">
        <Heart size={14} fill="currentColor" />
        Küçük dostlarımız için kocaman sevgi!
        <Heart size={14} fill="currentColor" />
      </div>

      {/* NAVBAR */}
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#anasayfa" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <PawPrint size={26} fill="currentColor" />
            </span>
            <span>
              PATİ<span>PETSHOP</span>
              <small>SEVGİYLE, HER PATİYE.</small>
            </span>
          </a>

          <nav className={`navigation ${menuOpen ? "nav-open" : ""}`}>
            <a href="#anasayfa" onClick={closeMenu}>Ana Sayfa</a>
            <a href="#hakkimizda" onClick={closeMenu}>Hakkımızda</a>
            <a href="#kategoriler" onClick={closeMenu}>Kategoriler</a>
            <a href="#urunler" onClick={closeMenu}>Ürünler</a>
            <a href="#iletisim" onClick={closeMenu}>İletişim</a>
          </nav>

          <button className="nav-cta" onClick={openDemo} type="button">
            <ShoppingBag size={17} />
            Alışverişe Başla
            <ArrowUpRight size={16} />
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="anasayfa">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">
              <Sparkles size={16} />
              MUTLU PATİLERİN ADRESİ
            </span>

            <h1>
              ONLARIN
              <br />
              MUTLULUĞU,
              <br />
              <em>BİZİM DÜNYAMIZ.</em>
            </h1>

            <p>
              Minik dostlarımızın sağlığı, konforu ve mutluluğu
              için özenle seçilmiş ürünler. Çünkü onlar sadece
              evcil hayvan değil, ailemizin bir parçası.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#urunler">
                ÜRÜNLERİ KEŞFET
                <ArrowUpRight size={19} />
              </a>
              <a className="btn btn-outline" href="#hakkimizda">
                BİZİ TANIYIN
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-trust">
              <span><Check size={16} /> Özenle seçilmiş ürünler</span>
              <span><Check size={16} /> Dostlarımız için sevgiyle</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=90"
                alt="Mutlu bir köpek"
              />
            </div>

            <div className="hero-floating">
              <span className="floating-icon"><Heart fill="currentColor" size={21} /></span>
              <div>
                <strong>Bir pati, bin mutluluk!</strong>
                <small>Her dostumuz çok özel.</small>
              </div>
            </div>

            <span className="hero-decoration"><PawPrint size={44} /></span>
          </motion.div>
        </div>
      </section>

      {/* AVANTAJ ŞERİDİ */}
      <section className="benefits">
        <div className="container benefits-grid">
          <div><Heart size={24} /><span>SEVGİYLE SEÇİLEN ÜRÜNLER</span></div>
          <div><ShieldCheck size={24} /><span>ÖZENLİ ÜRÜN SEÇİMİ</span></div>
          <div><Truck size={24} /><span>ALIŞVERİŞ KOLAYLIĞI</span></div>
          <div><PawPrint size={24} /><span>HER DOSTA ÖZEL</span></div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="about-section section-pad" id="hakkimizda">
        <div className="container about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=85"
              alt="Dinlenen sevimli bir kedi"
            />
            <div className="about-sticker">
              <PawPrint size={26} />
              <span>HER PATİYE<br />KOCAMAN SEVGİ</span>
            </div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">BİZ KİMİZ?</span>
            <h2>
              BİR PETSHOP'TAN
              <br />
              <em>ÇOK DAHA FAZLASI.</em>
            </h2>

            <p>
              Pati Petshop, hayvan dostlarımızın günlük yaşamını
              daha sağlıklı, keyifli ve konforlu hale getirme
              düşüncesiyle tasarlanmış bir mağaza deneyimidir.
              Her canlının kendine özgü ihtiyaçları olduğuna
              inanıyoruz.
            </p>

            <p>
              Beslenmeden oyuncağa, bakımdan yaşam alanlarına
              kadar uzanan ürün çeşitliliğimizle dostlarımızın
              her anına eşlik etmeyi amaçlıyoruz. Bizim için
              önemli olan yalnızca ürün sunmak değil, patili
              dostlarımızla kurulan bağı güçlendirmek.
            </p>

            <a href="#kategoriler" className="text-arrow">
              KATEGORİLERİ KEŞFEDİN
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="categories-section section-pad" id="kategoriler">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">HER DOSTA ÖZEL</span>
              <h2>SEVGİ DOLU <em>KATEGORİLER.</em></h2>
            </div>
            <p>Her patinin ihtiyacına uygun bir dünya.</p>
          </div>

          <div className="categories-grid">
            {categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={openDemo}
                  className={`category-card ${item.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Icon className="category-icon" size={57} strokeWidth={1.5} />
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                  <span className="category-arrow"><ArrowUpRight size={20} /></span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="products-section section-pad" id="urunler">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">PATİ DOSTLARIMIZ İÇİN</span>
              <h2>ÖNE ÇIKAN <em>ÜRÜNLER.</em></h2>
            </div>
            <p>Sevgiyle hazırlanmış örnek ürün seçkisi.</p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                className="product-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">ÖRNEK ÜRÜN</span>
                </div>
                <div className="product-info">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <strong>{product.price}</strong>
                    <button
                      type="button"
                      onClick={openDemo}
                      aria-label={`${product.name} ürününü incele`}
                    >
                      <ShoppingBag size={19} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="demo-note">
            * Ürünler, görseller ve fiyatlar tanıtım amaçlıdır.
            Gerçek bir satış veya sipariş işlemi yapılmaz.
          </p>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section className="contact-section section-pad" id="iletisim">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="section-label">BİZE UĞRAYIN</span>
            <h2>
              PATİ DOSTLARINIZ
              <br />
              <em>İÇİN BURADAYIZ.</em>
            </h2>
            <p>
              Dostlarımızın ihtiyaçları hakkında bilgi almak
              ve ürünleri keşfetmek için mağazamızı ziyaret edin.
              Bu alan örnek bir işletme deneyimini göstermektedir.
            </p>
            <button className="btn btn-primary" type="button" onClick={openDemo}>
              İLETİŞİME GEÇ
              <ArrowUpRight size={19} />
            </button>
          </div>

          <div className="hours-card">
            <div className="hours-title">
              <Clock3 size={23} />
              <h3>ÇALIŞMA SAATLERİ</h3>
            </div>
            <div className="hours-row">
              <span>Pazartesi – Cumartesi</span>
              <strong>09.00 – 20.00</strong>
            </div>
            <div className="hours-row">
              <span>Pazar</span>
              <strong>10.00 – 17.00</strong>
            </div>
            <div className="hours-location">
              <MapPin size={18} />
              Örnek Konum, Türkiye
            </div>
            <small>* Konum ve çalışma saatleri örnektir.</small>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#anasayfa" className="brand">
              <span className="brand-icon"><PawPrint size={26} /></span>
              <span>PATİ<span>PETSHOP</span></span>
            </a>
            <p>
              Her patinin bir hikâyesi, her dostluğun
              ayrı bir güzelliği var.
            </p>
            <small>
              TYGenerate tarafından hazırlanmış örnek petshop web sitesi.
            </small>
          </div>

          <div className="footer-links">
            <h4>KEŞFET</h4>
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#kategoriler">Kategoriler</a>
            <a href="#urunler">Ürünler</a>
            <a href="#iletisim">İletişim</a>
          </div>

          <div className="footer-links">
            <h4>İLETİŞİM</h4>
            <span><MapPin size={16} /> Örnek Konum, Türkiye</span>
            <span><Clock3 size={16} /> Örnek çalışma saatleri</span>
            <a
              href="https://instagram.com/tygenerate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} /> TYGenerate Instagram
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Pati Petshop — Demo Web Sitesi</span>
          <span>DESIGNED BY <strong>TYGENERATE</strong></span>
        </div>
      </footer>

      {/* DEMO BİLGİLENDİRME */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              className="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, y: 25, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setDemoOpen(false)}
                aria-label="Pencereyi kapat"
              >
                <X size={22} />
              </button>

              <div className="modal-icon"><PawPrint size={35} /></div>
              <span className="section-label">TYGENERATE DEMO PROJESİ</span>
              <h2 id="modal-title">BU BİR <em>DEMO</em> SİTEDİR.</h2>
              <p>
                Pati Petshop, TYGenerate tarafından hazırlanmış
                örnek bir web sitesi tasarımıdır.
              </p>
              <p>
                Ürünler, fiyatlar, alışveriş ve iletişim özellikleri
                tanıtım amaçlıdır. Gerçek bir işletme için bu
                özellikler ihtiyaca göre geliştirilebilir.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setDemoOpen(false)}
              >
                ANLADIM <ArrowRight size={18} />
              </button>
              <small>DESIGNED BY <strong>TYGENERATE</strong></small>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
