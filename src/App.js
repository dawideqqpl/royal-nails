import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showInfoBar, setShowInfoBar] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      category: "Manicure",
      items: [
        { name: "Manicure hybrydowy - założenie", price: "145 zł", duration: "1g", icon: "💅" },
        { name: "Manicure hybrydowy - uzupełnienie", price: "140 zł", duration: "1g", icon: "✨" },
        { name: "Manicure męski", price: "100 zł", duration: "45min", icon: "🤵" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: "180 zł", duration: "2g", icon: "💎" },
        { name: "Żel na naturalną płytkę (krótkie)", price: "150 zł", duration: "1g 30min", icon: "🌟" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: "190 zł", duration: "2g", icon: "🔄" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure podologiczny", price: "190 zł", duration: "1g 30min", icon: "🦶" },
        { name: "Pedicure hybrydowy", price: "160 zł", duration: "1g 30min", icon: "💖" },
        { name: "Pedicure męski", price: "150 zł", duration: "1g", icon: "👨" }
      ]
    },
    {
      category: "Podologia",
      items: [
        { name: "Opracowanie pękających pięt", price: "100 zł", duration: "1g", icon: "🩹" },
        { name: "Opracowanie paznokci zmienionych chorobowo", price: "110 zł", duration: "45min", icon: "⚕️" },
        { name: "Rekonstrukcja paznokcia", price: "50 zł", duration: "30min", icon: "🔧" }
      ]
    }
  ];

  return (
    <div className="App">
      {showInfoBar && (
        <div className="info-bar">
          <div className="info-bar__content">
            <span className="info-bar__text">
              To jest propozycja strony. Wszystkie zdjęcia, treści i design mogą zostać zmienione zgodnie z Twoimi preferencjami. Kontakt: dawidzielinski.programmer@gmail.com
            </span>
            <button className="info-bar__close" onClick={() => setShowInfoBar(false)}>
              ×
            </button>
          </div>
        </div>
      )}

      <nav className={`navbar ${!showInfoBar ? 'navbar--top' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src="/logo.png" alt="Royal Nails Logo" />
            <span>Royal Nails</span>
          </div>
          <div className="navbar__menu">
            <a href="#hero" onClick={() => smoothScrollTo('hero')}>Start</a>
            <a href="#about" onClick={() => smoothScrollTo('about')}>O nas</a>
            <a href="#services" onClick={() => smoothScrollTo('services')}>Usługi</a>
            <a href="#gallery" onClick={() => smoothScrollTo('gallery')}>Galeria</a>
            <a href="#contact" onClick={() => smoothScrollTo('contact')}>Kontakt</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero__background">
          <div><img src="/img/image_8.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
        </div>
        <div className="hero__content" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <h1 className="hero__title">Royal Nails</h1>
          <p className="hero__subtitle">Studio Paznokci i Urody</p>
          <p className="hero__description">
            Profesjonalne usługi manicure, pedicure i podologii w sercu Katowic
          </p>
          <div className="hero__buttons">
            <button className="btn btn--primary" onClick={() => smoothScrollTo('services')}>
              Nasze Usługi
            </button>
            <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn--secondary">
              Umów wizytę
            </a>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="scroll-down"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about__content">
            <div className="about__text">
              <h2 className="section__title">O Royal Nails</h2>
              <p className="about__description">
                Jesteśmy profesjonalnym studio paznokci i urody z wieloletnim doświadczeniem. 
                Specjalizujemy się w stylizacji paznokci, pedicure oraz zabiegach podologicznych. 
                Nasze usługi obejmują zarówno klasyczne, jak i nowoczesne techniki pielęgnacji paznokci.
              </p>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">💎</div>
                  <h3>Wysoka jakość</h3>
                  <p>Używamy tylko najlepszych produktów i materiałów</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">🏆</div>
                  <h3>Doświadczenie</h3>
                  <p>Lata praktyki w branży nail art i podologii</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">🌟</div>
                  <h3>Indywidualne podejście</h3>
                  <p>Każdy klient otrzymuje spersonalizowaną opiekę</p>
                </div>
              </div>
            </div>
            <div className="about__image">
              <div><img src="/img/image_7.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section__title">Nasze Usługi</h2>
          <p className="section__subtitle">Kompleksowa pielęgnacja i stylizacja paznokci</p>
          
          <div className="services__grid">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="service-category">
                <h3 className="service-category__title">{category.category}</h3>
                <div className="service-category__items">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item">
                      <div className="service-item__icon">{service.icon}</div>
                      <div className="service-item__content">
                        <h4 className="service-item__name">{service.name}</h4>
                        <div className="service-item__details">
                          <span className="service-item__price">{service.price}</span>
                          <span className="service-item__duration">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="services__cta">
            <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn--primary btn--large">
              Zarezerwuj termin online
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section__title">Nasze Prace</h2>
          <p className="section__subtitle">Zobacz efekty naszych stylizacji</p>
          
          <div className="gallery__grid">
            <div className="gallery__item gallery__item--large">
              <div><img src="/img/image_6.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item">
              <div><img src="/img/image_5.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item">
              <div><img src="/img/image_4.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item">
              <div><img src="/img/image_3.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item gallery__item--wide">
              <div><img src="/img/image_2.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__info">
              <h2 className="section__title">Kontakt</h2>
              <div className="contact__details">
                <div className="contact__item">
                  <div className="contact__icon">📍</div>
                  <div>
                    <h3>Adres</h3>
                    <p>1 Maja 15<br />40-224 Katowice</p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">📞</div>
                  <div>
                    <h3>Telefon</h3>
                    <p><a href="tel:732676016">732 676 016</a></p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">🕒</div>
                  <div>
                    <h3>Godziny otwarcia</h3>
                    <div className="opening-hours">
                      <p><strong>Poniedziałek - Piątek:</strong> 08:00 - 17:00</p>
                      <p><strong>Sobota:</strong> 08:00 - 14:00</p>
                      <p><strong>Niedziela:</strong> Zamknięte</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="contact__map">
              <div><img src="/img/image_1.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">
              <img src="/logo.png" alt="Royal Nails Logo" />
              <span>Royal Nails</span>
            </div>
            <div className="footer__links">
              <a href="#hero" onClick={() => smoothScrollTo('hero')}>Start</a>
              <a href="#about" onClick={() => smoothScrollTo('about')}>O nas</a>
              <a href="#services" onClick={() => smoothScrollTo('services')}>Usługi</a>
              <a href="#contact" onClick={() => smoothScrollTo('contact')}>Kontakt</a>
            </div>
            <div className="footer__booking">
              <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn--primary">
                Zarezerwuj przez Booksy
              </a>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2024 Royal Nails Studio Paznokci i Urody. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;