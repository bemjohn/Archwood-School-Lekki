import React from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '@/assets/images';

interface ArchwoodGlanceProps {
  onOpenApply: () => void;
  onOpenFinance: () => void;
}

export const ArchwoodGlance: React.FC<ArchwoodGlanceProps> = ({ onOpenApply, onOpenFinance }) => {
  const stats = [
    { value: "100%", label: "Academic Excellence", sub: "Phonics & core mastery" },
    { value: "2026–27", label: "Admissions Open", sub: "Zero application fee" },
    { value: "1 : 8", label: "Teacher Ratio", sub: "Small class sizes" },
    { value: "100%", label: "Air-Conditioned", sub: "Conducive learning spaces" },
    { value: "Crèche - Gr 6", label: "School Level", sub: "Nursery & primary day school" },
    { value: "15+", label: "Co-Curriculars", sub: "Clubs & STEAM activities" },
    { value: "Plot 17", label: "Location", sub: "Ikota Villa, Lekki, Lagos" },
    { value: "5.0 ★", label: "Parent Rating", sub: "Verified family satisfaction" },
  ];

  return (
    <section id="glance" className="w-full bg-[#350C3B] text-white relative overflow-hidden">
      {/* Subtle school official logo watermark in background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-[500px] h-[500px]" fill="none" stroke="white" strokeWidth="2">
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="66" />
          <path d="M 100,38 C 95,78 74,97 56,92 C 45,95 68,128 100,165 C 132,128 155,95 144,92 C 126,97 105,78 100,38 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Side: Photo of Pupils */}
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
          <img
            src={images.pupilsGlance}
            alt="Archwood School Lekki Pupils in School Uniform"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#350C3B]/80 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Side: Royal Purple Stats Grid */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <div className="mb-10">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-amber-300 block mb-2">
              By The Numbers
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Archwood at a Glance
            </h2>
            <div className="w-16 h-1 bg-amber-400 mt-4" />
          </div>

          {/* Stats Grid - strict 4-col on desktop, 2-col on tablet, 1-col on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-5 bg-white/5 rounded-xl border border-white/10 min-h-[140px] h-full overflow-hidden"
              >
                <div className="text-xl lg:text-2xl font-bold font-serif text-white tracking-tight overflow-hidden text-ellipsis w-full">
                  {item.value}
                </div>
                {/* Accent line */}
                <div className="w-8 h-[2px] bg-amber-400 my-2" />
                <div className="text-sm font-semibold text-amber-200/90">
                  {item.label}
                </div>
                <div className="text-xs text-purple-100/70 mt-0.5">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-12 pt-8 border-t border-purple-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-purple-200">
              Admissions for <strong className="text-white">Academic Year 2026/2027</strong> now open.
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenFinance}
                className="text-xs font-semibold text-amber-300 hover:text-white transition-colors underline"
              >
                Tuition Finance Options
              </button>
              <button
                onClick={onOpenApply}
                className="bg-amber-400 hover:bg-amber-300 text-[#350C3B] font-bold text-xs px-4 py-2.5 rounded shadow transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>Enrol Your Child</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};