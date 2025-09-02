import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showInfoBar, setShowInfoBar] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Info Bar */}
      {showInfoBar && (
        <div className="info-bar">
          <div className="info-bar__content">
            <span>To jest propozycja strony. Wszystkie zdjęcia, treści i design mogą zostać zmienione zgodnie z Twoimi preferencjami. Kontakt: dawidzielinski.programmer@gmail.com</span>
            <button 
              className="info-bar__close"
              onClick={() => setShowInfoBar(false)}
              aria-label="Zamknij pasek informacyjny"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`navbar ${!showInfoBar ? 'navbar--top' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__brand">
            <img src="/logo.png" alt="Royal Nails" className="navbar__logo" />
            <span className="navbar__title">Royal Nails</span>
          </div>
          <ul className="navbar__menu">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => smoothScrollTo('home')}>Główna</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => smoothScrollTo('services')}>Usługi</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => smoothScrollTo('about')}>O nas</a></li>
            <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={() => smoothScrollTo('gallery')}>Galeria</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => smoothScrollTo('contact')}>Kontakt</a></li>
          </ul>
          <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
             className="navbar__cta-button" 
             target="_blank" 
             rel="noopener noreferrer">
            Umów wizytę
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__background">
          <div><img src="/img/image_8.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Royal Nails</h1>
          <p className="hero__subtitle">Profesjonalne studio paznokci i urody w Katowicach</p>
          <p className="hero__description">Odkryj najwyższą jakość usług manicure i pedicure w eleganckim salonie. Nasze doświadczone stylistki zadbają o Twoje paznokcie z najwyższą precyzją i troską.</p>
          <div className="hero__buttons">
            <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
               className="btn btn--primary" 
               target="_blank" 
               rel="noopener noreferrer">
              Zarezerwuj wizytę
            </a>
            <button className="btn btn--secondary" onClick={() => smoothScrollTo('services')}>
              Poznaj usługi
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
            <p className="section-subtitle">Kompleksowa opieka nad Twoimi paznokciami</p>
          </div>

          {/* Service Categories */}
          <div className="services__categories">
            {/* Manicure */}
            <div className="service-category">
              <div className="service-category__header">
                <svg className="service-category__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="currentColor"/>
                </svg>
                <h3>Manicure</h3>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Manicure hybrydowy - założenie</h4>
                    <span className="service-item__duration">1g</span>
                  </div>
                  <span className="service-item__price">145,00 zł</span>
                </div>
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Manicure hybrydowy - uzupełnienie</h4>
                    <span className="service-item__duration">1g</span>
                  </div>
                  <span className="service-item__price">140,00 zł</span>
                </div>
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Manicure męski</h4>
                    <span className="service-item__duration">45min</span>
                  </div>
                  <span className="service-item__price">100,00 zł</span>
                </div>
              </div>
            </div>

            {/* Pedicure */}
            <div className="service-category">
              <div className="service-category__header">
                <svg className="service-category__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9L20.25 7.25C20.75 6.59 20.88 5.78 20.69 5.02C20.5 4.26 19.93 3.64 19.19 3.37L15.19 2.05C14.45 1.78 13.64 1.9 12.98 2.4L11 4H9C7.34 4 6 5.34 6 7V10C6 11.66 7.34 13 9 13H11L12.98 14.6C13.64 15.1 14.45 15.22 15.19 14.95L19.19 13.63C19.93 13.36 20.5 12.74 20.69 11.98C20.88 11.22 20.75 10.41 20.25 9.75L19 8V9Z" fill="currentColor"/>
                  <path d="M9 15C7.34 15 6 16.34 6 18V21C6 21.55 6.45 22 7 22C7.55 22 8 21.55 8 21V18C8 17.45 8.45 17 9 17C9.55 17 10 17.45 10 18V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V18C12 16.34 10.66 15 9 15Z" fill="currentColor"/>
                </svg>
                <h3>Pedicure</h3>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Pedicure podologiczny</h4>
                    <span className="service-item__duration">1g 30min</span>
                  </div>
                  <span className="service-item__price">190,00 zł</span>
                </div>
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Pedicure hybrydowy</h4>
                    <span className="service-item__duration">1g 30min</span>
                  </div>
                  <span className="service-item__price">160,00 zł</span>
                </div>
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Pedicure męski</h4>
                    <span className="service-item__duration">1g</span>
                  </div>
                  <span className="service-item__price">150,00 zł</span>
                </div>
              </div>
            </div>

            {/* Stylizacja żelowa */}
            <div className="service-category">
              <div className="service-category__header">
                <svg className="service-category__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  <path d="M19.5 9.5L20.5 12.5L23.5 13.5L20.5 14.5L19.5 17.5L18.5 14.5L15.5 13.5L18.5 12.5L19.5 9.5Z" fill="currentColor"/>
                  <path d="M4.5 20.5L5.5 17.5L8.5 16.5L5.5 15.5L4.5 12.5L3.5 15.5L0.5 16.5L3.5 17.5L4.5 20.5Z" fill="currentColor"/>
                </svg>
                <h3>Stylizacja żelowa</h3>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Paznokcie żelowe z przedłużaniem</h4>
                    <span className="service-item__duration">2g</span>
                  </div>
                  <span className="service-item__price">180,00 zł</span>
                </div>
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Żel na naturalną płytkę (długie)</h4>
                    <span className="service-item__duration">1g 30min</span>
                  </div>
                  <span className="service-item__price">170,00 zł</span>
                </div>
                <div className="service-item">
                  <div className="service-item__info">
                    <h4>Rekonstrukcja paznokci obgryzionych</h4>
                    <span className="service-item__duration">2g</span>
                  </div>
                  <span className="service-item__price">190,00 zł</span>
                </div>
              </div>
            </div>
          </div>

          <div className="services__cta">
            <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
               className="btn btn--primary btn--large" 
               target="_blank" 
               rel="noopener noreferrer">
              Zobacz pełny cennik i umów wizytę
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__content">
            <div className="about__text">
              <div className="section-header">
                <h2 className="section-title">O Royal Nails</h2>
                <p className="section-subtitle">Pasja, doświadczenie i najwyższa jakość</p>
              </div>
              <div className="about__description">
                <p>Royal Nails to profesjonalne studio paznokci położone w sercu Katowic. Od lat specjalizujemy się w kompleksowej opiece nad paznokciami, oferując szeroki wachlarz usług - od klasycznego manicure po zaawansowane stylizacje żelowe.</p>
                <p>Nasz zespół to doświadczone stylistki, które łączą najnowsze trendy z tradycyjnymi technikami pielęgnacji. Każdy zabieg wykonujemy z największą precyzją, używając wyłącznie wysokiej jakości produktów renomowanych marek.</p>
                <p>Dbamy o komfort naszych klientów - nowoczesne wyposażenie, sterylne narzędzia i przyjazna atmosfera sprawiają, że wizyta u nas to czysta przyjemność.</p>
              </div>
              <div className="about__features">
                <div className="feature">
                  <svg className="feature__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  <div>
                    <h3>Najwyższa jakość</h3>
                    <p>Używamy tylko premium produktów</p>
                  </div>
                </div>
                <div className="feature">
                  <svg className="feature__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                  <div>
                    <h3>Doświadczenie</h3>
                    <p>Wieloletnie doświadczenie naszych stylistek</p>
                  </div>
                </div>
                <div className="feature">
                  <svg className="feature__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <h3>Higiena</h3>
                    <p>Sterylizacja i dezynfekcja na najwyższym poziomie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__image">
              <div><img src="/img/image_7.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Galeria naszych prac</h2>
            <p className="section-subtitle">Zobacz efekty naszej pracy</p>
          </div>
          <div className="gallery__grid">
            <div className="gallery__item">
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
            <div className="gallery__item">
              <div><img src="/img/image_2.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item">
              <div><img src="/img/image_1.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
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
                <svg className="contact__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5S14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                <div>
                  <h3>Adres</h3>
                  <p>1 Maja 15<br/>40-224 Katowice</p>
                </div>
              </div>
              <div className="contact__item">
                <svg className="contact__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                </svg>
                <div>
                  <h3>Telefon</h3>
                  <p><a href="tel:732676016">732 676 016</a></p>
                </div>
              </div>
              <div className="contact__item">
                <svg className="contact__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11S10 10.1 10 9S10.9 7 12 7ZM18 15C16 17 14 18 12 18S8 17 6 15C6 13 8 12 12 12S18 13 18 15Z" fill="currentColor"/>
                </svg>
                <div>
                  <h3>Godziny otwarcia</h3>
                  <div className="hours">
                    <p>Poniedziałek - Piątek: 08:00 - 17:00</p>
                    <p>Sobota: 08:00 - 14:00</p>
                    <p>Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__booking">
              <div className="booking-card">
                <h3>Umów wizytę online</h3>
                <p>Zarezerwuj termin w najwygodniejszy sposób przez naszą platformę Booksy</p>
                <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                   className="btn btn--primary btn--large" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Rezerwuj przez Booksy
                </a>
                <div className="social-links">
                  <h4>Śledź nas w mediach społecznościowych</h4>
                  <div className="social-icons">
                    <a href="https://www.instagram.com/royal_nails_studio_paznokci/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="social-link">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.16C15.2 2.16 15.58 2.17 16.85 2.23C20.27 2.42 21.58 3.75 21.77 7.15C21.83 8.42 21.84 8.8 21.84 12C21.84 15.2 21.83 15.58 21.77 16.85C21.58 20.25 20.27 21.58 16.85 21.77C15.58 21.83 15.2 21.84 12 21.84C8.8 21.84 8.42 21.83 7.15 21.77C3.73 21.58 2.42 20.25 2.23 16.85C2.17 15.58 2.16 15.2 2.16 12C2.16 8.8 2.17 8.42 2.23 7.15C2.42 3.75 3.73 2.42 7.15 2.23C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.01 7.05 0.07C2.7 0.31 0.31 2.7 0.07 7.05C0.01 8.33 0 8.74 0 12S0.01 15.67 0.07 16.95C0.31 21.3 2.7 23.69 7.05 23.93C8.33 23.99 8.74 24 12 24S15.67 23.99 16.95 23.93C21.3 23.69 23.69 21.3 23.93 16.95C23.99 15.67 24 15.26 24 12S23.99 8.33 23.93 7.05C23.69 2.7 21.3 0.31 16.95 0.07C15.67 0.01 15.26 0 12 0Z" fill="currentColor"/>
                        <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12S8.6 18.16 12 18.16S18.16 15.4 18.16 12S15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12S9.79 8 12 8S16 9.79 16 12S14.21 16 12 16Z" fill="currentColor"/>
                        <path d="M18.41 4.15C17.68 4.15 17.09 4.74 17.09 5.47C17.09 6.2 17.68 6.79 18.41 6.79C19.14 6.79 19.73 6.2 19.73 5.47C19.73 4.74 19.14 4.15 18.41 4.15Z" fill="currentColor"/>
                      </svg>
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="social-link">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24V15.56H7.08V12.07H10.13V9.41C10.13 6.39 11.94 4.72 14.68 4.72C15.96 4.72 17.3 4.95 17.3 4.95V7.94H15.83C14.38 7.94 13.87 8.83 13.87 9.75V12.07H17.17L16.6 15.56H13.87V24C19.61 23.1 24 18.1 24 12.07Z" fill="currentColor"/>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
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
              <h3>Royal Nails</h3>
              <p>Profesjonalne studio paznokci w Katowicach</p>
            </div>
            <div className="footer__links">
              <h4>Szybkie linki</h4>
              <ul>
                <li><a href="#home" onClick={() => smoothScrollTo('home')}>Główna</a></li>
                <li><a href="#services" onClick={() => smoothScrollTo('services')}>Usługi</a></li>
                <li><a href="#about" onClick={() => smoothScrollTo('about')}>O nas</a></li>
                <li><a href="#contact" onClick={() => smoothScrollTo('contact')}>Kontakt</a></li>
              </ul>
            </div>
            <div className="footer__contact">
              <h4>Kontakt</h4>
              <p>1 Maja 15, 40-224 Katowice</p>
              <p><a href="tel:732676016">732 676 016</a></p>
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