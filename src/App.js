import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = {
    manicure: [
      { name: 'Manicure hybrydowy - założenie', price: '145,00 zł', duration: '1g' },
      { name: 'Manicure hybrydowy - uzupełnienie', price: '140,00 zł', duration: '1g' },
      { name: 'Manicure hybrydowy po innej stylistce', price: '150,00 zł', duration: '1g 15min' },
      { name: 'Manicure męski', price: '100,00 zł', duration: '45min' }
    ],
    pedicure: [
      { name: 'Pedicure podologiczny', price: '190,00 zł', duration: '1g 30min' },
      { name: 'Pedicure podologiczny z hybrydą', price: '240,00 zł', duration: '1g 45min' },
      { name: 'Pedicure hybrydowy', price: '160,00 zł', duration: '1g 30min' },
      { name: 'Pedicure żelowy', price: '160,00 zł', duration: '1g 30min' },
      { name: 'Pedicure bez malowania', price: '140,00 zł', duration: '45min' },
      { name: 'Pedicure męski', price: '150,00 zł', duration: '1g' }
    ],
    stylizacja: [
      { name: 'Paznokcie żelowe z przedłużaniem', price: '180,00 zł', duration: '2g' },
      { name: 'Żel na naturalną płytkę (krótkie)', price: '150,00 zł', duration: '1g 30min' },
      { name: 'Żel na naturalną płytkę (długie)', price: '170,00 zł', duration: '1g 30min' },
      { name: 'Uzupełnienie stylizacji żelowej', price: '165,00 zł', duration: '1g 30min' },
      { name: 'Rekonstrukcja paznokci obgryzionych', price: '190,00 zł', duration: '2g' }
    ],
    specjalistyczne: [
      { name: 'Opracowanie pękających pięt', price: '100,00 zł', duration: '1g' },
      { name: 'Opracowanie paznokci zmienionych chorobowo', price: '110,00 zł', duration: '45min' },
      { name: 'Rekonstrukcja paznokcia', price: '50,00 zł', duration: '30min' },
      { name: 'Paznokieć z onycholizą', price: '45,00 zł', duration: '30min' }
    ]
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__brand">
            <img src="/logo.png" alt="Royal Nails" className="navbar__logo" />
            <span className="navbar__title">Royal Nails</span>
          </div>
          <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')} className="navbar__link">Strona główna</button></li>
            <li><button onClick={() => scrollToSection('services')} className="navbar__link">Usługi</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="navbar__link">Galeria</button></li>
            <li><button onClick={() => scrollToSection('about')} className="navbar__link">O nas</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="navbar__link">Kontakt</button></li>
          </ul>
          <button 
            className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__background">
          <img src="/img/image_12.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-main">Royal Nails</span>
            <span className="hero__title-sub">Studio Paznokci i Urody</span>
          </h1>
          <p className="hero__description">
            Profesjonalne usługi manicure i pedicure w eleganckim salonie w Katowicach
          </p>
          <div className="hero__buttons">
            <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn--primary btn--large">
              Umów wizytę
            </a>
            <button onClick={() => scrollToSection('services')} className="btn btn--secondary btn--large">
              Nasze usługi
            </button>
          </div>
        </div>
        <div className="hero__floating-elements">
          <div className="floating-element floating-element--1"></div>
          <div className="floating-element floating-element--2"></div>
          <div className="floating-element floating-element--3"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nasze Usługi</h2>
            <p className="section-subtitle">Profesjonalna pielęgnacja paznokci i stóp</p>
          </div>
          
          <div className="services__categories">
            <div className="service-category">
              <div className="service-category__header">
                <h3 className="service-category__title">Manicure</h3>
                <div className="service-category__icon">
                  <img src="/img/image_11.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
              </div>
              <div className="service-category__list">
                {services.manicure.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-item__info">
                      <h4 className="service-item__name">{service.name}</h4>
                      <span className="service-item__duration">{service.duration}</span>
                    </div>
                    <span className="service-item__price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-category">
              <div className="service-category__header">
                <h3 className="service-category__title">Pedicure</h3>
                <div className="service-category__icon">
                  <img src="/img/image_10.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
              </div>
              <div className="service-category__list">
                {services.pedicure.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-item__info">
                      <h4 className="service-item__name">{service.name}</h4>
                      <span className="service-item__duration">{service.duration}</span>
                    </div>
                    <span className="service-item__price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-category">
              <div className="service-category__header">
                <h3 className="service-category__title">Stylizacja Żelowa</h3>
                <div className="service-category__icon">
                  <img src="/img/image_9.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
              </div>
              <div className="service-category__list">
                {services.stylizacja.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-item__info">
                      <h4 className="service-item__name">{service.name}</h4>
                      <span className="service-item__duration">{service.duration}</span>
                    </div>
                    <span className="service-item__price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-category">
              <div className="service-category__header">
                <h3 className="service-category__title">Usługi Specjalistyczne</h3>
                <div className="service-category__icon">
                  <img src="/img/image_8.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
              </div>
              <div className="service-category__list">
                {services.specjalistyczne.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-item__info">
                      <h4 className="service-item__name">{service.name}</h4>
                      <span className="service-item__duration">{service.duration}</span>
                    </div>
                    <span className="service-item__price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Galeria Naszych Prac</h2>
            <p className="section-subtitle">Zobacz efekty naszej pracy</p>
          </div>
          
          <div className="gallery__grid">
            <div className="gallery__item gallery__item--large">
              <img src="/img/image_7.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="gallery__item">
              <img src="/img/image_6.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="gallery__item">
              <img src="/img/image_5.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="gallery__item">
              <img src="/img/image_4.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="gallery__item gallery__item--wide">
              <img src="/img/image_3.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="gallery__item">
              <img src="/img/image_2.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__content">
            <div className="about__text">
              <h2 className="about__title">O Royal Nails</h2>
              <p className="about__description">
                Royal Nails to profesjonalne studio paznokci i urody w Katowicach, gdzie pasja spotyka się z najwyższą jakością usług. 
                Specjalizujemy się w manicure, pedicure oraz zabiegach podologicznych.
              </p>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">✨</div>
                  <div className="feature__content">
                    <h3 className="feature__title">Profesjonalizm</h3>
                    <p className="feature__text">Wykwalifikowany personel z wieloletnim doświadczeniem</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon">🏆</div>
                  <div className="feature__content">
                    <h3 className="feature__title">Jakość</h3>
                    <p className="feature__text">Używamy tylko najlepszych produktów i sprzętu</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon">💎</div>
                  <div className="feature__content">
                    <h3 className="feature__title">Elegancja</h3>
                    <p className="feature__text">Luksusowe wnętrza i komfortowe warunki</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__image">
              <img src="/img/image_1.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kontakt</h2>
            <p className="section-subtitle">Umów się na wizytę już dziś</p>
          </div>
          
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__item">
                <div className="contact__icon">📍</div>
                <div className="contact__details">
                  <h3>Adres</h3>
                  <p>ul. 1 Maja 15<br />40-224 Katowice</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__icon">📞</div>
                <div className="contact__details">
                  <h3>Telefon</h3>
                  <p><a href="tel:732676016">732 676 016</a></p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__icon">🕒</div>
                <div className="contact__details">
                  <h3>Godziny otwarcia</h3>
                  <div className="opening-hours">
                    <div className="opening-hours__row">
                      <span>Poniedziałek - Piątek</span>
                      <span>08:00 - 17:00</span>
                    </div>
                    <div className="opening-hours__row">
                      <span>Sobota</span>
                      <span>08:00 - 14:00</span>
                    </div>
                    <div className="opening-hours__row">
                      <span>Niedziela</span>
                      <span>Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact__actions">
              <h3>Umów wizytę</h3>
              <p>Skorzystaj z naszego systemu rezerwacji online lub skontaktuj się z nami bezpośrednio</p>
              
              <div className="contact__buttons">
                <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn--primary">
                  Rezerwuj przez Booksy
                </a>
                <a href="tel:732676016" className="btn btn--secondary">
                  Zadzwoń teraz
                </a>
              </div>
              
              <div className="social-links">
                <a href="https://www.instagram.com/royal_nails_studio_paznokci/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link social-link--instagram">
                  Instagram
                </a>
                <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link social-link--facebook">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <img src="/logo.png" alt="Royal Nails" className="footer__logo" />
              <span className="footer__title">Royal Nails</span>
            </div>
            <p className="footer__text">
              © 2024 Royal Nails Studio Paznokci i Urody. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;