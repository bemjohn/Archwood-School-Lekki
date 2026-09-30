import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Shield,
  Car,
  Compass,
  CheckCircle,
} from 'lucide-react';

export const LocationAndMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'directions' | 'landmarks' | 'security'>('directions');

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3E0F45] block mb-2">
            Campus Location & Accessibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45] tracking-tight">
            Find Us in Ikota Villa, Lekki
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4" />
          <p className="mt-4 text-neutral-600 text-sm sm:text-base">
            Quiet, serene, and gated environment ideal for focused learning, safely located along Lekki Country Homes Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Detailed Campus Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3E0F45]">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>ARCHWOOD SCHOOL LEKKI CAMPUS</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-neutral-900 leading-snug">
                  Plot 17 Road 1 Ikota Villa, Lekki Country Homes Road, Ikota Lekki, Ajah, Lagos
                </h3>
                <p className="text-xs text-neutral-500">
                  Lekki Peninsula, Lagos State, Nigeria
                </p>
              </div>

              {/* Operating Hours Block from prompt */}
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 space-y-1.5 text-xs text-neutral-800">
                <div className="flex items-center gap-2 font-bold text-[#3E0F45]">
                  <Clock className="w-4 h-4 text-[#3E0F45]" />
                  <span>Closed · Opens 7:00 AM Wed</span>
                </div>
                <div className="text-neutral-600 pl-6 space-y-0.5">
                  <p>Monday – Friday: 7:00 AM – 5:00 PM</p>
                  <p>Saturday – Sunday: Closed (Tours by Appointment)</p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-semibold text-neutral-600">Admissions Desk</span>
                  <a href="tel:08033055394" className="font-bold text-[#3E0F45] hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>0803 305 5394</span>
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-semibold text-neutral-600">Administrative Line</span>
                  <a href="tel:+2349164108484" className="font-bold text-[#3E0F45] hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>+234 916 410 8484</span>
                  </a>
                </div>
              </div>

              {/* Information Tabs */}
              <div className="pt-2">
                <div className="flex border-b border-neutral-200 text-xs font-semibold gap-4 pb-2">
                  <button
                    onClick={() => setActiveTab('directions')}
                    className={`cursor-pointer ${activeTab === 'directions' ? 'text-[#3E0F45] border-b-2 border-[#3E0F45]' : 'text-neutral-400'}`}
                  >
                    Driving Directions
                  </button>
                  <button
                    onClick={() => setActiveTab('landmarks')}
                    className={`cursor-pointer ${activeTab === 'landmarks' ? 'text-[#3E0F45] border-b-2 border-[#3E0F45]' : 'text-neutral-400'}`}
                  >
                    Nearby Landmarks
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`cursor-pointer ${activeTab === 'security' ? 'text-[#3E0F45] border-b-2 border-[#3E0F45]' : 'text-neutral-400'}`}
                  >
                    Gate Security
                  </button>
                </div>

                <div className="pt-3 text-xs text-neutral-600 leading-relaxed min-h-[90px]">
                  {activeTab === 'directions' && (
                    <p>
                      From Chevron Toll Gate: Proceed east along Lekki-Epe Expressway towards VGC / Ikota. Turn right into Lekki Country Homes Road, drive into Road 1 Ikota Villa to Plot 17 on the right.
                    </p>
                  )}
                  {activeTab === 'landmarks' && (
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Near Mega Chicken Ikota & Ikota Shopping Complex</li>
                      <li>Adjacent to Lekki Country Homes Estate</li>
                      <li>5 minutes from Victoria Garden City (VGC)</li>
                      <li>10 minutes from Chevron Toll Gate</li>
                    </ul>
                  )}
                  {activeTab === 'security' && (
                    <p>
                      Ikota Villa features manned security gates with monitored access, visitor pass registration, surveillance cameras, and verified parent pickup protocols.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=Plot+17+Road+1+Ikota+Villa+Lekki+Country+Homes+Road+Ikota+Lekki+Ajah+Lagos"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full bg-[#3E0F45] hover:bg-[#52145B] text-white text-xs sm:text-sm font-bold py-3 rounded-lg text-center shadow transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: High Fidelity Map Presentation */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 shadow-md relative min-h-[460px] flex flex-col justify-between">
            {/* Map Canvas with Stylized Lekki Peninsula Layout */}
            <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
              {/* SVG Stylized Lekki Peninsula Map */}
              <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
                {/* Lagos Lagoon & Ocean Waters */}
                <rect width="800" height="600" fill="#cad2d3" />
                
                {/* Lekki Peninsula Landmass */}
                <path
                  d="M0,120 Q200,100 450,140 T800,170 L800,480 Q600,450 350,470 T0,490 Z"
                  fill="#f1eee8"
                  stroke="#dcd8cf"
                  strokeWidth="2"
                />

                {/* Lekki - Epe Expressway Main Arterial */}
                <path
                  d="M0,280 Q250,260 500,290 T800,310"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="8"
                />
                <path
                  d="M0,280 Q250,260 500,290 T800,310"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />

                {/* Lekki Country Homes Road */}
                <path
                  d="M380,275 L430,390 L480,420"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="7"
                />

                {/* Road 1 Ikota Villa */}
                <path
                  d="M430,390 L390,440"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="5"
                />

                {/* Surrounding Estates: Chevron, VGC, Ajah */}
                <text x="140" y="250" fill="#64748b" fontSize="14" fontWeight="600" fontFamily="sans-serif">
                  Chevron Drive
                </text>
                <text x="240" y="320" fill="#64748b" fontSize="14" fontWeight="600" fontFamily="sans-serif">
                  Mega Chicken Ikota
                </text>
                <text x="560" y="270" fill="#64748b" fontSize="14" fontWeight="600" fontFamily="sans-serif">
                  V.G.C. (Victoria Garden City)
                </text>
                <text x="680" y="340" fill="#64748b" fontSize="14" fontWeight="600" fontFamily="sans-serif">
                  Ajah Roundabout
                </text>

                {/* Archwood School Lekki Pin at Plot 17 */}
                <g transform="translate(425, 410)">
                  {/* Pulse ring */}
                  <circle cx="0" cy="0" r="28" fill="#3E0F45" opacity="0.2" className="animate-ping" />
                  <circle cx="0" cy="0" r="18" fill="#3E0F45" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="0" cy="0" r="6" fill="#D4AF37" />

                  {/* Marker Tooltip Box */}
                  <rect x="-110" y="-85" width="220" height="52" rx="8" fill="#3E0F45" stroke="#D4AF37" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
                  <text x="0" y="-66" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="serif">
                    ARCHWOOD SCHOOL LEKKI
                  </text>
                  <text x="0" y="-48" fill="#D4AF37" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
                    Plot 17 Road 1 Ikota Villa ★ 5.0
                  </text>
                  {/* Pointer arrow */}
                  <polygon points="-6,-33 6,-33 0,-24" fill="#3E0F45" />
                </g>
              </svg>
            </div>

            {/* Top Overlay Badge */}
            <div className="relative z-10 m-4 sm:m-6 flex items-center justify-between pointer-events-none">
              <div className="bg-[#3E0F45]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow border border-purple-400/30 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Map of ARCHWOOD SCHOOL LEKKI</span>
              </div>
              <div className="bg-white/95 text-neutral-800 px-3 py-1 rounded text-xs font-bold shadow">
                Ikota Lekki, Lagos
              </div>
            </div>

            {/* Bottom Overlay Info Strip */}
            <div className="relative z-10 m-4 sm:m-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="font-bold text-neutral-900">Visiting Archwood School?</div>
                <div className="text-neutral-500">Security pass code available at gate upon arrival.</div>
              </div>
              <a
                href="https://maps.google.com/?q=Plot+17+Road+1+Ikota+Villa+Lekki+Country+Homes+Road+Ikota+Lekki+Ajah+Lagos"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-bold px-3.5 py-1.5 rounded text-center transition-colors shrink-0"
              >
                Navigate Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
