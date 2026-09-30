import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Phone,
  FileText,
  User,
  Mail,
  MapPin,
  Lock,
  ArrowRight,
  Download,
  Search,
} from 'lucide-react';
import { StoryItem } from '../types';

/* ----------------------------------------------------
   1. Admission Application Modal (₦0.00 Admission Fee)
   ---------------------------------------------------- */
interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [pupilName, setPupilName] = useState('');
  const [grade, setGrade] = useState('Nursery 1');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [applicationRef, setApplicationRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ASL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationRef(ref);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setPupilName('');
    setParentName('');
    setPhone('');
    setEmail('');
    setAddress('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200">
        {/* Header */}
        <div className="bg-[#3E0F45] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Academic Session 2026/2027
            </span>
            <h3 className="font-serif font-bold text-lg text-white">
              Application for Admission
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1 rounded-full text-purple-200 hover:text-white hover:bg-purple-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
              <span>Official Admission Registration Fee:</span>
              <strong className="text-emerald-950 font-bold">₦0.00 (Zero Fee)</strong>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Pupil's Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Child's full name"
                value={pupilName}
                onChange={(e) => setPupilName(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                  Grade / Class Applied
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
                >
                  <option value="Crèche (3-18 Months)">Crèche (3–18 Months)</option>
                  <option value="Pre-Nursery">Pre-Nursery (1.5–2.5 Yrs)</option>
                  <option value="Nursery 1">Nursery 1 (3 Yrs)</option>
                  <option value="Nursery 2">Nursery 2 (4 Yrs)</option>
                  <option value="Grade 1">Primary Grade 1</option>
                  <option value="Grade 2">Primary Grade 2</option>
                  <option value="Grade 3">Primary Grade 3</option>
                  <option value="Grade 4">Primary Grade 4</option>
                  <option value="Grade 5">Primary Grade 5</option>
                  <option value="Grade 6">Primary Grade 6</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                  School Type
                </label>
                <input
                  type="text"
                  readOnly
                  value="Day School Only"
                  className="w-full bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-lg px-3 py-2 text-xs sm:text-sm cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Parent / Guardian Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Parent's full name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Residential Location (in Lekki / Lagos)
              </label>
              <input
                type="text"
                placeholder="e.g. Ikota Villa / Lekki Phase 1 / VGC"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold py-3 rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Submit Admission Enrolment (Free)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h4 className="font-serif font-bold text-xl text-neutral-900">
              Application Successfully Submitted!
            </h4>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-xs text-neutral-700 space-y-2">
              <div className="text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                Application Reference Number
              </div>
              <div className="text-lg font-mono font-bold text-[#3E0F45]">
                {applicationRef}
              </div>
              <p>
                Candidate: <strong>{pupilName}</strong> ({grade})
              </p>
              <p className="text-[11px] text-neutral-500">
                A confirmation has been sent to <strong>{email || phone}</strong>. The Admissions Office at Plot 17 Road 1 Ikota Villa will reach out within 24 hours to schedule the friendly entry interaction.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleReset}
                className="w-full bg-[#3E0F45] text-white font-bold py-2.5 rounded-lg text-xs hover:bg-[#52145B] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   2. Inquiry & Campus Tour Booking Modal
   ---------------------------------------------------- */
interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-05');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200">
        <div className="bg-[#3E0F45] text-white p-5 flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg">Make an Enquiry / Book Tour</h3>
          <button onClick={onClose} className="text-purple-200 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-neutral-900 text-base">Enquiry Received!</h4>
            <p className="text-xs text-neutral-600">
              Our Admissions Liaison will contact you directly to confirm your private campus visit to Plot 17 Road 1 Ikota Villa.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-neutral-600">
              Schedule a private walkthrough or speak directly with our Head of Early Years & Primary.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Parent's Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Phone Number / WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="0803..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Preferred Visit Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Specific Question / Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Inquiring about Nursery 1 curriculum or bus route..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Send Enquiry
              </button>

              <a
                href="tel:08033055394"
                className="text-center text-xs text-[#3E0F45] font-semibold py-1.5 hover:underline flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Or Call Immediately: 0803 305 5394</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   3. Tuition Finance Support Modal
   ---------------------------------------------------- */
interface FinanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinanceModal: React.FC<FinanceModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('3-Month Termly Split (0% Interest)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200">
        <div className="bg-[#3E0F45] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif font-bold text-lg">Access Tuition Finance</h3>
          </div>
          <button onClick={onClose} className="text-purple-200 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-neutral-900 text-lg">Financing Request Initiated!</h4>
            <p className="text-xs text-neutral-600">
              The Archwood Bursary Advisory Desk has received your request. A finance coordinator will contact <strong>{phone}</strong> to finalize your zero-interest termly installment schedule.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-neutral-600">
              Spread school fees across easy monthly installments with zero hidden charges. Our educational finance partners settle the school fees directly on your behalf.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Parent / Guardian Name
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="080..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Financing Option
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              >
                <option value="3-Month Termly Split (0% Interest)">
                  3-Month Termly Split (0% School Interest)
                </option>
                <option value="Annual Upfront Spread (10-Month Plan)">
                  Annual Upfront Spread (10-Month Partner Plan)
                </option>
                <option value="Sibling Package Discount Plan">
                  Sibling Package Discount Plan (5%–10% off)
                </option>
              </select>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-xs text-neutral-700 space-y-1">
              <span className="font-bold text-[#3E0F45]">Required for Processing:</span>
              <p>Valid ID card, proof of Lekki/Lagos residency, and bank statement or employment confirmation.</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold py-3 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Submit Finance Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   4. Parent Portal Modal
   ---------------------------------------------------- */
interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentPortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pin, setPin] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200">
        <div className="bg-[#3E0F45] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif font-bold text-lg">Archwood Parent Portal</h3>
          </div>
          <button onClick={onClose} className="text-purple-200 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!loggedIn ? (
          <div className="p-6 space-y-4">
            <p className="text-xs text-neutral-600">
              Access your child's continuous assessment grades, termly progress report cards, weekly homework diary, and fee receipts.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Parent Email or Student ID
              </label>
              <input
                type="text"
                placeholder="e.g. parent@example.com or ASL/2026/042"
                defaultValue="parent@archwoodschool.com"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                Access Security PIN
              </label>
              <input
                type="password"
                placeholder="••••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
              />
            </div>

            <button
              onClick={() => setLoggedIn(true)}
              className="w-full bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Sign In to Parent Portal
            </button>
            <p className="text-[11px] text-center text-neutral-500">
              Need your student access code? Contact the school office at 0803 305 5394.
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div>
                <div className="font-bold text-sm text-neutral-900">David Adeyemi</div>
                <div className="text-xs text-neutral-500">Grade 4 Primary · ID: ASL-2024-088</div>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                Active Enrolment
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-neutral-50 rounded-lg flex items-center justify-between">
                <span>First Term Continuous Assessment (CA)</span>
                <span className="font-bold text-emerald-700">92% (Exceeding)</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg flex items-center justify-between">
                <span>Attendance Rate</span>
                <span className="font-bold text-neutral-900">98.5%</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg flex items-center justify-between">
                <span>Tuition Balance (2026/2027)</span>
                <span className="font-bold text-emerald-700">₦0.00 (Fully Settled)</span>
              </div>
            </div>

            <button
              onClick={() => setLoggedIn(false)}
              className="w-full border border-neutral-300 text-neutral-700 font-semibold py-2 rounded-lg text-xs hover:bg-neutral-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   5. Story Reader Modal
   ---------------------------------------------------- */
interface StoryModalProps {
  story: StoryItem | null;
  onClose: () => void;
}

export const StoryReaderModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 max-h-[90vh] flex flex-col">
        {/* Cover Photo */}
        <div className="relative h-64 w-full shrink-0">
          <img
            src={story.image}
            alt={story.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="bg-amber-400 text-purple-950 font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
              {story.tag}
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl mt-2 leading-snug">
              {story.title}
            </h3>
          </div>
        </div>

        {/* Story Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
          <div className="flex items-center gap-2 text-xs text-neutral-500 pb-2 border-b border-neutral-100">
            <span>{story.date}</span>
            <span>·</span>
            <span>{story.readTime}</span>
            <span>·</span>
            <span className="font-semibold text-[#3E0F45]">{story.category}</span>
          </div>

          <p className="font-serif italic text-lg text-neutral-900 border-l-4 border-amber-400 pl-4 py-1">
            "{story.summary}"
          </p>

          <p>{story.fullText}</p>

          <p>
            At Archwood School Lekki, our ongoing curriculum updates ensure that our early years and primary students benefit from the most advanced educational practices available globally, while preserving strong cultural moral grounding.
          </p>
        </div>

        <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#3E0F45] text-white font-bold px-6 py-2 rounded-lg text-xs hover:bg-[#52145B] transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   7. Virtual Campus Video Tour Modal
   ---------------------------------------------------- */
interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ isOpen, onClose, onOpenApply }) => {
  const [activeFacility, setActiveFacility] = useState(0);

  if (!isOpen) return null;

  const facilities = [
    {
      title: 'A Day in the Life: 9:16 Campus Walkthrough Reel',
      desc: 'Follow our pupils through hands-on science activities, phonics reading corners, and lively outdoor play at Plot 17 Road 1 Ikota Villa.',
      image: '/src/assets/images/archwood_vertical_tour_1790712449360.jpg',
      isVertical: true,
    },
    {
      title: 'Multimedia Library & Early Literacy Commons',
      desc: 'Stocked with over 2,000 age-appropriate books, interactive phonics listening pods, and comfortable reading nooks for early and primary pupils.',
      image: '/src/assets/images/archwood_classroom_tour_1790709947333.jpg',
      isVertical: false,
    },
    {
      title: 'STEAM Robotics & Collaborative Science Lab',
      desc: 'Hands-on discovery zone where pupils build working electronic circuits, program robot rovers, and experiment with real-world scientific inquiry.',
      image: '/src/assets/images/archwood_hero_stem_1790709923945.jpg',
      isVertical: false,
    },
    {
      title: 'Outdoor Sports Arena, Swimming & Play Area',
      desc: 'Lush green play turf, shaded jungle gyms, swimming facilities, and professional martial arts mats for healthy physical fitness.',
      image: '/src/assets/images/archwood_hero_sports_1790709936569.jpg',
      isVertical: false,
    },
    {
      title: 'Conducive Air-Conditioned Montessori Rooms',
      desc: 'Child-sized ergonomic furniture, certified Montessori didactic apparatus, and low 1:8 student-to-teacher mentorship.',
      image: '/src/assets/images/archwood_pupils_glance_1790709958618.jpg',
      isVertical: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh]">
        <div className="bg-[#3E0F45] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg">
              Virtual Campus Walkthrough: Plot 17 Ikota Villa
            </h3>
          </div>
          <button onClick={onClose} className="text-purple-200 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className={`relative w-full bg-neutral-950 shrink-0 overflow-hidden flex items-center justify-center ${
          facilities[activeFacility].isVertical ? 'h-[420px] sm:h-[480px]' : 'h-72 sm:h-96'
        }`}>
          <img
            src={facilities[activeFacility].image}
            alt={facilities[activeFacility].title}
            referrerPolicy="no-referrer"
            className={`transition-all duration-500 ${
              facilities[activeFacility].isVertical
                ? 'h-full max-w-[270px] aspect-[9/16] object-cover rounded-2xl shadow-2xl border-2 border-white/20'
                : 'w-full h-full object-cover'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-5 right-5 text-white z-10 pointer-events-none">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
              Campus Facility {activeFacility + 1} of {facilities.length} {facilities[activeFacility].isVertical ? '· 9:16 Vertical Reel' : ''}
            </span>
            <h4 className="font-serif font-bold text-lg sm:text-2xl mt-1">
              {facilities[activeFacility].title}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-200 max-w-xl mt-1">
              {facilities[activeFacility].desc}
            </p>
          </div>
        </div>

        {/* Facility Selector Thumbnails */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex items-center gap-3 overflow-x-auto">
          {facilities.map((fac, i) => (
            <button
              key={i}
              onClick={() => setActiveFacility(i)}
              className={`p-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeFacility === i
                  ? 'bg-[#3E0F45] text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              {fac.title.split('&')[0]}
            </button>
          ))}
        </div>

        <div className="p-4 bg-white flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200">
          <div className="text-xs text-neutral-600">
            Plot 17 Road 1 Ikota Villa, Lekki Country Homes Road, Lagos.
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold border border-neutral-300 rounded-lg hover:bg-neutral-100"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-bold px-4 py-2 text-xs rounded-lg shadow"
            >
              Apply For Admission (Free)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onOpenApply }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { label: 'Admissions 2026/2027 (₦0 Fee)', href: '#admissions' },
    { label: 'Nursery & British EYFS Curriculum', href: '#programmes' },
    { label: 'Tuition Finance & Installment Plans', href: '#tuition-finance' },
    { label: 'Ikota Villa Lekki Campus Location', href: '#location' },
    { label: 'Parent Ratings & Reviews (5.0 ★)', href: '#reviews' },
    { label: 'Co-Curriculars: Swimming, Taekwondo & Coding', href: '#programmes' },
  ];

  const filteredLinks = quickLinks.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200">
        <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search Archwood School (curriculum, fees, clubs, address)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm outline-none text-neutral-800 placeholder-neutral-400"
          />
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-2 max-h-72 overflow-y-auto">
          <div className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 px-2">
            Suggested Navigation
          </div>
          {filteredLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={onClose}
              className="block p-2.5 rounded-lg hover:bg-purple-50 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#3E0F45] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {filteredLinks.length === 0 && (
            <p className="text-xs text-neutral-500 p-4 text-center">
              No matching pages. Please call admissions at 0803 305 5394 for quick assistance.
            </p>
          )}
        </div>

        <div className="p-3 bg-neutral-50 border-t border-neutral-200 flex justify-between items-center text-xs">
          <span className="text-neutral-500">Academic Year: 2026/2027</span>
          <button
            onClick={() => {
              onClose();
              onOpenApply();
            }}
            className="bg-amber-400 text-purple-950 font-bold px-3 py-1.5 rounded text-xs"
          >
            Apply Now (Free)
          </button>
        </div>
      </div>
    </div>
  );
};
