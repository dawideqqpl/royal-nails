import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isInfoBarVisible, setIsInfoBarVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeInfoBar = () => {
    setIsInfoBarVisible(false);
  };

  const services = [
    {
      category: "Manicure",
      items: [
        { name: "Manicure hybrydowy", price: "145 zł", time: "1h", description: "Profesjonalny manicure z hybrydą" },
        { name: "Manicure męski", price: "100 zł", time: "45min", description: "Specjalny manicure dla mężczyzn" },
        { name: "French / Babyboomer / Ombre", price: "15 zł", time: "15min", description: "Stylowe zdobienia" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure podologiczny", price: "190 zł", time: "1h 30min", description: "Profesjonalna pielęgnacja stóp" },
        { name: "Pedicure hybrydowy", price: "160 zł", time: "1h 30min", description: "Pedicure z malowaniem hybrydą" },
        { name: "Pedicure męski", price: "150 zł", time: "1h", description: "Pedicure dedykowany mężczyznom" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: "180 zł", time: "2h", description: "Kompleksowa stylizacja żelowa" },
        { name: "Żel na naturalną płytkę", price: "150 zł", time: "1h 30min", description: "Wzmocnienie naturalnych paznokci" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: "190 zł", time: "2h", description: "Odbudowa zniszczonych paznokci" }
      ]
    }
  ];

  return (
    <div className="App">
      {isInfoBarVisible && (
        <div className="info-bar">
          <div className="info-bar__content">
            <p>To jest propozycja strony. Wszystkie zdjęcia, treści i design mogą zostać zmienione zgodnie z Twoimi preferencjami. Kontakt: dawidzielinski.programmer@gmail.com</p>
            <button className="info-bar__close" onClick={closeInfoBar}>×</button>
          </div>
        </div>
      )}

      <header className={`header ${scrolled ? 'header--scrolled' : ''} ${!isInfoBarVisible ? 'header--top' : ''}`}>
        <nav className="nav">
          <div className="nav__container">
            <div className="nav__logo">
              <img src="/logo.png" alt="Royal Nails Logo" className="nav__logo-img" />
              <span className="nav__logo-text">Royal Nails</span>
            </div>
            <ul className="nav__menu">
              <li><a href="#home" className="nav__link">Główna</a></li>
              <li><a href="#services" className="nav__link">Usługi</a></li>
              <li><a href="#about" className="nav__link">O nas</a></li>
              <li><a href="#gallery" className="nav__link">Galeria</a></li>
              <li><a href="#contact" className="nav__link">Kontakt</a></li>
            </ul>
            <div className="nav__cta">
              <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn--primary">
                Umów wizytę
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero__bg">
            <div>{/* TODO: Prompt: A luxurious nail salon interior with elegant pink and blue lighting, comfortable chairs, modern equipment, professional atmosphere, European nail technician working on a female client's nails, soft focus background, Proporcje: [16:9] */}</div>
          </div>
          <div className="hero__overlay"></div>
          <div className="hero__content">
            <h1 className="hero__title">Royal Nails Studio</h1>
            <p className="hero__subtitle">Profesjonalna pielęgnacja paznokci w sercu Katowic</p>
            <div className="hero__cta">
              <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn--primary btn--large">
                Rezerwuj online
              </a>
              <a href="#services" className="btn btn--secondary btn--large">
                Nasze usługi
              </a>
            </div>
          </div>
          <div className="hero__scroll-indicator">
            <span>Przewiń w dół</span>
            <div className="hero__scroll-arrow"></div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nasze Usługi</h2>
              <p className="section-subtitle">Kompleksowa pielęgnacja paznokci na najwyższym poziomie</p>
            </div>
            
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="services__category">
                <h3 className="services__category-title">{category.category}</h3>
                <div className="services__grid">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-card">
                      <div className="service-card__icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="service-card__content">
                        <h4 className="service-card__name">{service.name}</h4>
                        <p className="service-card__description">{service.description}</p>
                        <div className="service-card__details">
                          <span className="service-card__price">{service.price}</span>
                          <span className="service-card__time">{service.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about__content">
              <div className="about__text">
                <h2 className="section-title">O Royal Nails</h2>
                <p className="about__description">
                  Royal Nails to profesjonalne studio paznokci w centrum Katowic, gdzie pasja spotyka się z najwyższą jakością usług. 
                  Specjalizujemy się w manicure, pedicure oraz stylizacji paznokci, oferując zarówno klasyczne, jak i nowoczesne techniki.
                </p>
                <div className="about__features">
                  <div className="feature">
                    <div className="feature__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="feature__text">
                      <h4>Profesjonalizm</h4>
                      <p>Wykwalifikowani specjaliści z wieloletnim doświadczeniem</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                    <div className="feature__text">
                      <h4>Indywidualne podejście</h4>
                      <p>Każdy klient jest dla nas wyjątkowy</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div className="feature__text">
                      <h4>Nowoczesny sprzęt</h4>
                      <p>Najnowsze technologie i produkty najwyższej jakości</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__image">
                <div>{/* TODO: Prompt: Professional Polish female nail technician in elegant uniform working in modern nail salon, focused on nail art, bright natural lighting, clean and luxurious interior, professional atmosphere, Proporcje: [1:1] */}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nasze Realizacje</h2>
              <p className="section-subtitle">Zobacz efekty naszej pracy</p>
            </div>
            <div className="gallery__grid">
              <div className="gallery__item">
                <div>{/* TODO: Prompt: Beautiful pink and white nail art on female hands, French manicure with delicate decorations, professional photography, soft lighting, elegant background, Proporcje: [1:1] */}</div>
              </div>
              <div className="gallery__item">
                <div>{/* TODO: Prompt: Colorful gel nail art with floral patterns, creative nail design on female hands, professional nail salon work, artistic nail decoration, bright colors, Proporcje: [1:1] */}</div>
              </div>
              <div className="gallery__item">
                <div>{/* TODO: Prompt: Professional pedicure result, beautiful painted toenails in soft pink color, female feet on white towel, spa atmosphere, relaxing environment, Proporcje: [1:1] */}</div>
              </div>
              <div className="gallery__item">
                <div>{/* TODO: Prompt: Elegant ombre nail design from pink to white, gradient effect on fingernails, professional manicure work, female hands with jewelry, luxury setting, Proporcje: [1:1] */}</div>
              </div>
              <div className="gallery__item">
                <div>{/* TODO: Prompt: Modern nail salon interior with comfortable pink chairs, professional equipment, clean and bright atmosphere, European style decoration, plants and elegant details, Proporcje: [16:9] */}</div>
              </div>
              <div className="gallery__item">
                <div>{/* TODO: Prompt: Glittery nail art design with crystals and decorations, festive nail styling, female hands with elegant rings, professional nail work, sparkling effect, Proporcje: [1:1] */}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact__content">
              <div className="contact__info">
                <h2 className="section-title">Skontaktuj się z nami</h2>
                <div className="contact__details">
                  <div className="contact__item">
                    <div className="contact__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4>Adres</h4>
                      <p>1 Maja 15, 40-224 Katowice</p>
                    </div>
                  </div>
                  <div className="contact__item">
                    <div className="contact__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12.36c0 1.44-1.13 2.64-2.56 2.64h-1.78v-5.26h1.78c1.43 0 2.56 1.18 2.56 2.62z"/>
                        <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Telefon</h4>
                      <p>732 676 016</p>
                    </div>
                  </div>
                </div>
                
                <div className="contact__hours">
                  <h4>Godziny otwarcia</h4>
                  <div className="hours__list">
                    <div className="hours__item">
                      <span>Poniedziałek - Piątek</span>
                      <span>08:00 - 17:00</span>
                    </div>
                    <div className="hours__item">
                      <span>Sobota</span>
                      <span>08:00 - 14:00</span>
                    </div>
                    <div className="hours__item">
                      <span>Niedziela</span>
                      <span>Zamknięte</span>
                    </div>
                  </div>
                </div>

                <div className="contact__social">
                  <h4>Śledź nas</h4>
                  <div className="social__links">
                    <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer" className="social__link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer" className="social__link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact__cta">
                <div className="cta__card">
                  <h3>Gotowa na idealny manicure?</h3>
                  <p>Zarezerwuj swoją wizytę już dziś i ciesz się profesjonalną pielęgnacją paznokci</p>
                  <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn--primary btn--large">
                    Rezerwuj przez Booksy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <div className="footer__logo">
                <img src="/logo.png" alt="Royal Nails Logo" className="footer__logo-img" />
                <span className="footer__logo-text">Royal Nails</span>
              </div>
              <p>Profesjonalne studio paznokci w centrum Katowic</p>
            </div>
            <div className="footer__links">
              <div className="footer__column">
                <h4>Usługi</h4>
                <ul>
                  <li><a href="#services">Manicure</a></li>
                  <li><a href="#services">Pedicure</a></li>
                  <li><a href="#services">Stylizacja żelowa</a></li>
                </ul>
              </div>
              <div className="footer__column">
                <h4>Kontakt</h4>
                <ul>
                  <li>1 Maja 15, Katowice</li>
                  <li>732 676 016</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2024 Royal Nails. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;