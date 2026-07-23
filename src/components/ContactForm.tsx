import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Clock,
  Sparkles,
  ShieldCheck,
  X,
} from 'lucide-react';
import { ADDRESS_INFO } from '../data/uxiData';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    studyType: 'eleitoral',
    sampleSize: '1000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Insira um e-mail válido.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefone/WhatsApp é obrigatório.';
    if (!formData.message.trim()) newErrors.message = 'Escreva detalhes do projeto.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#06b6d4', '#34d399'],
        });
      } catch (e) {
        // Fallback if canvas confetti fails in iframe
      }
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 relative bg-[#070b16] overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Address & Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400 tracking-wide uppercase">
                Atendimento 24/7/365
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Fale com Nossos <span className="text-gradient-emerald">Especialistas</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Não fechamos contratos apenas por questionários. Discutimos a fundo o
                seu projeto de pesquisa política, de opinião pública ou de mercado para
                garantir 100% de representatividade.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5 }}
                className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Sede Institucional
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {ADDRESS_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{ADDRESS_INFO.cep}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    E-mail Direto
                  </h4>
                  <a
                    href={`mailto:${ADDRESS_INFO.email}`}
                    className="text-sm font-semibold text-emerald-400 hover:underline block mt-0.5"
                  >
                    {ADDRESS_INFO.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Central de Atendimento
                  </h4>
                  <a
                    href={`tel:${ADDRESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-emerald-400 block mt-0.5"
                  >
                    {ADDRESS_INFO.phone}
                  </a>
                  <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">
                    Atenção 24 Horas / 365 Dias por Ano
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0a0f1e]/80 relative shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-white font-display border-b border-white/10 pb-4">
                Solicitar Proposta ou Orçamento
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome completo"
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="nome@empresa.com.br"
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telefone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(91) 98888-8888"
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Organização */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Empresa / Partido / Instituição
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    placeholder="Nome da sua organização"
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tipo de Estudo */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Tipo de Estudo
                  </label>
                  <select
                    value={formData.studyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studyType: e.target.value as any,
                      })
                    }
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 bg-[#0a0f1e]"
                  >
                    <option value="eleitoral">Pesquisa Eleitoral / Intenção de Voto</option>
                    <option value="opiniao">Estudo de Opinião Pública</option>
                    <option value="mercado">Pesquisa de Mercado / Marca</option>
                    <option value="outro">Outro Projeto Sob Medida</option>
                  </select>
                </div>

                {/* Tamanho da Amostra */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Amostra Estimada
                  </label>
                  <select
                    value={formData.sampleSize}
                    onChange={(e) =>
                      setFormData({ ...formData, sampleSize: e.target.value })
                    }
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 bg-[#0a0f1e]"
                  >
                    <option value="600">600 a 800 entrevistas</option>
                    <option value="1000">1.000 a 1.500 entrevistas</option>
                    <option value="2500">2.500 a 5.000 entrevistas</option>
                    <option value="nacional">Estudo Nacional de Larga Escala</option>
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Detalhes do Projeto *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Descreva o município/região alvo, prazos e principais objetivos da pesquisa..."
                  className="w-full glass-input p-4 rounded-xl text-sm"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 py-4 rounded-xl shadow-xl shadow-emerald-500/25 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando mensagem...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Falar com o Especialista UXI</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Submission Feedback Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-[#0a0f1e] p-8 rounded-3xl border border-emerald-500/30 max-w-md w-full relative shadow-2xl text-center space-y-6"
            >
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-display">
                  Proposta Solicitada!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Obrigado, <strong className="text-emerald-400">{formData.name}</strong>.
                  Sua solicitação foi recebida por nossa equipe técnica e um
                  especialista entrará em contato em breve.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left text-xs space-y-1.5 text-slate-300">
                <div className="font-bold text-emerald-400">Próximos Passos:</div>
                <ul className="space-y-1 text-slate-400 list-disc list-inside">
                  <li>Análise do plano amostral do seu município/estudo</li>
                  <li>Apresentação da estimativa de custo e cronograma de campo</li>
                  <li>Alinhamento direto de métricas e verificação de IP</li>
                </ul>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                Voltar ao Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
