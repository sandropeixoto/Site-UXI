import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  UserPlus,
  Compass,
  Target,
  FileCheck2,
  CheckCircle,
  Clock,
  MapPin,
  Globe,
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/uxiData';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 relative bg-[#0a0f1e] overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

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
            Ciência de Dados & Sociologia Aplicada
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Nossa Metodologia <span className="text-gradient-emerald">Exclusiva</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Aliamos três décadas e meia de história em pesquisas analógicas à precisão
            dos algoritmos de captação digital no Brasil.
          </motion.p>
        </div>

        {/* 3 Main Pillars Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Diferencial */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Diferencial de 35 Anos
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Criamos um sistema de produção de dados primários onde pessoas reais nos
                dizem seus desejos, anseios e insatisfação com o cenário político ou
                com marcas e produtos, superando abordagens estáticas.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Pessoas Reais & Opinião Viva</span>
            </div>
          </motion.div>

          {/* Card 2: Amostras Representativas */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Amostras 100% Representativas
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Perseguimos ativamente as metas por cota (gênero, idade, renda,
                geolocalização e comportamento), criando mecanismos em comunicação e
                tecnologia de dados para 100% de êxito na meta amostral.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-cyan-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Estratificação de Precisão</span>
            </div>
          </motion.div>

          {/* Card 3: Controle e Anexo de IP */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Auditoria & Anexo de IP
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Implementamos rigorosos protocolos de verificação. Informações como
                número de IP, localização exata e horário de preenchimento são
                anexados ao relatório entregue ao cliente.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>IP • Horário • Coordenadas</span>
            </div>
          </motion.div>
        </div>

        {/* Workflow Process Cards (Capturamos, Verificamos, Aprovamos) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-[#0a0f1e] to-white/[0.03] shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white font-display">
              As 3 Etapas da Nossa Linha de Produção de Dados
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Garantia de integridade absoluta do convite ao relatório final
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const icons = [UserPlus, ShieldCheck, Award];
              const StepIcon = icons[idx];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative space-y-4 text-center md:text-left bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-emerald-400 font-display">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Highlight Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 pt-8 border-t border-white/10 text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-base sm:text-lg italic text-slate-200 font-light leading-relaxed">
              &ldquo;Nossa metodologia inovadora combina o melhor da tecnologia com
              experiência em pesquisas políticas e de mercado, permitindo estudos mais
              abrangentes, precisos e econômicos do que os métodos tradicionais.&rdquo;
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
