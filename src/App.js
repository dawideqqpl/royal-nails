import React, { useState, useEffect } from 'react';
import './App.css';

const InfoBar = ({ onClose, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="info-bar">
      <div className="info-bar__content">
        <span className="info-bar__text">
          To jest propozycja strony. Wszystkie zdjęcia, treści i design mogą zostać zmienione zgodnie z Twoimi preferencjami. Kontakt: dawidzielinski.programmer@gmail.com
        </span>
        <button className="info-bar__close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

const Header = ({ infoBarVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${infoBarVisible ? 'header--with-info' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src="/logo.png" alt="Royal Nails" className="header__logo-img" />
          <span className="header__logo-text">Royal Nails</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__link" onClick={() => scrollToSection('hero')}>Start</button>
            </li>
            <li className="nav__item">
              <button className="nav__link" onClick={() => scrollToSection('about')}>O nas</button>
            </li>
            <li className="nav__item">
              <button className="nav__link" onClick={() => scrollToSection('services')}>Usługi</button>
            </li>
            <li className="nav__item">
              <button className="nav__link" onClick={() => scrollToSection('gallery')}>Galeria</button>
            </li>
            <li className="nav__item">
              <button className="nav__link" onClick={() => scrollToSection('contact')}>Kontakt</button>
            </li>
          </ul>
        </nav>

        <button 
          className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <img src="/img/image_9.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-line">Royal Nails</span>
            <span className="hero__title-line">Studio Piękna</span>
          </h1>
          <p className="hero__subtitle">
            Profesjonalne usługi manicure i pedicure w sercu Katowic. 
            Odkryj luksus i doskonałość w każdym detalu.
          </p>
          <div className="hero__buttons">
            <button className="btn btn--primary hero__cta" onClick={() => window.open('https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice', '_blank')}>
              Umów wizytę
            </button>
            <button className="btn btn--secondary hero__cta" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Zobacz usługi
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero__floating-elements">
        <div className="floating-element floating-element--1"></div>
        <div className="floating-element floating-element--2"></div>
        <div className="floating-element floating-element--3"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="section-title about__title">
              Nasza pasja to Twoje piękne paznokcie
            </h2>
            <p className="about__description">
              Royal Nails to profesjonalne studio paznokci w Katowicach, gdzie każdy klient jest traktowany 
              jak królewska osoba. Oferujemy pełen zakres usług manicure i pedicure, 
              od klasycznych po nowoczesne stylizacje żelowe i hybrydowe.
            </p>
            <p className="about__description">
              Nasz zespół składa się z doświadczonych stylistek, które łączą passion z najwyższą jakością 
              wykonania. Używamy tylko najlepszych produktów i nowoczesnego sprzętu, 
              aby zapewnić Ci niezapomniane doświadczenie.
            </p>
            
            <div className="about__features">
              <div className="feature">
                <div className="feature__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 21H5V3H13V9H19Z"/>
                  </svg>
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">Doświadczenie</h3>
                  <p className="feature__description">Lata praktyki w branży beauty</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                  </svg>
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">Jakość</h3>
                  <p className="feature__description">Najwyższe standardy obsługi</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.42 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.42 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                  </svg>
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">Pasja</h3>
                  <p className="feature__description">Miłość do tego co robimy</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about__image">
            <img src="/img/image_8.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('manicure');

  const services = {
    manicure: [
      {
        name: 'Manicure hybrydowy - założenie',
        price: '145,00 zł',
        duration: '1h',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A1,1 0 0,1 13,3V4.75C15.09,5.32 16.68,6.91 17.25,9H19A1,1 0 0,1 20,10A1,1 0 0,1 19,11H17.25C16.68,13.09 15.09,14.68 13,15.25V17A1,1 0 0,1 12,18A1,1 0 0,1 11,17V15.25C8.91,14.68 7.32,13.09 6.75,11H5A1,1 0 0,1 4,10A1,1 0 0,1 5,9H6.75C7.32,6.91 8.91,5.32 11,4.75V3A1,1 0 0,1 12,2M12,8A2,2 0 0,0 10,10A2,2 0 0,0 12,12A2,2 0 0,0 14,10A2,2 0 0,0 12,8Z"/>
          </svg>
        )
      },
      {
        name: 'Manicure hybrydowy - uzupełnienie',
        price: '140,00 zł',
        duration: '1h',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A1,1 0 0,1 13,3V4.75C15.09,5.32 16.68,6.91 17.25,9H19A1,1 0 0,1 20,10A1,1 0 0,1 19,11H17.25C16.68,13.09 15.09,14.68 13,15.25V17A1,1 0 0,1 12,18A1,1 0 0,1 11,17V15.25C8.91,14.68 7.32,13.09 6.75,11H5A1,1 0 0,1 4,10A1,1 0 0,1 5,9H6.75C7.32,6.91 8.91,5.32 11,4.75V3A1,1 0 0,1 12,2M12,8A2,2 0 0,0 10,10A2,2 0 0,0 12,12A2,2 0 0,0 14,10A2,2 0 0,0 12,8Z"/>
          </svg>
        )
      },
      {
        name: 'Manicure męski',
        price: '100,00 zł',
        duration: '45min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A1,1 0 0,1 13,3V4.75C15.09,5.32 16.68,6.91 17.25,9H19A1,1 0 0,1 20,10A1,1 0 0,1 19,11H17.25C16.68,13.09 15.09,14.68 13,15.25V17A1,1 0 0,1 12,18A1,1 0 0,1 11,17V15.25C8.91,14.68 7.32,13.09 6.75,11H5A1,1 0 0,1 4,10A1,1 0 0,1 5,9H6.75C7.32,6.91 8.91,5.32 11,4.75V3A1,1 0 0,1 12,2M12,8A2,2 0 0,0 10,10A2,2 0 0,0 12,12A2,2 0 0,0 14,10A2,2 0 0,0 12,8Z"/>
          </svg>
        )
      }
    ],
    pedicure: [
      {
        name: 'Pedicure podologiczny',
        price: '190,00 zł',
        duration: '1h 30min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,7H22V9H19V7M17,12H20V14H17V12M20,16H22V18H20V16M17.5,3C15,3 13,5 13,7.5C13,8.64 13.42,9.68 14.13,10.43L15,11.3V15H18V11.3L18.87,10.43C19.58,9.68 20,8.64 20,7.5C20,5 18,3 15.5,3H17.5M9.5,3C7,3 5,5 5,7.5C5,8.64 5.42,9.68 6.13,10.43L7,11.3V15H10V11.3L10.87,10.43C11.58,9.68 12,8.64 12,7.5C12,5 10,3 7.5,3H9.5Z"/>
          </svg>
        )
      },
      {
        name: 'Pedicure podologiczny z hybrydą',
        price: '240,00 zł',
        duration: '1h 45min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,7H22V9H19V7M17,12H20V14H17V12M20,16H22V18H20V16M17.5,3C15,3 13,5 13,7.5C13,8.64 13.42,9.68 14.13,10.43L15,11.3V15H18V11.3L18.87,10.43C19.58,9.68 20,8.64 20,7.5C20,5 18,3 15.5,3H17.5M9.5,3C7,3 5,5 5,7.5C5,8.64 5.42,9.68 6.13,10.43L7,11.3V15H10V11.3L10.87,10.43C11.58,9.68 12,8.64 12,7.5C12,5 10,3 7.5,3H9.5Z"/>
          </svg>
        )
      },
      {
        name: 'Pedicure hybrydowy',
        price: '160,00 zł',
        duration: '1h 30min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,7H22V9H19V7M17,12H20V14H17V12M20,16H22V18H20V16M17.5,3C15,3 13,5 13,7.5C13,8.64 13.42,9.68 14.13,10.43L15,11.3V15H18V11.3L18.87,10.43C19.58,9.68 20,8.64 20,7.5C20,5 18,3 15.5,3H17.5M9.5,3C7,3 5,5 5,7.5C5,8.64 5.42,9.68 6.13,10.43L7,11.3V15H10V11.3L10.87,10.43C11.58,9.68 12,8.64 12,7.5C12,5 10,3 7.5,3H9.5Z"/>
          </svg>
        )
      },
      {
        name: 'Pedicure męski',
        price: '150,00 zł',
        duration: '1h',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,7H22V9H19V7M17,12H20V14H17V12M20,16H22V18H20V16M17.5,3C15,3 13,5 13,7.5C13,8.64 13.42,9.68 14.13,10.43L15,11.3V15H18V11.3L18.87,10.43C19.58,9.68 20,8.64 20,7.5C20,5 18,3 15.5,3H17.5M9.5,3C7,3 5,5 5,7.5C5,8.64 5.42,9.68 6.13,10.43L7,11.3V15H10V11.3L10.87,10.43C11.58,9.68 12,8.64 12,7.5C12,5 10,3 7.5,3H9.5Z"/>
          </svg>
        )
      }
    ],
    stylizacja: [
      {
        name: 'Paznokcie żelowe z przedłużaniem',
        price: '180,00 zł',
        duration: '2h',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29C13.06,5.88 13.06,6.82 13.65,7.41L14.69,8.45L15.46,7.68L14.42,6.64C14.25,6.47 14.25,6.19 14.42,6.03L16.54,3.91C16.64,3.81 16.77,3.76 16.91,3.76C17.05,3.76 17.18,3.81 17.28,3.91L20.09,6.72C20.19,6.82 20.24,6.95 20.24,7.09C20.24,7.23 20.19,7.36 20.09,7.46L17.97,9.58C17.8,9.75 17.53,9.75 17.36,9.58L16.32,8.54L15.55,9.31L16.59,10.35C17.18,10.94 18.12,10.94 18.71,10.35L20.83,8.23C21.12,7.94 21.27,7.55 21.27,7.16C21.27,6.77 21.12,6.38 20.83,6.09L18.02,3.28C17.72,2.98 17.34,2.83 16.95,2.83L16.84,2.73M12.91,6.06L12.14,6.83L7.75,11.22C7.56,11.41 7.56,11.72 7.75,11.91L8.79,12.95C8.98,13.14 9.29,13.14 9.48,12.95L13.87,8.56L14.64,7.79L12.91,6.06M6.71,12.37L5.67,13.41C5.28,13.8 5.28,14.43 5.67,14.82L7.79,16.94C8.18,17.33 8.81,17.33 9.2,16.94L10.24,15.9L9.47,15.13L8.43,16.17C8.26,16.34 7.98,16.34 7.81,16.17L5.69,14.05C5.59,13.95 5.54,13.82 5.54,13.68C5.54,13.54 5.59,13.41 5.69,13.31L6.73,12.27L5.96,11.5L6.71,12.37Z"/>
          </svg>
        )
      },
      {
        name: 'Żel na naturalną płytkę (krótkie)',
        price: '150,00 zł',
        duration: '1h 30min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A1,1 0 0,1 13,3V4.75C15.09,5.32 16.68,6.91 17.25,9H19A1,1 0 0,1 20,10A1,1 0 0,1 19,11H17.25C16.68,13.09 15.09,14.68 13,15.25V17A1,1 0 0,1 12,18A1,1 0 0,1 11,17V15.25C8.91,14.68 7.32,13.09 6.75,11H5A1,1 0 0,1 4,10A1,1 0 0,1 5,9H6.75C7.32,6.91 8.91,5.32 11,4.75V3A1,1 0 0,1 12,2M12,8A2,2 0 0,0 10,10A2,2 0 0,0 12,12A2,2 0 0,0 14,10A2,2 0 0,0 12,8Z"/>
          </svg>
        )
      },
      {
        name: 'Rekonstrukcja paznokci obgryzionych',
        price: '190,00 zł',
        duration: '2h',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16.54,18 19,15.54 19,12.5C19,9.46 16.54,7 13.5,7H4.83L7.91,10.09L6.5,11.5L1,6L6.5,0.5L7.91,1.91L4.83,5H13.5M6,18V16H10V18H6Z"/>
          </svg>
        )
      }
    ],
    podologia: [
      {
        name: 'Opracowanie pękających pięt',
        price: '100,00 zł',
        duration: '1h',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
          </svg>
        )
      },
      {
        name: 'Opracowanie paznokci zmienionych chorobowo',
        price: '110,00 zł',
        duration: '45min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13V13H11V7M11,15H13V17H11V15Z"/>
          </svg>
        )
      },
      {
        name: 'Rekonstrukcja paznokcia',
        price: '50,00 zł',
        duration: '30min',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16.54,18 19,15.54 19,12.5C19,9.46 16.54,7 13.5,7H4.83L7.91,10.09L6.5,11.5L1,6L6.5,0.5L7.91,1.91L4.83,5H13.5M6,18V16H10V18H6Z"/>
          </svg>
        )
      }
    ]
  };

  return (
    <section id="services" className="services">
      <div className="services__container">
        <h2 className="section-title services__title">Nasze Usługi</h2>
        <p className="services__subtitle">
          Odkryj pełen zakres profesjonalnych usług dla Twoich paznokci
        </p>
        
        <div className="services__categories">
          <button 
            className={`services__category ${activeCategory === 'manicure' ? 'services__category--active' : ''}`}
            onClick={() => setActiveCategory('manicure')}
          >
            Manicure
          </button>
          <button 
            className={`services__category ${activeCategory === 'pedicure' ? 'services__category--active' : ''}`}
            onClick={() => setActiveCategory('pedicure')}
          >
            Pedicure
          </button>
          <button 
            className={`services__category ${activeCategory === 'stylizacja' ? 'services__category--active' : ''}`}
            onClick={() => setActiveCategory('stylizacja')}
          >
            Stylizacja
          </button>
          <button 
            className={`services__category ${activeCategory === 'podologia' ? 'services__category--active' : ''}`}
            onClick={() => setActiveCategory('podologia')}
          >
            Podologia
          </button>
        </div>
        
        <div className="services__grid">
          {services[activeCategory].map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__icon">
                {service.icon}
              </div>
              <div className="service-card__content">
                <h3 className="service-card__name">{service.name}</h3>
                <div className="service-card__details">
                  <span className="service-card__price">{service.price}</span>
                  <span className="service-card__duration">{service.duration}</span>
                </div>
              </div>
              <button 
                className="service-card__button"
                onClick={() => window.open('https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice', '_blank')}
              >
                Umów się
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'manicure',
      // TODO: Prompt: [Beautiful elegant nail art design, French manicure with delicate decorations, professional nail salon work, close-up of female hands], Proporcje: [1:1]
    },
    {
      id: 2,
      category: 'pedicure',
      // TODO: Prompt: [Professional pedicure treatment, beautiful feet with perfect nail polish, spa environment, relaxing atmosphere], Proporcje: [1:1]
    },
    {
      id: 3,
      category: 'stylizacja',
      // TODO: Prompt: [Stunning gel nail extensions with artistic design, colorful nail art, professional nail work, beautiful female hands], Proporcje: [1:1]
    },
    {
      id: 4,
      category: 'manicure',
      // TODO: Prompt: [Hybrid manicure in progress, nail technician working on client's nails, modern salon equipment, professional service], Proporcje: [1:1]
    },
    {
      id: 5,
      category: 'salon',
      // TODO: Prompt: [Modern nail salon interior, comfortable client chairs, elegant decor, clean and bright atmosphere, professional equipment], Proporcje: [16:9]
    },
    {
      id: 6,
      category: 'stylizacja',
      // TODO: Prompt: [Creative nail art designs, various colorful patterns, professional nail decoration work, artistic nail styling], Proporcje: [1:1]
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <h2 className="section-title gallery__title">Galeria Naszych Prac</h2>
        <p className="gallery__subtitle">
          Zobacz efekty naszej pracy i zainspiruj się na swoją następną wizytę
        </p>
        
        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery__item gallery__item--${item.category}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery__item-content">
                <div className="gallery__item-overlay">
                  <button className="gallery__item-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="gallery__modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="gallery__modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="gallery__modal-image">
              {/* Selected image would be displayed here */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="section-title contact__title">Skontaktuj się z nami</h2>
            <p className="contact__subtitle">
              Jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania
            </p>
            
            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <div className="contact__item-content">
                  <h3 className="contact__item-title">Adres</h3>
                  <p className="contact__item-text">1 Maja 15, 40-224 Katowice</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                </div>
                <div className="contact__item-content">
                  <h3 className="contact__item-title">Telefon</h3>
                  <p className="contact__item-text">732 676 016</p>
                </div>
              </div>
              
              <div className="contact__item">
                <div className="contact__item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
                  </svg>
                </div>
                <div className="contact__item-content">
                  <h3 className="contact__item-title">Social Media</h3>
                  <div className="contact__social">
                    <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact__hours">
              <h3 className="contact__hours-title">Godziny otwarcia</h3>
              <div className="contact__hours-list">
                <div className="contact__hours-item">
                  <span className="contact__hours-day">Poniedziałek - Piątek</span>
                  <span className="contact__hours-time">08:00 - 17:00</span>
                </div>
                <div className="contact__hours-item">
                  <span className="contact__hours-day">Sobota</span>
                  <span className="contact__hours-time">08:00 - 14:00</span>
                </div>
                <div className="contact__hours-item">
                  <span className="contact__hours-day">Niedziela</span>
                  <span className="contact__hours-time">Zamknięte</span>
                </div>
              </div>
            </div>
            
            <button 
              className="btn btn--primary contact__cta"
              onClick={() => window.open('https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice', '_blank')}
            >
              Umów wizytę online
            </button>
          </div>
          
          <div className="contact__map">
            <img src="/img/image_1.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="footer__logo">
              <img src="/logo.png" alt="Royal Nails" className="footer__logo-img" />
              <span className="footer__logo-text">Royal Nails</span>
            </div>
            <p className="footer__description">
              Profesjonalne studio paznokci w sercu Katowic. Tworzymy piękno z pasją.
            </p>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__title">Kontakt</h4>
            <ul className="footer__list">
              <li>1 Maja 15, 40-224 Katowice</li>
              <li>732 676 016</li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__title">Godziny</h4>
            <ul className="footer__list">
              <li>Pon-Pt: 08:00 - 17:00</li>
              <li>Sob: 08:00 - 14:00</li>
              <li>Nie: Zamknięte</li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__title">Znajdź nas</h4>
            <div className="footer__social">
              <a href="https://www.instagram.com/royal_nails_studio_paznokci/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Royal Nails. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [infoBarVisible, setInfoBarVisible] = useState(true);

  const closeInfoBar = () => {
    setInfoBarVisible(false);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('[class*="__"]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <InfoBar isVisible={infoBarVisible} onClose={closeInfoBar} />
      <Header infoBarVisible={infoBarVisible} />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;