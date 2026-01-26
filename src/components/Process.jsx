import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico financeiro inicial",
      description: "Análise completa da situação atual do seu restaurante."
    },
    {
      number: "02",
      title: "Organização da rotina",
      description: "Estruturação de todos os processos financeiros."
    },
    {
      number: "03",
      title: "Implantação de controles",
      description: "Implementação das ferramentas e controles necessários."
    },
    {
      number: "04",
      title: "Acompanhamento mensal",
      description: "Nós cuidamos do dia a dia para você focar na gestão."
    },
    {
      number: "05",
      title: "Relatórios e reuniões",
      description: "Apresentação periódica dos resultados e indicadores."
    }
  ];

  return (
    <section className="section section-process">
      <div className="container">
        <h2 className="section-title">Como Funciona na Prática</h2>

        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-number">{step.number}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-process {
          background-color: var(--white);
        }
        
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .timeline-item {
          display: flex;
          gap: 32px;
          margin-bottom: 40px;
          align-items: flex-start;
          position: relative;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-item:not(:last-child)::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 60px;
          bottom: -40px;
          width: 2px;
          background-color: var(--gray-200);
        }
        
        .timeline-number {
          background-color: var(--primary-color);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
          z-index: 1;
        }
        
        .timeline-content {
          padding-top: 10px;
        }
        
        .timeline-content h3 {
          font-size: 1.25rem;
          color: var(--secondary-color);
          margin-bottom: 8px;
        }
        
        .timeline-content p {
          color: var(--text-light);
        }
        
        @media (max-width: 768px) {
          .timeline-item {
            gap: 16px;
          }
          
          .timeline-number {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          
          .timeline-item:not(:last-child)::before {
            left: 20px;
            top: 40px;
          }
          
          .timeline-content h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
