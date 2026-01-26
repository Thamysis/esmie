import React from 'react';
import { TrendingDown, Shuffle, AlertCircle, Clock, DollarSign } from 'lucide-react';

const Problems = () => {
    const problems = [
        {
            icon: <TrendingDown size={32} />,
            title: "Falta de controle financeiro diário",
            description: "Dificuldade em acompanhar o fluxo de caixa dia a dia."
        },
        {
            icon: <Shuffle size={32} />,
            title: "Mistura de finanças",
            description: "Confusão entre contas pessoais e do negócio."
        },
        {
            icon: <DollarSign size={32} />,
            title: "Incerteza sobre o lucro",
            description: "Dificuldade em saber se o restaurante realmente dá lucro."
        },
        {
            icon: <AlertCircle size={32} />,
            title: "Pagamentos atrasados",
            description: "Multas e juros desnecessários por falta de organização."
        },
        {
            icon: <Clock size={32} />,
            title: "Pouco tempo",
            description: "O dono não tem tempo para analisar os números."
        }
    ];

    return (
        <section className="section section-problems">
            <div className="container">
                <h2 className="section-title">O Problema das Empesas Hoje</h2>

                <div className="problems-grid">
                    {problems.map((problem, index) => (
                        <div key={index} className="problem-card">
                            <div className="icon-wrapper">
                                {problem.icon}
                            </div>
                            <h3>{problem.title}</h3>
                            <p>{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .section-problems {
          background-color: var(--white);
        }
        
        .problems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }
        
        .problem-card {
          background-color: var(--gray-100);
          padding: 32px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .problem-card:hover {
          transform: translateY(-5px);
        }
        
        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background-color: #fee2e2;
          color: #ef4444;
          border-radius: 50%;
          margin-bottom: 20px;
        }
        
        .problem-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--secondary-color);
        }
        
        .problem-card p {
          color: var(--text-light);
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
};

export default Problems;
