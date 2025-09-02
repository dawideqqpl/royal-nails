import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isInfoBarVisible, setIsInfoBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeInfoBar = () => {
    setIsInfoBarVisible(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const services = [
    {
      category: "Pedicure",
      items: [
        { name: "Opracowanie pękających pięt", price: "100,00 zł", duration: "1g" },
        { name: "Pedicure podologiczny", price: "190,00 zł", duration: "1g 30min" },
        { name: "Pedicure podologiczny z hybrydą", price: "240,00 zł", duration: "1g 45min" },
        { name: "Pedicure hybrydowy", price: "160,00 zł", duration: "1g 30min" },
        { name: "Pedicure żelowy", price: "160,00 zł", duration: "1g 30min" },
        { name: "Pedicure bez malowania", price: "140,00 zł", duration: "45min" },
        { name: "Pedicure męski", price: "150,00 zł", duration: "1g" }
      ]
    },
    {
      category: "Manicure",
      items: [
        { name: "Manicure hybrydowy - założenie", price: "145,00 zł", duration: "1g" },
        { name: "Manicure hybrydowy - uzupełnienie", price: "140,00 zł", duration: "1g" },
        { name: "Manicure hybrydowy po innej stylistce", price: "150,00 zł", duration: "1g 15min" },
        { name: "Manicure męski", price: "100,00 zł", duration: "45min" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: "180,00 zł", duration: "2g" },
        { name: "Żel na naturalną płytkę (krótkie)", price: "150,00 zł", duration: "1g 30min" },
        { name: "Żel na naturalną płytkę (długie)", price: "170,00 zł", duration: "1g 30min" },
        { name: "Uzupełnienie stylizacji żelowej", price: "165,00 zł", duration: "1g 30min" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: "190,00 zł", duration: "2g" }
      ]
    },
    {
      category: "Usługi specjalistyczne",
      items: [
        { name: "Rekonstrukcja paznokcia", price: "50,00 zł", duration: "30min" },
        { name: "Opracowanie paznokci zmienionych chorobowo", price: "110,00 zł", duration: "45min" },
        { name: "French / Babyboomer / Ombre", price: "15,00 zł", duration: "15min" },
        { name: "Naprawa paznokcia", price: "30,00 zł", duration: "20min" }
      ]
    }
  ];

  const galleryItems = [
    { title: "Manicure hybrydowy", category: "manicure" },
    { title: "Pedicure podologiczny", category: "pedicure" },
    { title: "Stylizacja żelowa", category: "zel" },
    { title: "French manicure", category: "french" },
    { title: "Pedicure męski", category: "pedicure" },
    { title: "Zdobienia na paznokciach", category: "zdobienia" }
  ];

  return (
    <div className="app">
      {isInfoBarVisible && (
        <div className="info-bar">
          <div className="info-bar__content">
            <p>To jest propozycja strony. Wszystkie zdjęcia, treści i design mogą zostać zmienione zgodnie z Twoimi preferencjami. Kontakt: dawidzielinski.programmer@gmail.com</p>
            <button onClick={closeInfoBar} className="info-bar__close">×</button>
          </div>
        </div>
      )}

      <nav className={`navbar ${!isInfoBarVisible ? 'navbar--sticky' : ''} ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container">
          <div className="navbar__content">
            <div className="navbar__logo">
              <img src="/logo.png" alt="Royal Nails" className="navbar__logo-img" />
              <span className="navbar__logo-text">Royal Nails</span>
            </div>
            <ul className="navbar__menu">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Strona główna</a></li>
              <li><a href="#o-nas" onClick={() => scrollToSection('o-nas')}>O nas</a></li>
              <li><a href="#uslugi" onClick={() => scrollToSection('uslugi')}>Usługi</a></li>
              <li><a href="#galeria" onClick={() => scrollToSection('galeria')}>Galeria</a></li>
              <li><a href="#kontakt" onClick={() => scrollToSection('kontakt')}>Kontakt</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero__background">
          <img src="/img/image_3.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
        <div className="hero__overlay"></div>
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">Royal Nails Studio</h1>
            <p className="hero__subtitle">Profesjonalny manicure i pedicure w sercu Katowic</p>
            <p className="hero__description">
              Odkryj luksusowe doznania w naszym studiu paznokci. 
              Specjalizujemy się w stylizacji żelowej, hybrydowych i klasycznych usługach podologicznych.
            </p>
            <div className="hero__buttons">
              <button 
                className="btn btn--primary"
                onClick={() => scrollToSection('uslugi')}
              >
                Zobacz usługi
              </button>
              <a 
                href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Umów wizytę
              </a>
            </div>
          </div>
        </div>
        <div className="hero__floating-elements">
          <div className="floating-element floating-element--1"></div>
          <div className="floating-element floating-element--2"></div>
          <div className="floating-element floating-element--3"></div>
        </div>
      </section>

      <section id="o-nas" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O naszym studio</h2>
            <p className="section-subtitle">Pasja do perfekcji w każdym detalu</p>
          </div>
          <div className="about__content">
            <div className="about__text">
              <div className="about__card">
                <div className="about__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M12 8C14.8 8 17 10.2 17 13S14.8 18 12 18 7 15.8 7 13 9.2 8 12 8Z"/>
                  </svg>
                </div>
                <div className="about__card-content">
                  <h3>Doświadczenie</h3>
                  <p>Wieloletnie doświadczenie w branży beauty. Nasze stylistki posiadają odpowiednie kwalifikacje i ciągle podnoszą swoje umiejętności.</p>
                </div>
              </div>
              
              <div className="about__card">
                <div className="about__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,9V7H17V9H7M7,11H17V13H7V11M7,15H13V17H7V15Z"/>
                  </svg>
                </div>
                <div className="about__card-content">
                  <h3>Jakość</h3>
                  <p>Używamy wyłącznie najwyższej jakości produktów renomowanych marek. Gwarantujemy trwałość i bezpieczeństwo wykonywanych stylizacji.</p>
                </div>
              </div>
              
              <div className="about__card">
                <div className="about__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                </div>
                <div className="about__card-content">
                  <h3>Indywidualne podejście</h3>
                  <p>Każda klientka jest dla nas wyjątkowa. Dostosowujemy nasze usługi do indywidualnych potrzeb i oczekiwań.</p>
                </div>
              </div>
            </div>
            <div className="about__image">
              <img src="/img/image_2.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
          </div>
        </div>
      </section>

      <section id="uslugi" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nasze usługi</h2>
            <p className="section-subtitle">Kompleksowa opieka nad Twoimi paznokciami</p>
          </div>
          <div className="services__grid">
            {services.map((category, index) => (
              <div key={index} className="service-category">
                <div className="service-category__header">
                  <div className="service-category__icon">
                    {category.category === 'Pedicure' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,7C20.1,7 21,7.9 21,9V15C21,16.1 20.1,17 19,17H5C3.9,17 3,16.1 3,15V9C3,7.9 3.9,7 5,7H6V5C6,3.9 6.9,3 8,3H16C17.1,3 18,3.9 18,5V7H19M8,5V7H16V5H8M5,9V15H19V9H5Z"/>
                      </svg>
                    )}
                    {category.category === 'Manicure' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                      </svg>
                    )}
                    {category.category === 'Stylizacja żelowa' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.1,18.8L7.4,14.1C7.1,13.8 7.1,13.2 7.4,12.9L8.8,11.5C9.1,11.2 9.7,11.2 10,11.5L14.7,16.2C15,16.5 15,17.1 14.7,17.4L13.3,18.8C13,19.1 12.4,19.1 12.1,18.8M6,17V15H4V17H2V19H4V21H6V19H8V17H6M18.5,2.5L15.6,5.4L18.6,8.4L21.5,5.5C22.1,4.9 22.1,3.9 21.5,3.3L20.7,2.5C20.1,1.9 19.1,1.9 18.5,2.5Z"/>
                      </svg>
                    )}
                    {category.category === 'Usługi specjalistyczne' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V11A1,1 0 0,0 12,12A1,1 0 0,0 13,11V5A1,1 0 0,0 12,4M21,15V17H18V22H16V17H13V15H16V10H18V15H21Z"/>
                      </svg>
                    )}
                  </div>
                  <h3>{category.category}</h3>
                </div>
                <div className="service-list">
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
          <div className="services__cta">
            <a 
              href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              Zarezerwuj wizytę online
            </a>
          </div>
        </div>
      </section>

      <section id="galeria" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Galeria naszych prac</h2>
            <p className="section-subtitle">Zobacz efekty naszej pracy</p>
          </div>
          <div className="gallery__grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery__item">
                <div className="gallery__image">
                  <img src="/img/image_1.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                <div className="gallery__overlay">
                  <h4 className="gallery__title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skontaktuj się z nami</h2>
            <p className="section-subtitle">Umów wizytę lub zadaj pytanie</p>
          </div>
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <div className="contact__details">
                  <h3>Adres</h3>
                  <p>1 Maja 15<br />40-224 Katowice</p>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                </div>
                <div className="contact__details">
                  <h3>Telefon</h3>
                  <p><a href="tel:732676016">732 676 016</a></p>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                </div>
                <div className="contact__details">
                  <h3>Godziny otwarcia</h3>
                  <div className="opening-hours">
                    <p>Pon - Pt: 08:00 - 17:00</p>
                    <p>Sobota: 08:00 - 14:00</p>
                    <p>Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>

              <div className="contact__social">
                <h3>Śledź nas</h3>
                <div className="social-links">
                  <a 
                    href="https://www.instagram.com/royal_nails_studio_paznokci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                    </svg>
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__booking">
              <div className="booking-card">
                <h3>Rezerwacja online</h3>
                <p>Zarezerwuj wizytę w dogodnym dla Ciebie terminie przez Booksy</p>
                <a 
                  href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large"
                >
                  Umów wizytę
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <div className="footer__logo">
                <img src="/logo.png" alt="Royal Nails" />
                <span>Royal Nails</span>
              </div>
              <p>Profesjonalny salon manicure i pedicure w Katowicach</p>
            </div>
            <div className="footer__links">
              <div className="footer__section">
                <h4>Nawigacja</h4>
                <ul>
                  <li><a href="#home">Strona główna</a></li>
                  <li><a href="#o-nas">O nas</a></li>
                  <li><a href="#uslugi">Usługi</a></li>
                  <li><a href="#kontakt">Kontakt</a></li>
                </ul>
              </div>
              <div className="footer__section">
                <h4>Kontakt</h4>
                <ul>
                  <li>1 Maja 15, 40-224 Katowice</li>
                  <li>Tel: 732 676 016</li>
                  <li>Pon-Pt: 08:00-17:00</li>
                  <li>Sob: 08:00-14:00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2024 Royal Nails Studio. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;