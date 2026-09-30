import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  Phone,
  Share2,
  Bookmark,
  Navigation,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface OperationalBarProps {
  onOpenApply: () => void;
  onOpenInquiry: () => void;
  onOpenFinance: () => void;
  onOpenMap: () => void;
}

export const OperationalBar: React.FC<OperationalBarProps> = ({
  onOpenApply,
  onOpenInquiry,
  onOpenFinance,
  onOpenMap,
}) => {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="bg-white border-b border-neutral-200 shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Institution Summary Block */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-neutral-600">
              <span className="font-bold text-[#3E0F45] tracking-wide uppercase">
                Educational Institution
              </span>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1 font-semibold text-neutral-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <span className="text-amber-500 font-bold">5.0</span>
                <div className="flex text-amber-400 text-xs">
                  {'★★★★★'}
                </div>
                <span className="text-neutral-500 text-[11px]">(6 verified ratings)</span>
              </div>
              <span className="text-neutral-300">·</span>
              <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>Opens 7:00 AM Wed · Mon-Fri (7am – 5pm)</span>
              </span>
            </div>

            <div className="flex items-start sm:items-center gap-2 text-sm text-neutral-700">
              <MapPin className="w-4 h-4 text-[#3E0F45] shrink-0 mt-0.5 sm:mt-0" />
              <span className="font-medium">
                Plot 17 Road 1 Ikota Villa, Lekki Country Homes Road, Ikota Lekki, Ajah, Lagos
              </span>
            </div>
          </div>

          {/* Quick Action Buttons (Apply, Enquiry, Tuition Finance, Call) */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenApply}
              className="bg-[#3E0F45] hover:bg-[#52145B] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply For Admission</span>
              <span className="bg-amber-400 text-[#3E0F45] text-[10px] px-1.5 py-0.2 rounded font-black">
                ₦0 FEE
              </span>
            </button>

            <button
              onClick={onOpenInquiry}
              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded border border-neutral-300 transition-colors cursor-pointer"
            >
              Make Enquiry
            </button>

            <button
              onClick={onOpenFinance}
              className="bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded border border-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Access Tuition Finance</span>
            </button>

            {/* Quick Action Tools: Directions, Call, Save, Share */}
            <div className="flex items-center gap-1 bg-neutral-50 p-1 rounded border border-neutral-200">
              <button
                onClick={onOpenMap}
                title="View Map & Directions"
                className="p-2 text-neutral-700 hover:text-[#3E0F45] hover:bg-white rounded transition-colors"
                aria-label="View Map and Directions"
              >
                <Navigation className="w-4 h-4" />
              </button>

              <a
                href="tel:08033055394"
                title="Call 0803 305 5394"
                className="p-2 text-neutral-700 hover:text-[#3E0F45] hover:bg-white rounded transition-colors"
                aria-label="Call Archwood School"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setSaved(!saved)}
                title={saved ? 'School Saved' : 'Save Archwood School'}
                className={`p-2 rounded transition-colors ${
                  saved ? 'text-amber-600 bg-amber-50' : 'text-neutral-700 hover:text-[#3E0F45] hover:bg-white'
                }`}
                aria-label="Save School to bookmark"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                onClick={handleShare}
                title="Share School Link"
                className="p-2 text-neutral-700 hover:text-[#3E0F45] hover:bg-white rounded transition-colors relative"
                aria-label="Share Link"
              >
                <Share2 className="w-4 h-4" />
                {copied && (
                  <span className="absolute -top-7 right-0 bg-neutral-900 text-white text-[10px] py-0.5 px-2 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
