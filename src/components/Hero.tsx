import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Sparkles,
  BarChart3,
  Globe2,
} from 'lucide-react';
import { HERO_DATA } from '../data/uxiData';

interface HeroProps {
  onOpenSpecialist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSpecialist }) => {
  // Live demo widget state for interactive engagement
  const [votedOption, setVotedOption] = useState<number | null>(0);
  const [pollVotes, setPollVotes] = useState([48, 37, 15]);

  const handleVote = (index: number) => {
    if (votedOption === index) return;
    const newVotes = [...pollVotes];
    if (votedOption !== null) {
      newVotes[votedOption] -= 1;
    }
    newVotes[index] += 1;
    setPollVotes(newVotes);
    setVotedOption(index);
  };

  const totalVotes = pollVotes.reduce((a, b) => a + b, 0);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#0a0f1e]">
      {/* Subtle Background Glow Orbs - Dark Emerald & Cyan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-slate-900/60 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-500/5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>{HERO_DATA.badge}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12]">
              Sistema de Pesquisa UXI:{' '}
              <span className="text-gradient-emerald block mt-1">
                Revolucionando as Pesquisas Digitais
              </span>{' '}
              no Brasil
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {HERO_DATA.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenSpecialist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 px-7 py-4 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Fale com o Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#metodologia"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-4 rounded-xl backdrop-blur-md transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Conheça Nossa Metodologia</span>
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-extrabold text-white font-display tracking-tight text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Lateral Glass Card + Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Floating Element 1 - Top Right Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 sm:-right-6 z-20 hidden sm:flex items-center gap-3 glass-card px-4 py-2.5 rounded-2xl border-emerald-500/30 shadow-2xl bg-[#0a0f1e]/80"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Geolocalização
                </p>
                <p className="text-xs font-semibold text-slate-100">
                  100% Brasil • IP Auditável
                </p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Bottom Left Badge */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-3 glass-card px-4 py-2.5 rounded-2xl border-cyan-500/30 shadow-2xl bg-[#0a0f1e]/80"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Redução de Custo
                </p>
                <p className="text-xs font-semibold text-emerald-400">
                  -65% vs Presencial
                </p>
              </div>
            </motion.div>

            {/* Main Interactive Poll Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Demo Interativa • Painel UXI
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  <Globe2 className="w-3 h-3 text-cyan-400" />
                  Campo Ativo
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    Qual o principal fator decisivo na escolha de uma pesquisa estratégica?
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulação de amostra digital em tempo real (Clique para testar)
                  </p>
                </div>

                {/* Poll Options */}
                <div className="space-y-2.5">
                  {[
                    { label: 'Precisão e Velocidade nos dados', icon: BarChart3 },
                    { label: 'Redução de Custos e ROI alto', icon: TrendingUp },
                    { label: 'Auditabilidade e Segurança de IP', icon: ShieldCheck },
                  ].map((opt, idx) => {
                    const percentage = Math.round(
                      (pollVotes[idx] / totalVotes) * 100
                    );
                    const isSelected = votedOption === idx;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleVote(idx)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all relative overflow-hidden group cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/[0.08] hover:border-white/20'
                        }`}
                      >
                        {/* Progress Bar background */}
                        <div
                          className="absolute top-0 bottom-0 left-0 bg-emerald-500/20 transition-all duration-500 ease-out pointer-events-none"
                          style={{ width: `${percentage}%` }}
                        />

                        <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm font-semibold">
                          <div className="flex items-center gap-2.5">
                            <opt.icon
                              className={`w-4 h-4 ${
                                isSelected ? 'text-emerald-400' : 'text-slate-400'
                              }`}
                            />
                            <span>{opt.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-emerald-400">
                              {percentage}%
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Total Respondents counter */}
                <div className="pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Amostra acumulada: <strong className="text-white">1.482.930</strong> respostas
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    100% Autônomo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
