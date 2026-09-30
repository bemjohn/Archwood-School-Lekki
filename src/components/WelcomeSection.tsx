import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Check,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Sparkles,
  ArrowRight,
  Volume2,
  VolumeX,
  Maximize2,
} from 'lucide-react';
import { ArchwoodOfficialEmblem } from './CrestLogo';
import { images } from '@/assets/images';

interface WelcomeSectionProps {
  onOpenVideoTour: () => void;
  onOpenApply: () => void;
  onOpenInquiry: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  onOpenVideoTour,
  onOpenApply,
  onOpenInquiry,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Simulate video playback progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };
  return (
    <section id="overview" className="py-20 lg:py-28 bg-[#FCFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Real Logo Motif */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="mb-3">
            <ArchwoodOfficialEmblem sizeClass="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-neutral-500 mb-2">
            Established In Lekki Peninsula · "I Can Do All Things"
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45] tracking-tight">
            Welcome to Archwood School
          </h2>
          <div className="w-20 h-1 bg-amber-400 mt-4 rounded-full" />
        </div>

        {/* Lead Quote from User Brief */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl sm:text-2xl text-neutral-800 font-serif italic leading-relaxed">
            "We provide an excellent world class nursery and primary education using well trained, highly motivated professionals to—<span className="text-[#3E0F45] font-semibold not-italic">Impact The Gift Of Knowledge</span>."
          </p>
        </div>

        {/* Split Showcase Layout (Matches Screenshot with 9:16 Vertical Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 9:16 Vertical Video / Campus Tour Preview */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div
              onClick={handleTogglePlay}
              className="relative w-full max-w-[330px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white ring-1 ring-black/10 bg-neutral-900 cursor-pointer select-none"
            >
              <img
                src={images.verticalTour}
                alt="Archwood School Lekki 9:16 Vertical Campus Tour Video"
                className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                  isPlaying ? 'scale-110' : 'group-hover:scale-105'
                }`}
              />

              {/* Shading scrim: subtle when playing, gradient when stopped */}
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  isPlaying
                    ? 'bg-black/10 group-hover:bg-black/25'
                    : 'bg-gradient-to-t from-black/85 via-black/25 to-black/30 group-hover:bg-black/20'
                }`}
              />

              {/* ALL TEXT OVERLAYS REMOVED WHEN PLAYING (Shown ONLY before play button is clicked) */}
              {!isPlaying && (
                <>
                  {/* Top Reel Indicators */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10 pointer-events-none animate-in fade-in duration-200">
                    <span className="bg-[#3E0F45]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 border border-purple-400/30">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>Campus Reel · 9:16</span>
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono">
                      0:58
                    </span>
                  </div>

                  {/* Play Video Trigger Button with Pulse Ring */}
                  <button
                    onClick={handleTogglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#3E0F45] hover:bg-amber-400 hover:text-neutral-950 transition-all shadow-2xl flex items-center justify-center transform group-hover:scale-110 active:scale-95 cursor-pointer z-10"
                    aria-label="Play 9:16 vertical video"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </button>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs z-10 space-y-1 animate-in fade-in duration-200">
                    <div className="font-bold text-amber-300 uppercase tracking-wider text-[10px]">
                      A Day in the Life at Archwood
                    </div>
                    <div className="font-semibold text-sm leading-snug">
                      Watch Our Pupils in Action
                    </div>
                    <div className="text-[11px] text-neutral-300 flex items-center justify-between pt-1">
                      <span>Plot 17 Ikota Villa, Lekki</span>
                      <span className="text-amber-300 font-semibold underline">
                        Tap to watch →
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* WHEN PLAYING: Zero text! Only subtle hover controls and bottom progress bar */}
              {isPlaying && (
                <>
                  {/* Subtle Center Pause/Resume icon on hover (no text) */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                      <Pause className="w-6 h-6 fill-current" />
                    </div>
                  </div>

                  {/* Top Minimal Action Icons (mute/unmute, fullscreen expand) without any text */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideoTour();
                      }}
                      className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                      aria-label="Expand video"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Minimal Scrubber Bar (No text) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-20 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-300 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-white p-3.5 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-2.5 z-20">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-[#3E0F45] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-xs">Gated, Safe Campus</div>
                <div className="text-[10px] text-neutral-500">24/7 Monitored in Ikota Villa</div>
              </div>
            </div>
          </div>

          {/* Right: Institutional Profile & Details from Brief */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                At Archwood School Lekki, our pupils don’t merely study—they challenge themselves, expanding their horizons and excelling in ways they never imagined. Nestled in a serene, secure cul-de-sac within Ikota Villa, we foster an environment where every young learner is recognized, cherished, and empowered to reach the zenith of their academic and moral potential.
              </p>
              <p className="mt-3">
                By fusing the depth of the <strong>Nigerian Basic Education Curriculum</strong> with the developmental precision of the <strong>British Early Years Foundation Stage (EYFS)</strong>, our students build stellar reading fluency, mathematical agility, and creative problem-solving prowess.
              </p>
            </div>

            {/* School Profile Specifications (From user prompt) */}
            <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-xs space-y-3">
              <div className="text-xs uppercase font-bold tracking-widest text-[#3E0F45] border-b border-neutral-100 pb-2">
                School Specifications
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 bg-neutral-50 rounded">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Academic Year</span>
                  <span className="font-bold text-neutral-900 text-sm">2026 / 2027</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Curriculum</span>
                  <span className="font-bold text-neutral-900 text-sm">Nigerian & British</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">School Type</span>
                  <span className="font-bold text-neutral-900 text-sm">Day Only</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Category</span>
                  <span className="font-bold text-neutral-900 text-sm">Nursery & Primary</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Admission Fee</span>
                  <span className="font-bold text-emerald-700 text-sm">₦0.00 (Free)</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Teacher:Pupil</span>
                  <span className="font-bold text-neutral-900 text-sm">1 : 8 Mentorship</span>
                </div>
              </div>
            </div>

            {/* Four Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-neutral-800 font-medium">Academic Excellence & Phonics Mastery</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-neutral-800 font-medium">Conducive, Air-Conditioned Classrooms</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-neutral-800 font-medium">Moral Discipline & Character Guidance</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-neutral-800 font-medium">Warm Relationship Management</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Apply For Admission 2026/2027</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenInquiry}
                className="border border-neutral-300 text-neutral-800 hover:bg-neutral-100 font-semibold text-sm px-5 py-3 rounded-lg transition-colors cursor-pointer"
              >
                Schedule In-Person Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
