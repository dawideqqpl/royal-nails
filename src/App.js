import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const services = [
    {
      category: "Manicure",
      icon: "💅",
      items: [
        { name: "Manicure hybrydowy - założenie", price: "145,00 zł", duration: "1g" },
        { name: "Manicure hybrydowy - uzupełnienie", price: "140,00 zł", duration: "1g" },
        { name: "Manicure hybrydowy po innej stylistce", price: "150,00 zł", duration: "1g 15min" },
        { name: "Manicure męski", price: "100,00 zł", duration: "45min" }
      ]
    },
    {
      category: "Pedicure",
      icon: "🦶",
      items: [
        { name: "Pedicure podologiczny", price: "190,00 zł", duration: "1g 30min" },
        { name: "Pedicure podologiczny z hybrydą", price: "240,00 zł", duration: "1g 45min" },
        { name: "Pedicure hybrydowy", price: "160,00 zł", duration: "1g 30min" },
        { name: "Pedicure żelowy", price: "160,00 zł", duration: "1g 30min" },
        { name: "Pedicure bez malowania", price: "140,00 zł", duration: "45min" },
        { name: "Pedicure męski", price: "150,00 zł", duration: "1g" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      icon: "✨",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: "180,00 zł", duration: "2g" },
        { name: "Żel na naturalną płytkę (krótkie)", price: "150,00 zł", duration: "1g 30min" },
        { name: "Żel na naturalną płytkę (długie)", price: "170,00 zł", duration: "1g 30min" },
        { name: "Uzupełnienie stylizacji żelowej", price: "165,00 zł", duration: "1g 30min" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: "190,00 zł", duration: "2g" }
      ]
    },
    {
      category: "Zabiegi specjalistyczne",
      icon: "🔬",
      items: [
        { name: "Opracowanie pękających pięt", price: "100,00 zł", duration: "1g" },
        { name: "Opracowanie paznokci zmienionych chorobowo", price: "110,00 zł", duration: "45min" },
        { name: "Rekonstrukcja paznokcia", price: "50,00 zł", duration: "30min" },
        { name: "Paznokieć z onycholizą", price: "45,00 zł", duration: "30min" }
      ]
    }
  ];

  return (
    <div className="app">
      {/* Pasek informacyjny */}
      {showBanner && (
        <div className="info-banner">
          <div className="info-banner__content">
            <p>To jest propozycja strony. Wszystkie zdjęcia, treści i design mogą zostać zmienione zgodnie z Twoimi preferencjami. Kontakt: dawidzielinski.programmer@gmail.com</p>
            <button className="info-banner__close" onClick={closeBanner}>×</button>
          </div>
        </div>
      )}

      {/* Nawigacja */}
      <nav className={`nav ${!showBanner ? 'nav--top' : ''} ${isScrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__container">
          <div className="nav__logo">
            <img src="/logo.png" alt="Royal Nails Logo" className="nav__logo-img" />
            <span className="nav__logo-text">Royal Nails</span>
          </div>
          <ul className="nav__menu">
            <li><button onClick={() => scrollToSection('home')} className="nav__link">Strona główna</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav__link">O nas</button></li>
            <li><button onClick={() => scrollToSection('services')} className="nav__link">Usługi</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="nav__link">Galeria</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav__link">Kontakt</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__background">
          <div>{/* TODO: Prompt: A luxurious nail salon interior with elegant pink and blue accents, professional manicure stations, comfortable chairs, and modern lighting, Polish women getting nail treatments, Proporcje: [16:9] */}</div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Royal Nails</h1>
          <h2 className="hero__subtitle">Studio Paznokci i Urody</h2>
          <p className="hero__description">
            Profesjonalne usługi manicure i pedicure w sercu Katowic. 
            Zadbamy o Twoje paznokcie z najwyższą starannością i precyzją.
          </p>
          <div className="hero__buttons">
            <button onClick={() => scrollToSection('services')} className="btn btn--primary">
              Zobacz usługi
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn--secondary">
              Umów wizytę
            </button>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* O nas */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__content">
            <div className="about__text">
              <h2 className="section-title">O Royal Nails</h2>
              <p className="about__description">
                Jesteśmy profesjonalnym studiem paznokci z wieloletnim doświadczeniem 
                w branży beauty. Nasz zespół składa się z wykwalifikowanych stylistek 
                paznokci oraz podologa, którzy zapewnią Ci najwyższą jakość usług.
              </p>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">🏆</div>
                  <h3 className="feature__title">Doświadczenie</h3>
                  <p className="feature__text">Wieloletnie doświadczenie w stylizacji paznokci</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">✨</div>
                  <h3 className="feature__title">Jakość</h3>
                  <p className="feature__text">Używamy tylko najlepszych produktów renomowanych marek</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">🎯</div>
                  <h3 className="feature__title">Precyzja</h3>
                  <p className="feature__text">Każdy detal wykonany z najwyższą starannością</p>
                </div>
              </div>
            </div>
            <div className="about__image">
              <div>{/* TODO: Prompt: Professional Polish nail technician working on client's nails in elegant salon, focused and concentrated, modern equipment visible, soft lighting, Proporcje: [1:1] */}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title section-title--center">Nasze usługi</h2>
          <p className="section-subtitle">
            Oferujemy szeroki zakres profesjonalnych zabiegów dla Twoich paznokci
          </p>
          
          <div className="services__grid">
            {services.map((category, index) => (
              <div key={index} className="service-category">
                <div className="service-category__header">
                  <div className="service-category__icon">{category.icon}</div>
                  <h3 className="service-category__title">{category.category}</h3>
                </div>
                <div className="service-category__items">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item">
                      <div className="service-item__info">
                        <h4 className="service-item__name">{service.name}</h4>
                        <span className="service-item__duration">{service.duration}</span>
                      </div>
                      <div className="service-item__price">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="services__extras">
            <h3>Dodatkowo oferujemy:</h3>
            <div className="extras-grid">
              <div className="extra-item">
                <span className="extra-item__name">French / Babyboomer / Ombre</span>
                <span className="extra-item__price">+15,00 zł</span>
              </div>
              <div className="extra-item">
                <span className="extra-item__name">Drobne zdobienia</span>
                <span className="extra-item__price">Gratis</span>
              </div>
              <div className="extra-item">
                <span className="extra-item__name">Naprawa paznokcia</span>
                <span className="extra-item__price">30,00 zł</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title section-title--center">Galeria naszych prac</h2>
          <p className="section-subtitle">
            Zobacz przykłady naszych stylizacji i przekonaj się o jakości naszej pracy
          </p>
          
          <div className="gallery__grid">
            <div className="gallery__item gallery__item--large">
              <div>{/* TODO: Prompt: Beautiful manicured hands with elegant pink nail polish, professional nail art, soft lighting, close-up shot of Polish woman's hands, Proporcje: [16:9] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Elegant French manicure on natural nails, clean and professional look, Polish woman's hands, studio lighting, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Stylish gel nail extensions with glitter accent, modern nail design, Polish woman's manicured hands, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Professional pedicure result, beautiful painted toenails in coral color, Polish woman's feet, spa setting, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Intricate nail art design with floral patterns, detailed work, Polish woman's hands, artistic nail styling, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item gallery__item--wide">
              <div>{/* TODO: Prompt: Before and after comparison of nail treatment, transformation results, professional podology work, Polish client, Proporcje: [16:9] */}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title section-title--center">Kontakt</h2>
          
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__item">
                <div className="contact__icon">📍</div>
                <div className="contact__details">
                  <h3>Adres</h3>
                  <p>1 Maja 15<br />40-224 Katowice</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__icon">📞</div>
                <div className="contact__details">
                  <h3>Telefon</h3>
                  <p>732 676 016</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__icon">🕒</div>
                <div className="contact__details">
                  <h3>Godziny otwarcia</h3>
                  <div className="hours">
                    <p>Poniedziałek - Piątek: 08:00 - 17:00</p>
                    <p>Sobota: 08:00 - 14:00</p>
                    <p>Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
              
              <div className="contact__social">
                <h3>Znajdź nas w social media</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="social-link__icon">📷</div>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="social-link__icon">📘</div>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
              
              <div className="contact__booking">
                <h3>Umów wizytę online</h3>
                <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Zarezerwuj przez Booksy
                </a>
              </div>
            </div>
            
            <div className="contact__map">
              <div className="map-placeholder">
                <div>{/* TODO: Prompt: Modern nail salon storefront in Katowice, Poland, street view, elegant signage, professional appearance, urban setting, Proporcje: [16:9] */}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">
              <img src="/logo.png" alt="Royal Nails Logo" className="footer__logo-img" />
              <span className="footer__logo-text">Royal Nails</span>
            </div>
            <div className="footer__info">
              <p>&copy; 2024 Royal Nails Studio Paznokci i Urody. Wszystkie prawa zastrzeżone.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;