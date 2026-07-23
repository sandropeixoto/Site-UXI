import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Lock,
  MailCheck,
  Database,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  X,
  Info,
} from 'lucide-react';
import { QUALITY_PILLARS } from '../data/uxiData';
import { QualityControlPillar } from '../types';

export const QualityControl: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<QualityControlPillar | null>(
    null
  );

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-cyan-400" />;
      case 'MailCheck':
        return <MailCheck className="w-6 h-6 text-emerald-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="qualidade" className="py-24 relative bg-[#070b16] overflow-hidden">
      {/* Background Section Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            Segurança de Dados & Anti-Fraude
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Controle de Qualidade <span className="text-gradient-emerald">Totalmente Garantido</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Nossa primeira linha de defesa garante que os convites sejam apresentados
            apenas a usuários genuínos com atividade humana verificada nas redes sociais.
          </motion.p>
        </div>

        {/* 6 Quality Control Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALITY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: 'easeOut' }}
              onClick={() => setSelectedPillar(pillar)}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pillar.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                <span>Ver protocolo completo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-950/20 to-cyan-950/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Protocolos Sempre Atualizados
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Nossas camadas de segurança neutralizam tentativas de duplicação, bots e VPNs em tempo real.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="whitespace-nowrap text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
          >
            Solicitar Demonstração Técnica
          </a>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-[#0a0f1e] p-8 rounded-3xl border border-white/20 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  {getPillarIcon(selectedPillar.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    {selectedPillar.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPillar.fullDesc}
                </p>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <Info className="w-4 h-4" />
                    <span>Como este dado é registrado no relatório?</span>
                  </div>
                  <p className="text-slate-400">
                    Ao final do estudo, os metadados referentes a esta etapa de
                    verificação são exportados com hash de segurança e anexados à
                    documentação oficial do cliente.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPillar(null)}
                className="w-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Entendi
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
