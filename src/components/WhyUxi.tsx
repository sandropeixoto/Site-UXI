import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Target,
  Cpu,
  DollarSign,
  Clock,
  Shield,
  UserCheck,
  Award,
  Sparkles,
  Quote,
} from 'lucide-react';
import { REASONS_DATA, LEADERSHIP_DATA } from '../data/uxiData';

export const WhyUxi: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative bg-[#070b16] overflow-hidden">
      {/* Background Section Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

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
            Tradição & Inovação
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Por Que Escolher o <span className="text-gradient-emerald">Sistema UXI</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Nosso nome é UXI, e nosso sobrenome é comprometimento e resultado.
          </motion.p>
        </div>

        {/* 3 Core Pillars Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-3xl border border-white/10 mb-16 bg-gradient-to-r from-emerald-950/30 via-[#0a0f1e] to-cyan-950/30"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              A Base do Nosso Sistema
            </span>
            <h3 className="text-2xl font-bold text-white font-display mt-1">
              Formação Acadêmica e Prática em 3 Áreas Fundamentais
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '1. Pesquisa', desc: 'Metodologia científica, plano amostral rigoroso e sociologia de dados.' },
              { title: '2. Tecnologia', desc: 'Algoritmos autônomos, checagem de IP, anti-bot e geolocalização.' },
              { title: '3. Rede Social', desc: 'Mídia direcionada, alcance orgânico e engajamento em escala nacional.' },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-lg font-bold text-emerald-400 font-display">
                  {pillar.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership & History Profile (Marco Barros) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent text-center lg:text-left">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-1 mx-auto lg:mx-0 mb-6 shadow-xl shadow-emerald-500/20">
                <div className="w-full h-full bg-[#0a0f1e] rounded-[14px] flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-10 h-10" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  Fundador & Pioneiro
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-2">
                  {LEADERSHIP_DATA.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  {LEADERSHIP_DATA.role}
                </p>
                <p className="text-xs text-slate-400">{LEADERSHIP_DATA.experience}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-left">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {LEADERSHIP_DATA.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote & Reasons List */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Quote Box */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 relative">
              <Quote className="w-8 h-8 text-emerald-400/30 absolute top-4 right-4" />
              <blockquote className="text-sm sm:text-base italic text-slate-200 font-light leading-relaxed pr-8">
                &ldquo;{LEADERSHIP_DATA.quote}&rdquo;
              </blockquote>
              <p className="text-xs font-bold text-emerald-400 mt-3">— Marco Barros</p>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REASONS_DATA.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-colors space-y-1.5"
                >
                  <h4 className="text-xs font-bold text-white font-display flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{reason.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
