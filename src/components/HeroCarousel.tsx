import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight, Sparkles, Award } from 'lucide-react';
import { images } from '@/assets/images';

interface HeroCarouselProps {
  onOpenApply: () => void;
  onOpenInquiry: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenApply, onOpenInquiry }) => {
  const slides = [
    {
      id: 1,
      image: images.heroStem,
      headline: 'Excellence in academics',
      kicker: 'ARCHWOOD SCHOOL LEKKI',
      linkText: 'LEARN ABOUT OUR APPROACH',
      targetSection: '#overview',
      tagline: 'We provide an excellent world class nursery and primary education using well trained, highly motivated professionals to—Impact The Gift Of Knowledge',
    },
    {
      id: 2,
      image: images.heroSports,
      headline: 'Wearing royal and going for gold',
      kicker: 'PHYSICAL AGILITY & CHARACTER',
      linkText: 'DISCOVER OUR ATHLETIC & CLUBS PROGRAMMES',
      targetSection: '#programmes',
      tagline: 'Cultivating leadership, teamwork, swimming, taekwondo, and active sporting prowess in Lekki.',
    },
    {
      id: 3,
      image: images.classroomTour,
      headline: 'Nurturing tomorrow’s leaders',
      kicker: 'BRITISH EYFS & NIGERIAN BLEND',
      linkText: 'APPLY FOR 2026/2027 ADMISSION',
      targetSection: '#admissions',
      tagline: 'State-of-the-art air-conditioned classrooms, STEAM innovation, and low 1:8 student-to-teacher mentorship.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides smoothly every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] overflow-hidden bg-neutral-900 select-none">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
          />
          {/* Gradients matching screenshot: deep dark vignette at top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/50" />
        </div>
      ))}

      {/* Floating Motto Banner (Top Left) */}
      <div className="absolute top-6 left-4 sm:left-8 lg:left-12 z-20 max-w-xl hidden sm:block">
        <div className="bg-[#3E0F45]/85 backdrop-blur-md border border-purple-400/30 text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-300 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
              Our Guiding Philosophy
            </div>
            <div className="text-xs text-neutral-100 italic leading-snug line-clamp-2">
              "To Impact The Gift Of Knowledge through world-class nursery and primary education"
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Arrow Controls (Left Side - Exact matching Screenshot 1 & 2) */}
      <div className="absolute left-6 sm:left-12 bottom-12 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full bg-[#581861]/90 hover:bg-[#72207E] text-white flex items-center justify-center border border-purple-400/40 shadow-lg transition-transform active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full bg-[#581861]/90 hover:bg-[#72207E] text-white flex items-center justify-center border border-purple-400/40 shadow-lg transition-transform active:scale-90 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5 ml-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all rounded-full ${
                i === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Center Bouncing Down Chevron (Exact from screenshot) */}
      <a
        href="#overview"
        aria-label="Scroll to overview"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-amber-300 transition-colors cursor-pointer animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

      {/* Hero Headline Overlay (Bottom Right - Exact matching Screenshot 1 & 2) */}
      <div className="absolute right-4 sm:right-10 lg:right-16 bottom-12 sm:bottom-16 z-20 max-w-xl text-right">
        <div className="text-xs sm:text-sm font-semibold tracking-widest text-amber-300 uppercase mb-2 drop-shadow-md">
          {slides[currentSlide].kicker}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight drop-shadow-xl mb-4">
          {slides[currentSlide].headline}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-200 mb-6 drop-shadow-md hidden sm:block max-w-lg ml-auto">
          {slides[currentSlide].tagline}
        </p>

        <div className="flex items-center justify-end gap-4">
          <a
            href={slides[currentSlide].targetSection}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-white border-b-2 border-white hover:border-amber-400 hover:text-amber-300 transition-all uppercase pb-1"
          >
            <span>{slides[currentSlide].linkText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
