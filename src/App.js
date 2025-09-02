import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'services', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      category: "Pedicure",
      items: [
        { name: "Opracowanie pękających pięt", price: "100,00 zł", time: "1g" },
        { name: "Pedicure podologiczny", price: "190,00 zł", time: "1g 30min" },
        { name: "Pedicure podologiczny z hybrydą", price: "240,00 zł", time: "1g 45min" },
        { name: "Pedicure hybrydowy", price: "160,00 zł", time: "1g 30min" },
        { name: "Pedicure żelowy", price: "160,00 zł", time: "1g 30min" },
        { name: "Pedicure bez malowania", price: "140,00 zł", time: "45min" },
        { name: "Pedicure męski", price: "150,00 zł", time: "1g" }
      ]
    },
    {
      category: "Manicure",
      items: [
        { name: "Manicure hybrydowy - założenie", price: "145,00 zł", time: "1g" },
        { name: "Manicure hybrydowy - uzupełnienie", price: "140,00 zł", time: "1g" },
        { name: "Manicure hybrydowy po innej stylistce", price: "150,00 zł", time: "1g 15min" },
        { name: "Manicure męski", price: "100,00 zł", time: "45min" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: "180,00 zł", time: "2g" },
        { name: "Żel na naturalną płytkę (krótkie)", price: "150,00 zł", time: "1g 30min" },
        { name: "Żel na naturalną płytkę (długie)", price: "170,00 zł", time: "1g 30min" },
        { name: "Uzupełnienie stylizacji żelowej", price: "165,00 zł", time: "1g 30min" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: "190,00 zł", time: "2g" }
      ]
    }
  ];

  const openingHours = [
    { day: "Poniedziałek", hours: "08:00 - 17:00" },
    { day: "Wtorek", hours: "08:00 - 17:00" },
    { day: "Środa", hours: "08:00 - 17:00" },
    { day: "Czwartek", hours: "08:00 - 17:00" },
    { day: "Piątek", hours: "08:00 - 17:00" },
    { day: "Sobota", hours: "08:00 - 14:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  return (
    <div className="app">
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__container">
          <div className="nav__logo">
            <img src="/logo.png" alt="Royal Nails" className="nav__logo-img" />
            <span className="nav__logo-text">Royal Nails</span>
          </div>
          <ul className="nav__menu">
            <li><button onClick={() => scrollToSection('hero')} className={activeSection === 'hero' ? 'nav__link--active' : ''}>Strona główna</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'nav__link--active' : ''}>O nas</button></li>
            <li><button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'nav__link--active' : ''}>Usługi</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className={activeSection === 'gallery' ? 'nav__link--active' : ''}>Galeria</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'nav__link--active' : ''}>Kontakt</button></li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero__background">
          <div>{/* TODO: Prompt: Elegant nail salon interior with modern white furniture, soft lighting, and pink accents, luxury beauty treatment room, Proporcje: [16:9] */}</div>
        </div>
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__title-main">Royal Nails</span>
              <span className="hero__title-sub">Studio Paznokci i Urody</span>
            </h1>
            <p className="hero__description">
              Profesjonalny salon manicure i pedicure w Katowicach. 
              Oferujemy kompleksowe usługi pielęgnacyjne dla Twoich paznokci.
            </p>
            <div className="hero__buttons">
              <button onClick={() => scrollToSection('services')} className="btn btn--primary">
                Zobacz usługi
              </button>
              <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                 className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
                Umów wizytę
              </a>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="scroll-indicator"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__content">
              <h2 className="section-title">O naszym studio</h2>
              <div className="about__text">
                <p>
                  Royal Nails to profesjonalne studio paznokci i urody położone w sercu Katowic. 
                  Specjalizujemy się w kompleksowych usługach manicure i pedicure, oferując zarówno 
                  klasyczne zabiegi pielęgnacyjne, jak i nowoczesne stylizacje żelowe i hybrydowe.
                </p>
                <p>
                  Nasze doświadczone stylistki dbają o każdy detal, używając wyłącznie wysokiej 
                  jakości produktów i nowoczesnego sprzętu. Zapewniamy indywidualne podejście 
                  do każdego klienta w komfortowych warunkach.
                </p>
              </div>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">💎</div>
                  <h3>Wysokiej jakości produkty</h3>
                  <p>Używamy wyłącznie sprawdzonych marek</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">👩‍💼</div>
                  <h3>Doświadczony zespół</h3>
                  <p>Profesjonalne stylistki z wieloletnim doświadczeniem</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">🏆</div>
                  <h3>Indywidualne podejście</h3>
                  <p>Każda stylizacja dostosowana do Twoich potrzeb</p>
                </div>
              </div>
            </div>
            <div className="about__image">
              <div>{/* TODO: Prompt: Professional nail technician working on client's nails in modern salon, close-up of manicure process with gel polish application, Proporcje: [1:1] */}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nasze usługi</h2>
          <div className="services__grid">
            {services.map((category, index) => (
              <div key={index} className="service-category">
                <h3 className="service-category__title">{category.category}</h3>
                <div className="service-category__items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="service-item">
                      <div className="service-item__info">
                        <h4 className="service-item__name">{item.name}</h4>
                        <span className="service-item__time">{item.time}</span>
                      </div>
                      <span className="service-item__price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="services__cta">
            <p>Potrzebujesz więcej informacji o naszych usługach?</p>
            <a href="tel:732676016" className="btn btn--primary">Zadzwoń: 732 676 016</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Galeria naszych prac</h2>
          <div className="gallery__grid">
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Beautiful gel nail art with floral design in pastel colors, professional nail photography, close-up shot, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: French manicure on natural nails, classic elegant style, professional lighting, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Colorful hybrid nail polish collection, gradient ombre effect, artistic nail design, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Professional pedicure treatment, relaxing foot spa experience, clean salon environment, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Gel nail extensions with glitter accent, luxury nail design, sparkly finish, Proporcje: [1:1] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: Nail art with geometric patterns, modern minimalist design, black and white theme, Proporcje: [1:1] */}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2 className="section-title">Skontaktuj się z nami</h2>
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
                    <a href="tel:732676016">732 676 016</a>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">📱</div>
                  <div>
                    <h3>Media społecznościowe</h3>
                    <div className="social-links">
                      <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="opening-hours">
                <h3>Godziny otwarcia</h3>
                <div className="opening-hours__list">
                  {openingHours.map((day, index) => (
                    <div key={index} className={`opening-hours__item ${day.hours === 'Zamknięte' ? 'opening-hours__item--closed' : ''}`}>
                      <span className="opening-hours__day">{day.day}</span>
                      <span className="opening-hours__time">{day.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="contact__booking">
              <div className="booking-card">
                <h3>Umów wizytę online</h3>
                <p>Zarezerwuj termin w naszym studio przez platformę Booksy</p>
                <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                   className="btn btn--primary btn--full" target="_blank" rel="noopener noreferrer">
                  Rezerwuj przez Booksy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">
              <img src="/logo.png" alt="Royal Nails" />
              <span>Royal Nails Studio</span>
            </div>
            <div className="footer__links">
              <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="tel:732676016">732 676 016</a>
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