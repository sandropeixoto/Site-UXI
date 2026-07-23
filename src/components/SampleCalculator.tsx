import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  Users,
} from 'lucide-react';

interface SampleCalculatorProps {
  onOpenSpecialist: () => void;
}

export const SampleCalculator: React.FC<SampleCalculatorProps> = ({
  onOpenSpecialist,
}) => {
  const [population, setPopulation] = useState<number>(200000);
  const [marginOfError, setMarginOfError] = useState<number>(3.5);
  const [confidenceLevel, setConfidenceLevel] = useState<number>(95);
  const [studyType, setStudyType] = useState<string>('eleitoral');

  // Statistical Cochran sample size calculation for finite population
  const calculateSample = () => {
    const Z = confidenceLevel === 99 ? 2.576 : 1.96;
    const p = 0.5; // max variability
    const e = marginOfError / 100;

    const n0 = (Math.pow(Z, 2) * p * (1 - p)) / Math.pow(e, 2);
    const n = n0 / (1 + (n0 - 1) / population);

    return Math.round(n);
  };

  const recommendedSample = calculateSample();

  // Field duration estimate based on sample size
  const calculateDays = () => {
    if (recommendedSample < 800) return '2 a 3 dias úteis';
    if (recommendedSample < 1500) return '3 a 4 dias úteis';
    return '4 a 6 dias úteis';
  };

  // Cost estimate comparison
  const estimatedTraditionalCost = recommendedSample * 85; // approx R$ 85 per face-to-face questionnaire
  const estimatedUxiCost = Math.round(estimatedTraditionalCost * 0.35); // 65% reduction
  const savings = estimatedTraditionalCost - estimatedUxiCost;

  return (
    <section id="simulador" className="py-24 relative bg-[#0a0f1e] overflow-hidden">
      {/* Background Section Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400 tracking-wide uppercase"
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Simulador Interativo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Simulador de Amostra e <span className="text-gradient-emerald">Economia UXI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Ajuste os parâmetros do seu município, estado ou mercado e veja
            instantaneamente o dimensionamento da amostra e a estimativa de retorno.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6"
          >
            <h3 className="text-xl font-bold text-white font-display border-b border-white/10 pb-4">
              Configurar Parâmetros de Pesquisa
            </h3>

            {/* Study Type Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Tipo de Estudo
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'eleitoral', label: 'Eleitoral' },
                  { id: 'opiniao', label: 'Opinião Pública' },
                  { id: 'mercado', label: 'Mercado' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setStudyType(type.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      studyType === type.id
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Population Input Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-300">População / Eleitorado Alvo</span>
                <span className="text-emerald-400 font-bold">
                  {population.toLocaleString('pt-BR')} habitantes/eleitores
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="2000000"
                step="5000"
                value={population}
                onChange={(e) => setPopulation(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>5.000 (Pequeno município)</span>
                <span>2.000.000+ (Capital / Estado)</span>
              </div>
            </div>

            {/* Margin of Error Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Margem de Erro Desejada
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 2.0, label: '± 2.0%' },
                  { value: 3.5, label: '± 3.5%' },
                  { value: 5.0, label: '± 5.0%' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setMarginOfError(item.value)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      marginOfError === item.value
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Confidence Level */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Nível de Confiança Estatístico
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 95, label: '95% (Padrão Estatístico)' },
                  { value: 99, label: '99% (Alta Rigidez)' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setConfidenceLevel(item.value)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      confidenceLevel === item.value
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Result Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 via-[#0a0f1e] to-cyan-950/20 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Resultado Estimado
                </span>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-bold">
                  Fórmula Cochran
                </span>
              </div>

              {/* Big Sample Size */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  Tamanho da Amostra Calculada:
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-display text-gradient-emerald">
                  {recommendedSample.toLocaleString('pt-BR')}{' '}
                  <span className="text-sm font-normal text-slate-300">entrevistas</span>
                </div>
              </div>

              {/* Days & Savings info */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 space-y-1">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Tempo de Campo
                  </div>
                  <div className="text-sm font-bold text-white">{calculateDays()}</div>
                </div>

                <div className="bg-emerald-500/10 p-3.5 rounded-2xl border border-emerald-500/20 space-y-1">
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Economia Est.
                  </div>
                  <div className="text-sm font-extrabold text-emerald-300">
                    ~ 65% de Custo
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                *Cálculo estimativo para planejamento amostral. Entre em contato com
                nossos sociólogos e estatísticos para fechar o plano amostral exato
                por cota.
              </p>
            </div>

            <button
              onClick={onOpenSpecialist}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 py-3.5 rounded-xl shadow-xl shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <span>Solicitar Plano Amostral Oficial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
