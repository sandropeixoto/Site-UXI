import React from 'react';
import { motion } from 'motion/react';
import {
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { SOCIAL_POSTS, ADDRESS_INFO } from '../data/uxiData';

export const SocialFeed: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0a0f1e] overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

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
            <Instagram className="w-3.5 h-3.5 text-emerald-400" />
            <span>Siga no Instagram</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            UXI nas <span className="text-gradient-emerald">Redes Sociais</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Acompanhe nossas análises, bastidores de campo digital e pílulas de
            inteligência eleitoral e de mercado no Instagram{' '}
            <strong className="text-emerald-400">@uxipesquisa</strong>.
          </motion.p>
        </div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SOCIAL_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Profile */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 p-0.5">
                      <div className="w-full h-full bg-[#0a0f1e] rounded-full flex items-center justify-center font-bold text-xs text-emerald-400">
                        UXI
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-display">
                        {post.username}
                      </h4>
                      <p className="text-[10px] text-slate-400">{post.handle}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {post.date}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {post.content}
                </p>
              </div>

              {/* Interaction Metrics Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
                    <Heart className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-semibold text-slate-300">{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-semibold text-slate-300">{post.comments}</span>
                  </span>
                </div>

                <a
                  href={ADDRESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Ver Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={ADDRESS_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Siga @uxipesquisa no Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
