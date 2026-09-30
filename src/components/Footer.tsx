import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  Linkedin,
  Instagram,
  ChevronUp,
  Shield,
  Award,
} from 'lucide-react';
import { CrestLogo } from './CrestLogo';

interface FooterProps {
  onOpenApply: () => void;
  onOpenInquiry: () => void;
  onOpenPortal: () => void;
  onOpenFinance: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenInquiry,
  onOpenPortal,
  onOpenFinance,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#350C3B] text-white relative">
      {/* Top scroll-to-top button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute -top-5 right-6 sm:right-12 w-10 h-10 rounded-full bg-[#52145B] hover:bg-amber-400 text-white hover:text-purple-950 flex items-center justify-center border border-purple-400/40 shadow-xl transition-all cursor-pointer z-20"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      {/* Main Footer Body (Matches Screenshot 5 split presentation) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Brand & Contact Us (Matches Screenshot 5) */}
          <div className="lg:col-span-4 space-y-6">
            <CrestLogo size="lg" variant="light" />

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-purple-200">
              <h4 className="font-serif font-bold text-base text-white">Contact Us</h4>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>
                  Plot 17 Road 1 Ikota Villa,
                  <br />
                  Lekki Country Homes Road,
                  <br />
                  Ikota Lekki, Ajah, Lagos State, Nigeria
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>
                  Admissions: <a href="tel:08033055394" className="text-white hover:underline font-semibold">0803 305 5394</a>
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>
                  General: <a href="tel:+2349164108484" className="text-white hover:underline font-semibold">+234 916 410 8484</a>
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a
                  href="mailto:info@archwoodschoollekki.com"
                  className="text-white hover:underline"
                >
                  info@archwoodschoollekki.com
                </a>
              </p>
            </div>

            {/* Social Icons (Matches Screenshot 5) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-full bg-purple-900/80 hover:bg-amber-400 hover:text-purple-950 flex items-center justify-center transition-colors text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-purple-900/80 hover:bg-amber-400 hover:text-purple-950 flex items-center justify-center transition-colors text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-purple-900/80 hover:bg-amber-400 hover:text-purple-950 flex items-center justify-center transition-colors text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="Instagram Account"
                className="w-9 h-9 rounded-full bg-purple-900/80 hover:bg-amber-400 hover:text-purple-950 flex items-center justify-center transition-colors text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links (Matches Screenshot 5) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-serif font-bold text-base text-white">Useful Links</h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm text-purple-200">
              <button onClick={onOpenApply} className="text-left hover:text-amber-300 transition-colors">
                Apply for Admission
              </button>
              <a href="#location" className="hover:text-amber-300 transition-colors">
                Campus Map & Tour
              </a>
              <a href="#programmes" className="hover:text-amber-300 transition-colors">
                Curriculum & EYFS
              </a>
              <button onClick={onOpenPortal} className="text-left hover:text-amber-300 transition-colors">
                Parent Portal
              </button>
              <button onClick={onOpenFinance} className="text-left hover:text-amber-300 transition-colors">
                Tuition Finance
              </button>
              <a href="#reviews" className="hover:text-amber-300 transition-colors">
                Reviews & Ratings
              </a>
              <a href="#gallery" className="hover:text-amber-300 transition-colors font-semibold text-amber-200">
                Campus Gallery
              </a>
              <a href="#stories" className="hover:text-amber-300 transition-colors">
                Stories & News
              </a>
              <button onClick={onOpenInquiry} className="text-left hover:text-amber-300 transition-colors">
                Book a Visit
              </button>
            </div>

            <div className="pt-3 border-t border-purple-800/80 text-xs text-purple-300 leading-relaxed">
              Archwood School is an inclusive, independent English-language nursery and day primary school serving pupils aged 3 months to 11 years in Ikota Villa, Lekki, Lagos State, Nigeria.
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-purple-400 pt-2">
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <span>·</span>
              <a href="#terms" className="hover:underline">Safeguarding Code</a>
              <span>·</span>
              <a href="#accessibility" className="hover:underline">Accessibility</a>
              <span>·</span>
              <a href="#admissions" className="hover:underline">Admissions 2026/2027</a>
            </div>
          </div>

          {/* Column 3: Geographic Map Visual (Matches Screenshot 5 Right Map of Quebec/Region) */}
          <div className="lg:col-span-4 bg-[#28082D] rounded-2xl p-6 border border-purple-800/80 relative overflow-hidden">
            <div className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-3">
              Regional Presence: Lekki, Lagos
            </div>

            {/* Stylized Coastline Map */}
            <div className="relative h-48 rounded-xl bg-[#1F0624] overflow-hidden border border-purple-900/80 flex items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full h-full opacity-80">
                {/* Atlantic Ocean */}
                <rect width="300" height="180" fill="#17031b" />
                {/* Lagos Coastline / Lekki Axis */}
                <path
                  d="M0,60 Q80,40 160,70 T300,80 L300,180 L0,180 Z"
                  fill="#410f48"
                  stroke="#5e1569"
                  strokeWidth="2"
                />
                {/* Lagoon */}
                <path
                  d="M0,0 L300,0 L300,45 Q200,20 120,35 T0,20 Z"
                  fill="#1f0624"
                />

                <text x="30" y="90" fill="#a855f7" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  VICTORIA ISLAND
                </text>
                <text x="120" y="115" fill="#c084fc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  LEKKI PENINSULA
                </text>
                <text x="210" y="130" fill="#a855f7" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  AJAH / EPE
                </text>

                {/* Archwood Pinpoint marker */}
                <circle cx="165" cy="95" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                <text x="178" y="99" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="serif">
                  ARCHWOOD
                </text>
              </svg>
            </div>

            <div className="mt-4 text-xs text-purple-200 flex items-center justify-between">
              <span>Plot 17, Ikota Villa</span>
              <a
                href="#location"
                className="text-amber-300 hover:underline font-semibold"
              >
                View Driving Guide →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accreditation Partner Logo Ribbon (Matches Screenshot 5) */}
      <div className="bg-white py-6 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-6 sm:gap-10 grayscale hover:grayscale-0 transition-all opacity-85">
            {/* Accreditation 1: Lagos State */}
            <div className="flex items-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm">
              <Shield className="w-5 h-5 text-[#3E0F45]" />
              <span>Lagos State Ministry of Education Approved</span>
            </div>

            {/* Accreditation 2: British EYFS */}
            <div className="flex items-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm">
              <Award className="w-5 h-5 text-amber-600" />
              <span>British EYFS Standards</span>
            </div>

            {/* Accreditation 3: AISEN */}
            <div className="flex items-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm">
              <div className="w-6 h-6 rounded bg-[#3E0F45] text-white flex items-center justify-center text-[10px] font-black">
                A
              </div>
              <span>AISEN Network Member</span>
            </div>

            {/* Accreditation 4: NAPPS */}
            <div className="flex items-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm">
              <div className="w-6 h-6 rounded bg-emerald-700 text-white flex items-center justify-center text-[10px] font-black">
                N
              </div>
              <span>NAPPS Verified Institution</span>
            </div>
          </div>

          <div className="text-center text-[11px] text-neutral-500 mt-6 pt-4 border-t border-neutral-100">
            © {new Date().getFullYear()} ARCHWOOD SCHOOL LEKKI. All Rights Reserved. Plot 17 Road 1 Ikota Villa, Lekki Country Homes Road, Lagos.
          </div>
        </div>
      </div>
    </footer>
  );
};
