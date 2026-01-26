import React from 'react';
import { CheckCircle, Calculator, FileText, CreditCard, PieChart } from 'lucide-react';

const Solution = () => {
    const services = [
        {
            icon: <CheckCircle size={24} />,
            text: "Controle diário de entradas e saídas"
        },
        {
            icon: <CheckCircle size={24} />,
            text: "Conciliação bancária"
        },
        {
            icon: <CheckCircle size={24} />,
            text: "Contas a pagar e a receber"
        },
        {
            icon: <FileText size={24} />,
            text: "Organização de notas fiscais"
        },
        {
            icon: <Calculator size={24} />,
            text: "Controle de fluxo de caixa"
        },
        {
            icon: <PieChart size={24} />,
            text: "Relatórios financeiros claros e objetivos"
        },
        {
            icon: <CheckCircle size={24} />,
            text: "Controle de vendas por canal (salão, delivery, apps)"
        },
        {
            icon: <CreditCard size={24} />,
            text: "Controle de taxas de aplicativos e cartões"
        }
    ];

    return (
        <section className="section section-solution">
            <div className="container">
                <h2 className="section-title">O Que Fazemos pelo Seu Restaurante</h2>

                <div className="solution-content">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-item">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <span>{service.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="cta-container">
                        <h3 className="cta-title">E O QUE VOCÊ PRECISA? Nos conte!</h3>
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .section-solution {
          background-color: var(--secondary-color);
          color: white;
        }
        
        .section-solution .section-title {
          color: white;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }
        
        .service-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(4px);
        }
        
        .service-icon {
          color: var(--primary-color);
          background-color: white;
          padding: 8px;
          border-radius: 50%;
          display: flex;
        }
        
        .cta-container {
          text-align: center;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 16px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 24px;
        }
      `}</style>
        </section>
    );
};

export default Solution;
