import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Download,
  Share2,
} from 'lucide-react';
import { ArchwoodOfficialEmblem } from './CrestLogo';
import { images } from '@/assets/images';

export interface GalleryImage {
  id: string;
  title: string;
  category: 'classrooms' | 'sports' | 'arts' | 'earlyyears' | 'events';
  categoryLabel: string;
  image: string;
  description: string;
  date: string;
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'STEAM Robotics & Hands-On Science Discovery',
    category: 'classrooms',
    categoryLabel: 'Classrooms & Labs',
    image: images.heroStem,
    description:
      'Pupils exploring circuit boards, robotics components, and collaborative STEM building in our modern air-conditioned science laboratory.',
    date: 'Academic Session 2026/2027',
  },
  {
    id: 'gal-2',
    title: 'Taekwondo Martial Arts & Physical Discipline',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: images.taekwondoClub,
    description:
      'Pupils practicing form, agility, focus, and self-defense with certified martial arts coaches on tatami mats.',
    date: 'Weekly Co-Curricular Club',
  },
  {
    id: 'gal-3',
    title: 'Creative Arts & Watercolour Painting Studio',
    category: 'arts',
    categoryLabel: 'Arts & Music',
    image: images.artStudio,
    description:
      'Cultivating expressive voice, colour theory, and fine motor precision through canvas painting, clay sculpting, and visual arts.',
    date: 'Art & Expressive Culture',
  },
  {
    id: 'gal-4',
    title: 'Montessori Early Years & Sensory Play',
    category: 'earlyyears',
    categoryLabel: 'Early Years & Crèche',
    image: images.montessoriNursery,
    description:
      'Nursery learners developing phonics, tactile awareness, and social camaraderie using didactic wooden Montessori materials.',
    date: 'British EYFS Framework',
  },
  {
    id: 'gal-5',
    title: 'Annual Graduation & Academic Honours Ceremony',
    category: 'events',
    categoryLabel: 'Events & Graduation',
    image: images.graduationSpeech,
    description:
      'Celebrating outstanding scholarship, leadership awards, and transition into secondary education with proud parents and teachers.',
    date: 'Annual Speech & Prize Giving',
  },
  {
    id: 'gal-6',
    title: 'Outdoor Athletics, Football & Lawn Games',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: images.heroSports,
    description:
      'Physical agility, team camaraderie, and active playground fun under sunny Lagos skies on our gated campus grounds.',
    date: 'Inter-House Sports Tournament',
  },
  {
    id: 'gal-7',
    title: 'Multimedia Library & Quiet Reading Commons',
    category: 'classrooms',
    categoryLabel: 'Classrooms & Labs',
    image: images.classroomTour,
    description:
      'Stocked with over 2,000 curriculum titles, phonics audio stations, and cosy breakout pods designed to foster a lifelong love for reading.',
    date: 'Literacy Excellence Center',
  },
  {
    id: 'gal-8',
    title: 'Student Cohort in Crested Royal Purple Uniforms',
    category: 'events',
    categoryLabel: 'Events & Graduation',
    image: images.pupilsGlance,
    description:
      'Confident, happy pupils embodying our motto "I Can Do All Things" in their neat royal purple and gold school uniforms.',
    date: 'Ikota Villa, Lekki Campus',
  },
];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'classrooms', label: 'Classrooms & Labs' },
    { key: 'sports', label: 'Sports & Athletics' },
    { key: 'arts', label: 'Arts & Music' },
    { key: 'earlyyears', label: 'Early Years & Crèche' },
    { key: 'events', label: 'Events & Graduation' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FBF9F6] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3 flex justify-center">
            <ArchwoodOfficialEmblem sizeClass="w-14 h-14" />
          </div>
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3E0F45] block mb-2">
            Campus Life & Memories
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45] tracking-tight">
            Archwood School Gallery
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4" />
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Explore authentic moments of discovery, teamwork, athletic excellence, and joyful growth across our modern campus at Plot 17 Road 1 Ikota Villa, Lekki.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#4E050F] text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-72 flex flex-col justify-end border border-neutral-200"
            >
              {/* Photo */}
              <img
                src={photo.image}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Gradient Scrim for high legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />

              {/* Top Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#4E050F]/90 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-red-900/60">
                  {photo.categoryLabel}
                </span>
              </div>

              {/* Top Right Zoom Icon */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 p-4 space-y-1 text-white">
                <div className="text-[10px] text-amber-300 font-semibold">
                  {photo.date}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for prospective parents */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-neutral-900">
              Want to see our facilities in person?
            </h4>
            <p className="text-xs text-neutral-600">
              Book a personalized campus tour of our classrooms, STEAM labs, and sports arenas at Ikota Villa, Lekki.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:08033055394"
              className="bg-[#4E050F] hover:bg-[#680714] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow transition-colors"
            >
              Call 0803 305 5394
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center">
            {/* Top Bar with Title and Close Button */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-2">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                  {filteredPhotos[selectedPhotoIndex].categoryLabel} · {selectedPhotoIndex + 1} of {filteredPhotos.length}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo viewer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image Frame */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center">
              <img
                src={filteredPhotos[selectedPhotoIndex].image}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-w-full max-h-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={prevPhoto}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-amber-400 hover:text-neutral-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextPhoto}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-amber-400 hover:text-neutral-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Description Caption */}
            <div className="w-full text-center text-xs sm:text-sm text-neutral-300 pt-3 px-4 max-w-2xl mx-auto">
              <p>{filteredPhotos[selectedPhotoIndex].description}</p>
              <span className="text-[11px] text-amber-300 font-semibold block mt-1">
                Archwood School Lekki · Plot 17 Road 1 Ikota Villa
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
