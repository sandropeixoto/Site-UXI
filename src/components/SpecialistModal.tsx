import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Phone,
  Mail,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { ADDRESS_INFO } from '../data/uxiData';

interface SpecialistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialistModal: React.FC<SpecialistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-card bg-[#0a0f1e] p-6 sm:p-8 rounded-3xl border border-emerald-500/30 max-w-lg w-full relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">
                    Atendimento Direto 24/7/365
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    Fale com o Especialista UXI
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Preencha seus dados rápidos abaixo para agendar um contato direto com
                nossos especialistas em pesquisa eleitoral e de mercado.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Resumo do Projeto (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="Ex: Pesquisa eleitoral para município com 100k eleitores..."
                    className="w-full glass-input p-3 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  Solicitar Ligação Imediata
                </button>
              </form>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <a
                  href={`tel:${ADDRESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{ADDRESS_INFO.phone}</span>
                </a>
                <span>Belém - PA</span>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Solicitação Recebida!
              </h3>
              <p className="text-xs text-slate-300">
                Nossa equipe entrará em contato em instantes no número{' '}
                <strong className="text-emerald-400">{phone}</strong>.
              </p>
              <button
                onClick={onClose}
                className="w-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
