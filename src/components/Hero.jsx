import React from 'react';
import logo from '../assets/logo_placeholder.svg';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Esmie BPO Financeiro" className="logo" />
            <span className="logo-text">Esmie BPO</span>
          </div>
          <a href="#contact" className="btn btn-primary">Fale Conosco</a>
        </nav>

        <div className="hero-content animate-fade-in">
          <h1>BPO FINANCEIRO <span className="highlight">ESPECIALIZADO</span></h1>
          <p className="hero-subtitle">
            Nós assumimos toda a rotina financeira do seu restaurante, de forma profissional, organizada e transparente.
            <br />
            Você ganha <strong>tempo, clareza e controle total</strong> do negócio.
          </p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Quero Organizar Meu Restaurante
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: var(--bg-color);
          padding-bottom: 80px;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: var(--header-height);
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--secondary-color);
        }
        
        .logo {
          width: 40px;
          height: 40px;
        }
        
        .hero-content {
          text-align: center;
          margin-top: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          color: var(--secondary-color);
        }
        
        .highlight {
          color: var(--primary-color);
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-light);
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .btn-lg {
          padding: 16px 32px;
          font-size: 1.125rem;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          .hero-content {
            margin-top: 40px;
          }
        }
      `}</style>
    </header>
  );
};

export default Hero;
