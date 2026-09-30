import React, { useState } from 'react';
import { BookOpen, CheckCircle, Sparkles, Trophy, Users, Shield, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';

interface AcademicProgramsProps {
  onOpenApply: () => void;
  onOpenInquiry: () => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onOpenApply, onOpenInquiry }) => {
  const [selectedProgram, setSelectedProgram] = useState(PROGRAMS[1]);

  const coCurriculars = [
    { title: 'Swimming & Water Safety', desc: 'Weekly coached swimming focusing on endurance and technique.', icon: '🏊‍♂️' },
    { title: 'Taekwondo Martial Arts', desc: 'Discipline, self-defense, focus, and physical coordination.', icon: '🥋' },
    { title: 'Coding & STEAM Robotics', desc: 'Scratch block coding, micro:bit kits, and hands-on circuits.', icon: '🤖' },
    { title: 'Chess Mastery Club', desc: 'Strategic problem-solving, cognitive patience, and logic.', icon: '♟️' },
    { title: 'Music, Piano & Choir', desc: 'Vocal training, rhythm, African percussion, and keyboard basics.', icon: '🎵' },
    { title: 'Ballet & Creative Movement', desc: 'Poise, balance, artistic expression, and core motor flexibility.', icon: '🩰' },
    { title: 'French & Modern Languages', desc: 'Conversational vocabulary, interactive songs, and pronunciation.', icon: '🇫🇷' },
    { title: 'Young Orators & Debate', desc: 'Public speaking, articulate diction, and confident discourse.', icon: '🎙️' },
  ];

  return (
    <section id="programmes" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3E0F45] block mb-2">
            Curriculum Pathways
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45] tracking-tight">
            Academic Programmes
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Our blended curriculum marries the academic rigor of the Nigerian National Primary curriculum with the play-based inquiry of the British Early Years Foundation Stage (EYFS).
          </p>
        </div>

        {/* Program Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setSelectedProgram(prog)}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                selectedProgram.id === prog.id
                  ? 'bg-[#3E0F45] text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {prog.title}
            </button>
          ))}
        </div>

        {/* Selected Program Showcase */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-purple-100 text-[#3E0F45] text-xs font-bold px-3 py-1 rounded">
                Age: {selectedProgram.ageGroup}
              </span>
              <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">
                {selectedProgram.curriculum}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
              {selectedProgram.title}
            </h3>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {selectedProgram.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#3E0F45]">
                Key Learning Milestones
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProgram.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenApply}
                className="bg-[#3E0F45] hover:bg-[#52145B] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <span>Enrol for {selectedProgram.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenInquiry}
                className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#3E0F45] underline"
              >
                Inquire About Curriculum
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#3E0F45]/5 rounded-xl p-6 border border-purple-100 space-y-4">
            <h4 className="font-serif font-bold text-lg text-[#3E0F45]">
              Daily Routine & Environment
            </h4>
            <div className="space-y-2 text-xs text-neutral-700">
              <div className="flex justify-between py-1.5 border-b border-neutral-200">
                <span className="font-semibold text-neutral-600">Hours</span>
                <span className="font-bold text-neutral-900">{selectedProgram.schedule}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-200">
                <span className="font-semibold text-neutral-600">Class Format</span>
                <span className="font-bold text-neutral-900">Day School (Full Day Care available)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-200">
                <span className="font-semibold text-neutral-600">Meals</span>
                <span className="font-bold text-neutral-900">Fresh Hygienic Catered Lunches</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-200">
                <span className="font-semibold text-neutral-600">Location</span>
                <span className="font-bold text-neutral-900">Ikota Villa, Lekki, Lagos</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-purple-200 text-xs text-neutral-700 space-y-1">
              <div className="font-bold text-[#3E0F45]">2026/2027 Admissions Notice</div>
              <p>Registration fee is currently ₦0.00. Early enrollment secures dedicated classroom placement.</p>
            </div>
          </div>
        </div>

        {/* Co-Curricular & Enrichment Clubs Grid */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3E0F45] block mb-2">
              Beyond The Classroom
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#3E0F45]">
              Co-Curricular Clubs & Enrichment
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Developing well-rounded character, athletic stamina, creative voice, and technical problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coCurriculars.map((club, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow group"
              >
                <div className="text-3xl mb-3">{club.icon}</div>
                <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#3E0F45] transition-colors">
                  {club.title}
                </h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {club.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
