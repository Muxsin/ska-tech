
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScv6iDEEeL4jxPwoQKnQp6Mm6-9iGVOhedXtnKlhg0FjJ8WXg/viewform";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main CTA Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 dark:bg-[#080808] border border-slate-200 dark:border-white/5 shadow-2xl group transform-gpu">
          
          {/* --- BACKGROUND EFFECTS (Optimized) --- */}
          
          {/* 1. Grid Pattern - Reduced opacity */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          {/* 2. Gradient Orbs - Static instead of animated for performance */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 blur-[60px] rounded-full mix-blend-screen pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-brand-dark dark:text-brand text-[11px] font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              {t('cta.badge')}
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-xl">
              {t('cta.title')}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              {t('cta.desc')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-white text-slate-900 px-8 py-3.5 font-bold text-sm transition-all hover:bg-brand hover:text-white hover:scale-105 shadow-lg shadow-white/5 inline-flex"
              >
                 <span className="relative flex items-center justify-center gap-2 w-full">
                   {t('cta.book')} <ArrowRight className="w-4 h-4" />
                 </span>
              </a>
              
              <a 
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 font-bold text-white text-sm transition-all hover:bg-white/10 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-white/20 inline-flex"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                {t('cta.contact')}
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
