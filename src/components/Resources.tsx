import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  FileText,
  Clock,
  Sparkles,
  Tag,
  CheckCircle2,
  X,
  FileCheck2,
} from 'lucide-react';
import { RESOURCES_DATA } from '../data/uxiData';
import { ResourceMaterial } from '../types';

export const Resources: React.FC = () => {
  const [downloadingResource, setDownloadingResource] =
    useState<ResourceMaterial | null>(null);
  const [downloadCompleted, setDownloadCompleted] = useState(false);

  const handleStartDownload = (resource: ResourceMaterial) => {
    setDownloadingResource(resource);
    setDownloadCompleted(false);

    // Simulate instant secure file generation
    setTimeout(() => {
      setDownloadCompleted(true);
    }, 1200);
  };

  return (
    <section id="recursos" className="py-24 relative bg-[#070b16] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

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
            Conhecimento & Transparência
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Materiais & <span className="text-gradient-emerald">Recursos de Pesquisa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Baixe nossos e-books metodológicos, relatórios de amostra com verificação
            de IP e estudos de caso de migração digital.
          </motion.p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES_DATA.map((resource, idx) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-emerald-300 transition-colors">
                  {resource.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{resource.readTime}</span>
                </div>

                <button
                  onClick={() => handleStartDownload(resource)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar Grátis</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Modal Simulation */}
      <AnimatePresence>
        {downloadingResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-[#0a0f1e] p-8 rounded-3xl border border-white/20 max-w-md w-full relative shadow-2xl text-center space-y-6"
            >
              <button
                onClick={() => setDownloadingResource(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {!downloadCompleted ? (
                <div className="space-y-4 py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                    <Download className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Gerando seu Download...
                  </h3>
                  <p className="text-xs text-slate-300">
                    Aguarde enquanto preparamos o arquivo PDF auditado de:{' '}
                    <strong className="text-emerald-400">
                      {downloadingResource.title}
                    </strong>
                  </p>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full animate-pulse w-3/4 rounded-full" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 py-2">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Download Concluído com Sucesso!
                  </h3>
                  <p className="text-xs text-slate-300">
                    O documento{' '}
                    <strong className="text-emerald-400">
                      {downloadingResource.title}
                    </strong>{' '}
                    ({downloadingResource.fileSize}) foi enviado para o seu dispositivo.
                  </p>
                  <button
                    onClick={() => setDownloadingResource(null)}
                    className="w-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
