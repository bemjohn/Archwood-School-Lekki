import React, { useState } from 'react';
import {
  CreditCard,
  CheckCircle2,
  HelpCircle,
  Calculator,
  ArrowRight,
  Shield,
  Sparkles,
  Phone,
} from 'lucide-react';

interface TuitionAndFinanceProps {
  onOpenApply: () => void;
  onOpenInquiry: () => void;
  onOpenFinanceModal: () => void;
}

export const TuitionAndFinance: React.FC<TuitionAndFinanceProps> = ({
  onOpenApply,
  onOpenInquiry,
  onOpenFinanceModal,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<'creche' | 'nursery' | 'primary'>('nursery');
  const [lunchOption, setLunchOption] = useState(true);
  const [afterSchoolOption, setAfterSchoolOption] = useState(false);

  const baseTuitions = {
    creche: 220000,
    nursery: 260000,
    primary: 310000,
  };

  const lunchFee = lunchOption ? 45000 : 0;
  const afterSchoolFee = afterSchoolOption ? 35000 : 0;
  const totalTermly = baseTuitions[selectedGrade] + lunchFee + afterSchoolFee;
  const monthlySplit = Math.round(totalTermly / 3);

  return (
    <section id="tuition-finance" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3E0F45] block mb-2">
            Transparent Investment & Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45] tracking-tight">
            Tuition & Educational Financing
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            World-class nursery and primary education designed to be predictable, transparent, and manageable through tailored family financing options.
          </p>
        </div>

        {/* Highlight Banner: ₦0.00 Admission Registration Fee */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                Special Admission Window
              </span>
              <span className="text-xs font-semibold text-emerald-800">Academic Year 2026/2027</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-950">
              Admission Registration Fee: <span className="underline">₦0.00 (Zero Fee)</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800">
              Archwood School does not charge prospective families an initial application or registration fee. Apply online in under 3 minutes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApply}
              className="bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow transition-colors cursor-pointer"
            >
              Apply For Admission Now
            </button>
          </div>
        </div>

        {/* Tuition Estimator & Finance Partner Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Calculator */}
          <div className="lg:col-span-7 bg-[#FCFAF8] rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#3E0F45]" />
                <h3 className="font-serif font-bold text-lg text-neutral-900">
                  Termly Tuition Estimator
                </h3>
              </div>
              <span className="text-xs text-neutral-500">2026/2027 Standard Terms</span>
            </div>

            {/* Step 1: Grade Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Select Pupil's Grade Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedGrade('creche')}
                  className={`p-3 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                    selectedGrade === 'creche'
                      ? 'bg-[#3E0F45] text-white border-[#3E0F45]'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  <div>Crèche & Day Care</div>
                  <div className="text-[10px] opacity-80 mt-0.5">3 – 18 Months</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGrade('nursery')}
                  className={`p-3 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                    selectedGrade === 'nursery'
                      ? 'bg-[#3E0F45] text-white border-[#3E0F45]'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  <div>Nursery (EYFS)</div>
                  <div className="text-[10px] opacity-80 mt-0.5">1.5 – 5 Years</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGrade('primary')}
                  className={`p-3 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                    selectedGrade === 'primary'
                      ? 'bg-[#3E0F45] text-white border-[#3E0F45]'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  <div>Primary (Grades 1–6)</div>
                  <div className="text-[10px] opacity-80 mt-0.5">5 – 11 Years</div>
                </button>
              </div>
            </div>

            {/* Step 2: Add-on services */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600">
                Optional Support Services
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200 cursor-pointer">
                  <div className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={lunchOption}
                      onChange={(e) => setLunchOption(e.target.checked)}
                      className="rounded text-[#3E0F45] focus:ring-[#3E0F45]"
                    />
                    <div>
                      <div className="font-semibold text-neutral-800">Daily Hygienic Warm Lunch & Fruit Snack</div>
                      <div className="text-neutral-500 text-[11px]">Prepared by certified school caterers</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-900">+₦45,000 / term</span>
                </label>

                <label className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200 cursor-pointer">
                  <div className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={afterSchoolOption}
                      onChange={(e) => setAfterSchoolOption(e.target.checked)}
                      className="rounded text-[#3E0F45] focus:ring-[#3E0F45]"
                    />
                    <div>
                      <div className="font-semibold text-neutral-800">Extended After-School Care & Homework Club</div>
                      <div className="text-neutral-500 text-[11px]">Mon – Fri until 5:30 PM</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-900">+₦35,000 / term</span>
                </label>
              </div>
            </div>

            {/* Total Breakdown Output */}
            <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-600">Standard Termly Tuition</span>
                <span className="font-bold text-neutral-900 tabular-nums">₦{totalTermly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-emerald-700 bg-emerald-50 p-2.5 rounded">
                <span className="font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Tuition Finance Monthly Installment:</span>
                </span>
                <span className="font-bold text-base tabular-nums">~₦{monthlySplit.toLocaleString()} / month (3x)</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={onOpenFinanceModal}
                className="bg-[#3E0F45] hover:bg-[#52145B] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Apply For Tuition Financing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenInquiry}
                className="text-xs text-neutral-600 hover:text-[#3E0F45] underline font-medium"
              >
                Request Detailed Fee Schedule
              </button>
            </div>
          </div>

          {/* Right Side: Tuition Finance Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#3E0F45] text-white rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-amber-300" />
                <h3 className="font-serif font-bold text-xl text-white">
                  Access Tuition Finance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                We believe financial flexibility should empower quality education. Archwood School partners with verified financial institutions to offer zero-friction school fees installment payment plans for parents.
              </p>

              <div className="space-y-3 pt-2 text-xs text-purple-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Burden:</strong> Spread termly tuition across 3 convenient monthly installments.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Instant 24-Hour Approval:</strong> Minimal documentation with seamless automated direct debit.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Sibling Discounts:</strong> 5% reduction on tuition for 2nd child, 10% for 3rd child onwards.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Direct School Settlement:</strong> Funds disburse straight to the school bursary without delay.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenFinanceModal}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-purple-950 font-bold py-3 rounded-lg text-xs sm:text-sm text-center transition-colors cursor-pointer"
                >
                  Check Your Tuition Finance Eligibility
                </button>
              </div>
            </div>

            {/* Bursar Contact Box */}
            <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-neutral-900">Questions about payments?</div>
                <div className="text-neutral-500">Contact the Archwood Bursary Office</div>
              </div>
              <a
                href="tel:08033055394"
                className="bg-neutral-100 hover:bg-neutral-200 text-[#3E0F45] font-bold px-3 py-2 rounded flex items-center gap-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0803 305 5394</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
