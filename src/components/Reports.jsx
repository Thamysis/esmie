import React from 'react';
import { BarChart2, FileText, PieChart, TrendingUp, Activity } from 'lucide-react';

const Reports = () => {
    const reports = [
        {
            icon: <Activity size={28} />,
            title: "Fluxo de caixa mensal"
        },
        {
            icon: <FileText size={28} />,
            title: "Demonstrativo de resultados (DRE)"
        },
        {
            icon: <PieChart size={28} />,
            title: "Relatório de despesas"
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Análise de lucratividade"
        },
        {
            icon: <BarChart2 size={28} />,
            title: "Indicadores financeiros"
        }
    ];

    return (
        <section className="section section-reports">
            <div className="container">
                <h2 className="section-title">Relatórios Que Você Vai Receber</h2>

                <div className="reports-grid">
                    {reports.map((report, index) => (
                        <div key={index} className="report-card">
                            <div className="report-icon">
                                {report.icon}
                            </div>
                            <p>{report.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .section-reports {
          background-color: var(--bg-color);
        }
        
        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }
        
        .report-card {
          background-color: white;
          padding: 32px 24px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .report-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .report-icon {
          color: var(--primary-color);
          background-color: rgba(76, 145, 144, 0.1);
          padding: 16px;
          border-radius: 50%;
        }
        
        .report-card p {
          font-weight: 600;
          color: var(--secondary-color);
        }
      `}</style>
        </section>
    );
};

export default Reports;
