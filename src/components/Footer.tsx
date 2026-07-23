import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';
import { ADDRESS_INFO } from '../data/uxiData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050812] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-0.5">
                <div className="w-full h-full bg-[#0a0f1e] rounded-[10px] flex items-center justify-center font-black text-emerald-400 text-sm">
                  UXI
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                UXI<span className="text-emerald-400">.</span> Pesquisas
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {ADDRESS_INFO.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ADDRESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ADDRESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ADDRESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Anchors */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação do Site
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">
                  Serviços & Pesquisas
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-emerald-400 transition-colors">
                  Metodologia Exclusiva
                </a>
              </li>
              <li>
                <a href="#qualidade" className="hover:text-emerald-400 transition-colors">
                  Controle de Qualidade (IP)
                </a>
              </li>
              <li>
                <a href="#desempenho" className="hover:text-emerald-400 transition-colors">
                  Comparativo de Desempenho
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition-colors">
                  Simulador de Amostra
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">
                  Sobre Marco Barros & UXI
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Endereço & Contato
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {ADDRESS_INFO.address} • {ADDRESS_INFO.cep}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${ADDRESS_INFO.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {ADDRESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${ADDRESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-emerald-400 transition-colors font-semibold text-slate-300"
                >
                  {ADDRESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} UXI Pesquisas. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <span>Sistemas com Verificação Auditável de IP</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 border border-white/10 transition-all cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
