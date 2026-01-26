import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-content">
        <div className="cta-final">
          <h2>Está em dúvida?</h2>
          <p>Mande uma mensagem e vamos conversar sobre seu restaurante!</p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Falar no WhatsApp
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Esmie BPO Financeiro. Todos os direitos reservados.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--secondary-color);
          color: white;
          padding-top: 60px;
          padding-bottom: 30px;
        }
        
        .footer-content {
          text-align: center;
        }
        
        .cta-final {
          background-color: var(--white);
          color: var(--text-color);
          padding: 60px;
          border-radius: 16px;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-final h2 {
          color: var(--secondary-color);
          font-size: 2rem;
          margin-bottom: 16px;
        }
        
        .cta-final p {
          color: var(--text-light);
          margin-bottom: 32px;
          font-size: 1.1rem;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        @media (max-width: 768px) {
          .cta-final {
            padding: 40px 24px;
            margin-bottom: 40px;
          }
          
          .cta-final h2 {
            font-size: 1.5rem;
          }
          
          .footer {
            padding-top: 40px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
