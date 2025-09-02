import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure podologiczny", price: 190, time: "1g 30min" },
        { name: "Pedicure podologiczny z hybrydą", price: 240, time: "1g 45min" },
        { name: "Pedicure hybrydowy", price: 160, time: "1g 30min" },
        { name: "Pedicure żelowy", price: 160, time: "1g 30min" },
        { name: "Pedicure bez malowania", price: 140, time: "45min" },
        { name: "Pedicure męski", price: 150, time: "1g" },
        { name: "Opracowanie pękających pięt", price: 100, time: "1g" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: 180, time: "2g" },
        { name: "Żel na naturalną płytkę (krótkie)", price: 150, time: "1g 30min" },
        { name: "Żel na naturalną płytkę (długie)", price: 170, time: "1g 30min" },
        { name: "Uzupełnienie stylizacji żelowej", price: 165, time: "1g 30min" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: 190, time: "2g" }
      ]
    },
    {
      category: "Manicure hybrydowy",
      items: [
        { name: "Manicure hybrydowy – założenie", price: 145, time: "1g" },
        { name: "Manicure hybrydowy – uzupełnienie", price: 140, time: "1g" },
        { name: "Manicure hybrydowy po innej stylistce", price: 150, time: "1g 15min" },
        { name: "Manicure męski", price: 100, time: "45min" }
      ]
    }
  ];

  const workingHours = [
    { day: "Poniedziałek", hours: "08:00 - 17:00" },
    { day: "Wtorek", hours: "08:00 - 17:00" },
    { day: "Środa", hours: "08:00 - 17:00" },
    { day: "Czwartek", hours: "08:00 - 17:00" },
    { day: "Piątek", hours: "08:00 - 17:00" },
    { day: "Sobota", hours: "08:00 - 14:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  const smoothScroll = (target) => {
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <nav className="nav" style={{ transform: `translateY(${scrollY > 100 ? '-5px' : '0'})` }}>
        <div className="nav__container">
          <div className="nav__logo">
            <img src="/logo.png" alt="Royal Nails" className="nav__logo-img" />
            <span className="nav__logo-text">Royal Nails</span>
          </div>
          
          <div className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
            <a href="#home" onClick={() => smoothScroll('home')} className="nav__link">Strona główna</a>
            <a href="#about" onClick={() => smoothScroll('about')} className="nav__link">O nas</a>
            <a href="#services" onClick={() => smoothScroll('services')} className="nav__link">Usługi</a>
            <a href="#gallery" onClick={() => smoothScroll('gallery')} className="nav__link">Galeria</a>
            <a href="#contact" onClick={() => smoothScroll('contact')} className="nav__link">Kontakt</a>
          </div>

          <button 
            className={`nav__burger ${isMenuOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main className="main">
        <section id="home" className="hero">
          <div className="hero__background">
            <div>{/* TODO: Prompt: Elegant nail salon interior with modern manicure stations, soft lighting, and comfortable chairs in white and gold color scheme, Proporcje: [16:9] */}</div>
            <div className="hero__overlay"></div>
          </div>
          
          <div className="hero__content">
            <div className="hero__floating-element hero__floating-element--1"></div>
            <div className="hero__floating-element hero__floating-element--2"></div>
            
            <h1 className="hero__title" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
              <span className="hero__title-main">Royal Nails</span>
              <span className="hero__title-sub">Studio Paznokci i Urody</span>
            </h1>
            
            <p className="hero__description">
              Profesjonalne usługi manicure i pedicure w sercu Katowic. 
              Zadbamy o Twoje paznokcie z najwyższą starannością.
            </p>
            
            <div className="hero__buttons">
              <button 
                className="btn btn--primary btn--morph"
                onClick={() => smoothScroll('services')}
              >
                Nasze usługi
              </button>
              <a 
                href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--morph"
              >
                Umów wizytę
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about" data-animate>
          <div className="container">
            <div className={`about__content ${isVisible.about ? 'animate-in' : ''}`}>
              <div className="about__text">
                <h2 className="section__title">O Royal Nails</h2>
                <p className="about__description">
                  Royal Nails to profesjonalne studio paznokci i urody, które od lat 
                  specjalizuje się w najwyższej jakości usługach manicure i pedicure. 
                  Nasza pasja to tworzenie pięknych, zdrowych paznokci oraz zapewnienie 
                  niezapomnianej relaksującej atmosfery.
                </p>
                <div className="about__features">
                  <div className="feature">
                    <div className="feature__icon">✨</div>
                    <h3 className="feature__title">Wysokiej jakości produkty</h3>
                    <p>Używamy tylko sprawdzonych, bezpiecznych kosmetyków</p>
                  </div>
                  <div className="feature">
                    <div className="feature__icon">👩‍💼</div>
                    <h3 className="feature__title">Doświadczony zespół</h3>
                    <p>Nasi specjaliści mają wieloletnie doświadczenie</p>
                  </div>
                  <div className="feature">
                    <div className="feature__icon">🏆</div>
                    <h3 className="feature__title">Indywidualne podejście</h3>
                    <p>Każdy klient otrzymuje personalizowaną obsługę</p>
                  </div>
                </div>
              </div>
              <div className="about__image">
                <div>{/* TODO: Prompt: Professional nail technician working on client's nails in modern salon, focused hands applying nail polish, elegant and clean workspace, Proporcje: [1:1] */}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services" data-animate>
          <div className="container">
            <h2 className={`section__title ${isVisible.services ? 'animate-in' : ''}`}>
              Nasze usługi
            </h2>
            
            <div className="services__grid">
              {services.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className={`service-category ${isVisible.services ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <h3 className="service-category__title">{category.category}</h3>
                  <div className="service-category__items">
                    {category.items.map((service, index) => (
                      <div key={index} className="service-item">
                        <div className="service-item__info">
                          <h4 className="service-item__name">{service.name}</h4>
                          <span className="service-item__time">{service.time}</span>
                        </div>
                        <span className="service-item__price">{service.price} zł</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery" data-animate>
          <div className="container">
            <h2 className={`section__title ${isVisible.gallery ? 'animate-in' : ''}`}>
              Galeria naszych prac
            </h2>
            
            <div className="gallery__grid">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div 
                  key={index}
                  className={`gallery__item ${isVisible.gallery ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>{/* TODO: Prompt: Beautiful nail art designs, elegant manicure with gel polish, professional nail styling, close-up of hands with perfect nails, Proporcje: [1:1] */}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact" data-animate>
          <div className="container">
            <h2 className={`section__title ${isVisible.contact ? 'animate-in' : ''}`}>
              Kontakt
            </h2>
            
            <div className="contact__content">
              <div className={`contact__info ${isVisible.contact ? 'animate-in' : ''}`}>
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
                    <p>732 676 016</p>
                  </div>
                </div>
                
                <div className="contact__item">
                  <div className="contact__icon">🕒</div>
                  <div>
                    <h3>Godziny otwarcia</h3>
                    <div className="working-hours">
                      {workingHours.map((day, index) => (
                        <div key={index} className="working-hours__item">
                          <span className="day">{day.day}</span>
                          <span className="hours">{day.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`contact__social ${isVisible.contact ? 'animate-in' : ''}`}>
                <h3>Znajdź nas w sieci</h3>
                <div className="social-links">
                  <a 
                    href="https://www.instagram.com/royal_nails_studio_paznokci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">📷</span>
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">👥</span>
                    Facebook
                  </a>
                  <a 
                    href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link social-link--booksy"
                  >
                    <span className="social-icon">📅</span>
                    Umów wizytę przez Booksy
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
            <div className="footer__logo">
              <img src="/logo.png" alt="Royal Nails" className="footer__logo-img" />
              <span>Royal Nails Studio</span>
            </div>
            <p className="footer__text">
              © 2024 Royal Nails Studio Paznokci i Urody. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;