import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      category: "Manicure",
      items: [
        { name: "Manicure hybrydowy - założenie", price: "145 zł", time: "1g" },
        { name: "Manicure hybrydowy - uzupełnienie", price: "140 zł", time: "1g" },
        { name: "Manicure męski", price: "100 zł", time: "45min" },
        { name: "Usunięcie żelu/hybrydy + manicure", price: "110 zł", time: "1g" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure podologiczny", price: "190 zł", time: "1g 30min" },
        { name: "Pedicure hybrydowy", price: "160 zł", time: "1g 30min" },
        { name: "Pedicure męski", price: "150 zł", time: "1g" },
        { name: "Opracowanie pękających pięt", price: "100 zł", time: "1g" }
      ]
    },
    {
      category: "Stylizacja żelowa",
      items: [
        { name: "Paznokcie żelowe z przedłużaniem", price: "180 zł", time: "2g" },
        { name: "Żel na naturalną płytkę", price: "150 zł", time: "1g 30min" },
        { name: "Rekonstrukcja paznokci obgryzionych", price: "190 zł", time: "2g" },
        { name: "Uzupełnienie stylizacji żelowej", price: "165 zł", time: "1g 30min" }
      ]
    },
    {
      category: "Usługi specjalistyczne",
      items: [
        { name: "Rekonstrukcja paznokcia", price: "50 zł", time: "30min" },
        { name: "Opracowanie paznokci zmienionych chorobowo", price: "110 zł", time: "45min" },
        { name: "French/Babyboomer/Ombre", price: "15 zł", time: "15min" },
        { name: "Naprawa paznokcia", price: "30 zł", time: "20min" }
      ]
    }
  ];

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__brand">
            <img src="/logo.png" alt="Royal Nails" className="navbar__logo" />
            <span className="navbar__title">Royal Nails</span>
          </div>
          <ul className="navbar__menu">
            {['hero', 'about', 'services', 'gallery', 'contact'].map(section => (
              <li key={section}>
                <button
                  className={`navbar__link ${activeSection === section ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === 'hero' ? 'Start' : 
                   section === 'about' ? 'O nas' :
                   section === 'services' ? 'Usługi' :
                   section === 'gallery' ? 'Galeria' : 'Kontakt'}
                </button>
              </li>
            ))}
          </ul>
          <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
             className="navbar__cta" target="_blank" rel="noopener noreferrer">
            Umów wizytę
          </a>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
          <div><img src="/img/image_3.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
        </div>
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__title-line">Royal Nails</span>
              <span className="hero__title-line">Studio Paznokci</span>
            </h1>
            <p className="hero__subtitle">
              Profesjonalna pielęgnacja dłoni i stóp w sercu Katowic. 
              Odkryj świat pięknych i zdrowych paznokci.
            </p>
            <div className="hero__actions">
              <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                 className="hero__cta-primary" target="_blank" rel="noopener noreferrer">
                Rezerwuj przez Booksy
              </a>
              <button 
                className="hero__cta-secondary"
                onClick={() => scrollToSection('services')}
              >
                Zobacz usługi
              </button>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-arrow"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__content">
              <h2 className="about__title">Dlaczego Royal Nails?</h2>
              <p className="about__description">
                Jesteśmy profesjonalnym studiem paznokci z wieloletnim doświadczeniem 
                w branży beauty. Nasze podejście łączy najnowsze techniki stylizacji 
                z indywidualną opieką nad każdym klientem.
              </p>
              
              <div className="about__features">
                <div className="about__feature">
                  <div className="about__feature-icon">💎</div>
                  <div className="about__feature-content">
                    <h3>Najwyższa jakość</h3>
                    <p>Używamy tylko sprawdzonych, profesjonalnych produktów najlepszych marek</p>
                  </div>
                </div>
                
                <div className="about__feature">
                  <div className="about__feature-icon">👩‍⚕️</div>
                  <div className="about__feature-content">
                    <h3>Doświadczenie</h3>
                    <p>Nasze stylistki posiadają certyfikaty i stale podnoszą swoje kwalifikacje</p>
                  </div>
                </div>
                
                <div className="about__feature">
                  <div className="about__feature-icon">🧴</div>
                  <div className="about__feature-content">
                    <h3>Higiena i bezpieczeństwo</h3>
                    <p>Sterylizujemy narzędzia zgodnie z najwyższymi standardami sanitarnymi</p>
                  </div>
                </div>
                
                <div className="about__feature">
                  <div className="about__feature-icon">⏰</div>
                  <div className="about__feature-content">
                    <h3>Punktualność</h3>
                    <p>Szanujemy Twój czas - wizyty zawsze odbywają się zgodnie z harmonogramem</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about__image">
              <div>{/* TODO: Prompt: [Professional nail technician working on client's nails in modern salon, clean and bright environment, focused on hands], Proporcje: [4:5] */}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="services__header">
            <h2 className="services__title">Nasze usługi</h2>
            <p className="services__subtitle">
              Kompleksowa pielęgnacja dłoni i stóp dostosowana do Twoich potrzeb
            </p>
          </div>
          
          <div className="services__grid">
            {services.map((category, index) => (
              <div key={index} className="services__category">
                <h3 className="services__category-title">{category.category}</h3>
                <div className="services__items">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="services__item">
                      <div className="services__item-content">
                        <h4 className="services__item-name">{service.name}</h4>
                        <span className="services__item-time">{service.time}</span>
                      </div>
                      <span className="services__item-price">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="services__cta">
            <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
               className="services__book-button" target="_blank" rel="noopener noreferrer">
              Zarezerwuj wizytę online
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <div className="gallery__header">
            <h2 className="gallery__title">Nasze prace</h2>
            <p className="gallery__subtitle">
              Zobacz przykłady naszych realizacji i przekonaj się o jakości naszej pracy
            </p>
          </div>
          
          <div className="gallery__grid">
            <div className="gallery__item gallery__item--large">
              <div><img src="/img/image_2.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: [Colorful hybrid nail polish collection, rainbow colors, glossy finish, artistic arrangement], Proporcje: [4:5] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: [Professional pedicure result, healthy toenails with pink polish, spa setting], Proporcje: [4:5] */}</div>
            </div>
            <div className="gallery__item gallery__item--wide">
              <div><img src="/img/image_1.png" alt="Royal Nails" style={{width: "100%", height: "100%", objectFit: "cover"}} /></div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: [Baby boomer nail design, subtle gradient, wedding manicure, elegant and classic], Proporcje: [4:5] */}</div>
            </div>
            <div className="gallery__item">
              <div>{/* TODO: Prompt: [Nail reconstruction before and after, damaged nails transformation, professional treatment], Proporcje: [4:5] */}</div>
            </div>
          </div>
          
          <div className="gallery__social">
            <p>Więcej naszych prac znajdziesz na:</p>
            <div className="gallery__social-links">
              <a href="https://www.instagram.com/royal_nails_studio_paznokci/" 
                 target="_blank" rel="noopener noreferrer" className="gallery__social-link">
                📸 Instagram
              </a>
              <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" 
                 target="_blank" rel="noopener noreferrer" className="gallery__social-link">
                👍 Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2 className="contact__title">Skontaktuj się z nami</h2>
              <p className="contact__subtitle">
                Zapraszamy do naszego studia w centrum Katowic. Umów się na wizytę już dziś!
              </p>
              
              <div className="contact__details">
                <div className="contact__detail">
                  <div className="contact__detail-icon">📍</div>
                  <div className="contact__detail-content">
                    <h3>Adres</h3>
                    <p>1 Maja 15<br />40-224 Katowice</p>
                  </div>
                </div>
                
                <div className="contact__detail">
                  <div className="contact__detail-icon">📞</div>
                  <div className="contact__detail-content">
                    <h3>Telefon</h3>
                    <a href="tel:732676016">732 676 016</a>
                  </div>
                </div>
                
                <div className="contact__detail">
                  <div className="contact__detail-icon">⏰</div>
                  <div className="contact__detail-content">
                    <h3>Godziny otwarcia</h3>
                    <div className="contact__hours">
                      <p>Pon - Pt: 08:00 - 17:00</p>
                      <p>Sobota: 08:00 - 14:00</p>
                      <p>Niedziela: Zamknięte</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact__booking">
                <h3>Umów wizytę online</h3>
                <a href="https://booksy.com/pl-pl/70992_royal-nails-studio-paznokci_paznokcie_11597_katowice" 
                   className="contact__booking-button" target="_blank" rel="noopener noreferrer">
                  Booksy - Rezerwacja online
                </a>
              </div>
              
              <div className="contact__social">
                <h3>Śledź nas</h3>
                <div className="contact__social-links">
                  <a href="https://www.instagram.com/royal_nails_studio_paznokci/" 
                     target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://www.facebook.com/p/Royal-Nails-Studio-Paznokci-i-Urody-100039030925035/" 
                     target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
              </div>
            </div>
            
            <div className="contact__map">
              <div>{/* TODO: Prompt: [Modern nail salon storefront in urban setting, glass windows, elegant signage, welcoming entrance], Proporcje: [4:5] */}</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <img src="/logo.png" alt="Royal Nails" className="footer__logo" />
              <span className="footer__title">Royal Nails</span>
            </div>
            <p className="footer__text">
              © 2024 Royal Nails Studio Paznokci. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;