import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Search,
  CheckCircle2,
  Lock,
  Sparkles,
  MapPin,
  Calendar,
  BookOpen,
  Image,
} from 'lucide-react';
import { CrestLogo } from './CrestLogo';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenInquiry: () => void;
  onOpenPortal: () => void;
  onOpenFinance: () => void;
  onOpenSearch: () => void;
  onOpenGallery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenInquiry,
  onOpenPortal,
  onOpenFinance,
  onOpenSearch,
  onOpenGallery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg" ref={dropdownRef}>
      {/* Top Header Bar with Crest and Direct Contact */}
      <div className="bg-[#30050B] text-white border-b border-red-950/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Brand Crest */}
          <a href="#" className="flex items-center group py-1" aria-label="Archwood School Lekki Home">
            <CrestLogo size="sm" variant="light" />
          </a>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden md:flex items-center gap-6 text-xs text-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-semibold">Admissions Hotline:</span>
              <a href="tel:08033055394" className="font-bold text-white hover:text-amber-300 transition-colors">
                0803 305 5394
              </a>
              <span className="text-neutral-500">|</span>
              <a href="tel:+2349164108484" className="text-neutral-300 hover:text-white transition-colors">
                +234 916 410 8484
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPortal}
                className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-300 transition-colors cursor-pointer text-xs font-semibold"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Parent Portal</span>
              </button>

              <button
                onClick={onOpenSearch}
                className="p-1.5 rounded hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Search site"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenApply}
                className="bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-3 py-1.5 rounded text-xs transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Apply (₦0 Fee)
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenApply}
              className="bg-amber-400 text-neutral-950 font-bold px-2.5 py-1 text-xs rounded"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Exact match to User Screenshot: Deep Maroon/Burgundy Strip) */}
      <div className="bg-[#4E050F] border-b border-[#38030A] shadow-md select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-11 py-3 text-sm font-bold tracking-wide text-white">
            {/* 1. Home */}
            <a
              href="#"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap"
            >
              Home
            </a>

            {/* 2. About */}
            <a
              href="#overview"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap"
            >
              About
            </a>

            {/* 3. Academics (with chevron & dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('academics')}
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors py-1 cursor-pointer whitespace-nowrap focus:outline-none"
              >
                <span>Academics</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'academics' ? 'rotate-180' : ''}`} />
              </button>

              {/* Academics Dropdown */}
              {openDropdown === 'academics' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#3E040C] text-white rounded-xl shadow-2xl border border-red-900/80 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <a
                    href="#programmes"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Crèche & Infant Day Care</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Ages 3 – 18 Months</div>
                  </a>
                  <a
                    href="#programmes"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Nursery & British EYFS</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Pre-Nursery, Nursery 1 & 2</div>
                  </a>
                  <a
                    href="#programmes"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Primary School</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Grades 1 – 6 (Blended Curriculum)</div>
                  </a>
                  <a
                    href="#programmes"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors border-t border-red-950/60"
                  >
                    <div className="font-bold">Co-Curricular & STEAM Clubs</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Swimming, Taekwondo, Coding, Chess</div>
                  </a>
                </div>
              )}
            </div>

            {/* 4. Admission (Highlighted in Hot Magenta/Pink from Screenshot, with chevron & dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('admission')}
                className="flex items-center gap-1.5 text-[#E60067] hover:text-[#FF3388] transition-colors py-1 cursor-pointer whitespace-nowrap focus:outline-none"
              >
                <span>Admission</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'admission' ? 'rotate-180' : ''}`} />
              </button>

              {/* Admission Dropdown */}
              {openDropdown === 'admission' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#3E040C] text-white rounded-xl shadow-2xl border border-red-900/80 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => {
                      setOpenDropdown(null);
                      onOpenApply();
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-[#FF3388] transition-colors"
                  >
                    <div className="font-bold text-[#E60067] flex items-center justify-between">
                      <span>Apply Online 2026/2027</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">₦0 FEE</span>
                    </div>
                    <div className="text-[11px] text-neutral-300 font-normal">Instant Enrolment Form</div>
                  </button>
                  <button
                    onClick={() => {
                      setOpenDropdown(null);
                      onOpenFinance();
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Access Tuition Finance</div>
                    <div className="text-[11px] text-neutral-300 font-normal">3-Month Termly Split (0% Interest)</div>
                  </button>
                  <button
                    onClick={() => {
                      setOpenDropdown(null);
                      onOpenInquiry();
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Schedule Campus Tour</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Private Visit at Ikota Villa</div>
                  </button>
                  <a
                    href="#tuition-finance"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors border-t border-red-950/60"
                  >
                    <div className="font-bold">Tuition Estimator</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Calculate termly investment</div>
                  </a>
                </div>
              )}
            </div>

            {/* 5. Year book (with chevron & dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('yearbook')}
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors py-1 cursor-pointer whitespace-nowrap focus:outline-none"
              >
                <span>Year book</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'yearbook' ? 'rotate-180' : ''}`} />
              </button>

              {/* Year book Dropdown */}
              {openDropdown === 'yearbook' && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-[#3E040C] text-white rounded-xl shadow-2xl border border-red-900/80 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <a
                    href="#glance"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Archwood at a Glance</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Key statistics & milestone figures</div>
                  </a>
                  <a
                    href="#reviews"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors"
                  >
                    <div className="font-bold">Verified Parent Reviews</div>
                    <div className="text-[11px] text-neutral-300 font-normal">5.0 ★ Rated by Lekki families</div>
                  </a>
                  <a
                    href="#overview"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-xs hover:bg-[#5C0814] text-neutral-100 hover:text-amber-300 transition-colors border-t border-red-950/60"
                  >
                    <div className="font-bold">Core Educational Values</div>
                    <div className="text-[11px] text-neutral-300 font-normal">Moral discipline & leadership</div>
                  </a>
                </div>
              )}
            </div>

            {/* 6. Gallery (Rich Dropdown & Direct Link to #gallery) */}
            <div className="relative group">
              <a
                href="#gallery"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors py-1 whitespace-nowrap"
              >
                <span>Gallery</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
              </a>

              {/* Dropdown with gallery photo categories */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#3E040C] text-white rounded-xl shadow-2xl border border-red-900/80 p-3 z-50 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] uppercase font-bold tracking-wider text-amber-300 mb-2 px-1">
                  Explore Campus Life Gallery
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="#gallery"
                    className="p-2 rounded-lg bg-[#5C0814]/70 hover:bg-[#6E0A19] transition-colors block text-neutral-100 hover:text-amber-300"
                  >
                    <div className="font-bold text-[11px]">Classrooms & Labs</div>
                    <div className="text-[10px] text-neutral-300 font-normal">STEAM & Library</div>
                  </a>
                  <a
                    href="#gallery"
                    className="p-2 rounded-lg bg-[#5C0814]/70 hover:bg-[#6E0A19] transition-colors block text-neutral-100 hover:text-amber-300"
                  >
                    <div className="font-bold text-[11px]">Sports & Athletics</div>
                    <div className="text-[10px] text-neutral-300 font-normal">Taekwondo & Turf</div>
                  </a>
                  <a
                    href="#gallery"
                    className="p-2 rounded-lg bg-[#5C0814]/70 hover:bg-[#6E0A19] transition-colors block text-neutral-100 hover:text-amber-300"
                  >
                    <div className="font-bold text-[11px]">Creative Arts</div>
                    <div className="text-[10px] text-neutral-300 font-normal">Painting & Music</div>
                  </a>
                  <a
                    href="#gallery"
                    className="p-2 rounded-lg bg-[#5C0814]/70 hover:bg-[#6E0A19] transition-colors block text-neutral-100 hover:text-amber-300"
                  >
                    <div className="font-bold text-[11px]">Early Years</div>
                    <div className="text-[10px] text-neutral-300 font-normal">Montessori & Play</div>
                  </a>
                </div>
                <a
                  href="#gallery"
                  className="block text-center mt-2.5 pt-2 border-t border-red-900/60 text-[11px] font-bold text-amber-300 hover:underline"
                >
                  View All Photos & Lightbox →
                </a>
              </div>
            </div>

            {/* (Note: 'News & Events' explicitly excluded as requested by user) */}

            {/* 7. Contact */}
            <a
              href="#location"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#38040B] text-white px-5 py-6 space-y-4 border-b border-red-950 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-red-900/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="bg-amber-400 text-neutral-950 font-bold py-2.5 px-3 rounded text-center text-xs flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              Apply (₦0 Fee)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="bg-[#4E050F] text-white font-semibold py-2.5 px-3 rounded text-center text-xs flex items-center justify-center gap-1.5 border border-red-800"
            >
              Make Enquiry
            </button>
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-300 border-b border-red-900/40"
            >
              Home
            </a>
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-300 border-b border-red-900/40"
            >
              About
            </a>

            {/* Academics Mobile Expandable */}
            <div className="py-2 border-b border-red-900/40">
              <div className="text-white flex items-center justify-between mb-1.5">
                <span>Academics</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-3 space-y-1.5 text-xs text-neutral-300 font-normal">
                <a href="#programmes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                  Crèche & Infant Care (3–18 mos)
                </a>
                <a href="#programmes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                  Nursery & British EYFS (1.5–5 yrs)
                </a>
                <a href="#programmes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                  Primary School (Grades 1–6)
                </a>
                <a href="#programmes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                  Co-Curricular & STEAM Clubs
                </a>
              </div>
            </div>

            {/* Admission Mobile (Highlighted Pink) */}
            <div className="py-2 border-b border-red-900/40">
              <div className="text-[#E60067] flex items-center justify-between mb-1.5">
                <span>Admission</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-3 space-y-1.5 text-xs text-neutral-300 font-normal">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="block py-1 text-left text-[#FF3388] font-bold"
                >
                  Apply For Admission (₦0 Fee)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFinance();
                  }}
                  className="block py-1 text-left hover:text-white"
                >
                  Access Tuition Finance (3-Month Split)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="block py-1 text-left hover:text-white"
                >
                  Schedule Campus Tour
                </button>
              </div>
            </div>

            {/* Year book Mobile */}
            <div className="py-2 border-b border-red-900/40">
              <div className="text-white flex items-center justify-between mb-1.5">
                <span>Year book</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-3 space-y-1.5 text-xs text-neutral-300 font-normal">
                <a href="#glance" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                  Archwood at a Glance
                </a>
                <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                  Verified Parent Ratings (5.0 ★)
                </a>
              </div>
            </div>

            {/* Gallery Mobile */}
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-left hover:text-amber-300 border-b border-red-900/40 block"
            >
              Gallery (Campus Life & Photos)
            </a>

            {/* Contact */}
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-300 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Contact (Plot 17 Ikota Villa)</span>
            </a>
          </nav>

          <div className="pt-2 text-xs text-neutral-300 space-y-1">
            <p>Direct Admissions Office: 0803 305 5394</p>
            <p>General Hotline: +234 916 410 8484</p>
          </div>
        </div>
      )}
    </header>
  );
};

