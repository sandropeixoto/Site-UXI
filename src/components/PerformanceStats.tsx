import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, CheckCircle2, DollarSign, ArrowUpRight } from 'lucide-react';
import { METRICS_DATA } from '../data/uxiData';

export const PerformanceStats: React.FC = () => {
  return (
    <section id="desempenho" className="py-24 relative bg-[#0a0f1e] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-cyan-400 tracking-wide uppercase"
          >
            Comparativo de Desempenho
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Baixo Custo e <span className="text-gradient-emerald">Alta Eficiência</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            A migração de estudos para o formato digital online expande o alcance, reduz
            o tempo de campo e alavanca os resultados operacionais do seu orçamento.
          </motion.p>
        </div>

        {/* 3 Metrics Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {METRICS_DATA.map((metric, idx) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {metric.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-5xl sm:text-6xl font-extrabold text-white font-display tracking-tight text-gradient-emerald my-4">
                  {metric.value}
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {metric.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {metric.description}
                </p>
              </div>

              {/* Visual Progress Bar */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Eficiência Métria UXI</span>
                  <span className="text-emerald-400">{metric.value}</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.numericValue}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Traditional vs UXI Direct Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 bg-slate-950/40"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              Pesquisa Presencial Tradicional vs. Sistema Digital UXI
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Entenda o impacto direto em cada parâmetro operacional do seu projeto
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                feature: 'Logística de Campo',
                traditional: 'Entrevistadores de rua com custos elevados de deslocamento e pranchas.',
                uxi: 'Coleta autônoma online através de mídias sociais e painéis geo-localizados.',
              },
              {
                feature: 'Tempo de Coleta e Entrega',
                traditional: 'Semanas de preenchimento, digitação manual e tabulação lenta.',
                uxi: 'Tracking em tempo real com relatórios parciais imediatos e entrega 80% mais rápida.',
              },
              {
                feature: 'Auditoria de Autenticidade',
                traditional: 'Amostragem sujeita a falha humana e pouca rastreabilidade de campo.',
                uxi: 'Anexo de IP, geolocalização e carimbo de data/hora oficial no relatório final.',
              },
              {
                feature: 'Custo Total por Questionário',
                traditional: 'Alto custo operacional acumulado com baixa flexibilidade de cota.',
                uxi: 'Economia de 65% com investimento direcionado para amplitude de amostra.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="md:col-span-3 text-sm font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{item.feature}</span>
                </div>
                <div className="md:col-span-4 text-xs text-slate-400 bg-red-500/5 p-3 rounded-xl border border-red-500/10">
                  <strong className="text-red-400 block mb-1 uppercase tracking-wider text-[10px]">
                    Método Tradicional:
                  </strong>
                  {item.traditional}
                </div>
                <div className="md:col-span-5 text-xs text-slate-200 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <strong className="text-emerald-400 block mb-1 uppercase tracking-wider text-[10px]">
                    Vantagem Sistema UXI:
                  </strong>
                  {item.uxi}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
