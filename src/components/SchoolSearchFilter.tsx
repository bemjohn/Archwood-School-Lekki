import React, { useState } from 'react';
import { Search, Filter, Check, ArrowRight, Sparkles } from 'lucide-react';

interface SchoolSearchFilterProps {
  onOpenApply: () => void;
  onOpenFinance: () => void;
}

export const SchoolSearchFilter: React.FC<SchoolSearchFilterProps> = ({
  onOpenApply,
  onOpenFinance,
}) => {
  const [selectedState, setSelectedState] = useState('Lagos');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('Day only');
  const [selectedFeeRange, setSelectedFeeRange] = useState('All');
  const [searched, setSearched] = useState(false);

  const schoolTiers = [
    {
      id: 'cr-1',
      name: 'Archwood Crèche & Infant Care',
      category: 'Crèche',
      type: 'Day only',
      state: 'Lagos',
      location: 'Ikota Villa, Lekki, Lagos',
      age: '3 – 18 Months',
      feesEstimate: '₦180,000 – ₦250,000 / term',
      financeAvailable: true,
      admissionFee: '₦0.00',
    },
    {
      id: 'nu-1',
      name: 'Archwood Early Years / Nursery 1 & 2',
      category: 'Nursery',
      type: 'Day only',
      state: 'Lagos',
      location: 'Ikota Villa, Lekki, Lagos',
      age: '1.5 – 5 Years',
      feesEstimate: '₦220,000 – ₦290,000 / term',
      financeAvailable: true,
      admissionFee: '₦0.00',
    },
    {
      id: 'pr-1',
      name: 'Archwood Primary School (Grades 1 – 6)',
      category: 'Primary',
      type: 'Day only',
      state: 'Lagos',
      location: 'Ikota Villa, Lekki, Lagos',
      age: '5 – 11 Years',
      feesEstimate: '₦260,000 – ₦340,000 / term',
      financeAvailable: true,
      admissionFee: '₦0.00',
    },
  ];

  const filteredTiers = schoolTiers.filter((item) => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (selectedType !== 'All' && item.type !== selectedType) return false;
    return true;
  });

  return (
    <section className="py-16 bg-[#3E0F45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-amber-300 block mb-2">
            Find Your Child's Grade & Tuition Tier
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Further School & Programme Search
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-purple-200">
            Customize search criteria to view curriculum breakdown, schedule, and tuition financing support.
          </p>
        </div>

        {/* Search Widget Form (Matches prompt parameters) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-neutral-800 shadow-xl border border-neutral-100 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* State */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              >
                <option value="Lagos">Lagos (Lekki / Ajah)</option>
                <option value="Abuja">Abuja</option>
                <option value="Rivers">Rivers</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              >
                <option value="All">All Categories (Nursery & Primary)</option>
                <option value="Crèche">Crèche (Infant Care)</option>
                <option value="Nursery">Nursery & EYFS</option>
                <option value="Primary">Primary (Grades 1 – 6)</option>
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                School Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              >
                <option value="Day only">Day Only</option>
                <option value="All">All Types</option>
              </select>
            </div>

            {/* School Fees */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                School Fees Range
              </label>
              <select
                value={selectedFeeRange}
                onChange={(e) => setSelectedFeeRange(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              >
                <option value="All">Select Range (Flexible / Split)</option>
                <option value="150-250">₦150k – ₦250k / term</option>
                <option value="250-350">₦250k – ₦350k / term</option>
                <option value="Finance">Tuition Finance (Monthly Split)</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedFeeRange('All');
              }}
              className="text-xs text-neutral-500 hover:text-neutral-900 underline"
            >
              Reset Filters
            </button>
            <button
              onClick={() => setSearched(true)}
              className="bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Programmes</span>
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="mt-8 max-w-5xl mx-auto space-y-4">
          {filteredTiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-purple-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-amber-400 text-purple-950 font-bold px-2 py-0.5 rounded text-[10px]">
                    {tier.category}
                  </span>
                  <span className="text-purple-200">{tier.type}</span>
                  <span className="text-purple-300">·</span>
                  <span className="text-emerald-300 font-semibold">Admission Fee: {tier.admissionFee}</span>
                </div>
                <h4 className="text-lg font-bold text-white font-serif">{tier.name}</h4>
                <p className="text-xs text-purple-200">
                  {tier.location} · Age: {tier.age} · Tuition Estimate: <span className="font-bold text-amber-300">{tier.feesEstimate}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={onOpenFinance}
                  className="bg-purple-900/80 hover:bg-purple-800 text-amber-300 border border-purple-400/40 text-xs font-semibold px-3 py-2 rounded transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tuition Finance</span>
                </button>
                <button
                  onClick={onOpenApply}
                  className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-bold text-xs px-4 py-2 rounded transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
