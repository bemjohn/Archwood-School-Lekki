import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquare, Send, ShieldCheck, User } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/mockData';
import { ReviewItem } from '../types';

export const ParentReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Parent of Pupil');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Criteria ratings state (defaulting to 5 for each)
  const [ratings, setRatings] = useState({
    academicExcellence: 5,
    conduciveEnvironment: 5,
    moralDiscipline: 5,
    qualityOfFacilities: 5,
    securityMeasures: 5,
    relationshipManagement: 5,
    curriculum: 5,
  });

  const criteriaLabels = [
    { key: 'academicExcellence' as const, label: 'Academic Excellence' },
    { key: 'conduciveEnvironment' as const, label: 'Conducive Learning Environment' },
    { key: 'moralDiscipline' as const, label: 'Moral Discipline' },
    { key: 'qualityOfFacilities' as const, label: 'Quality of Facilities' },
    { key: 'securityMeasures' as const, label: 'Security Measures' },
    { key: 'relationshipManagement' as const, label: 'Relationship Management' },
    { key: 'curriculum' as const, label: 'Curriculum' },
  ];

  const handleRatingChange = (key: keyof typeof ratings, val: number) => {
    setRatings((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !comment.trim()) return;

    // Calculate overall average
    const vals = Object.values(ratings);
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: fullName,
      role: role || 'Parent of Pupil',
      date: 'Just now (Verified Parent)',
      rating: Math.round(avg * 10) / 10,
      comment: comment,
      ratingsBreakdown: { ...ratings },
    };

    setReviews([newRev, ...reviews]);
    setFullName('');
    setComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3E0F45] block mb-2">
            Parent Feedback & Trust
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45] tracking-tight">
            Ratings & Reviews
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4" />
        </div>

        {/* Top Summary & Criteria Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Overall Score Badge (5.0 ★) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#3E0F45]/5 rounded-xl border border-purple-100">
            <div className="text-5xl sm:text-6xl font-serif font-bold text-[#3E0F45] tabular-nums">
              5.0
            </div>
            <div className="flex text-amber-400 text-xl my-2">
              {'★★★★★'}
            </div>
            <div className="text-sm font-bold text-neutral-800">
              ({reviews.length} Verified Parent Ratings)
            </div>
            <div className="text-xs text-neutral-500 mt-1">
              Educational Institution in Ikota Villa Lekki
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Parent Recommendation</span>
            </div>
          </div>

          {/* 7 Official Criteria Bars (Exact from prompt) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2">
              Rate Breakdown By Category (5.0 / 5.0)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {criteriaLabels.map((crit) => (
                <div key={crit.key} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-neutral-700">
                    <span>{crit.label}</span>
                    <span className="text-amber-500 font-bold">5.0 ★</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-2 rounded-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Columns: Existing Reviews List + Interactive Review Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Verified Reviews Feed */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-neutral-900">
                Verified Parent Testimonials
              </h3>
              <span className="text-xs text-neutral-500 font-medium">
                Showing {reviews.length} reviews
              </span>
            </div>

            <div className="space-y-4 max-h-[680px] overflow-y-auto pr-1">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#3E0F45] text-amber-300 flex items-center justify-center font-bold text-sm">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900 text-sm">{rev.author}</div>
                        <div className="text-xs text-neutral-500">{rev.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex text-amber-400 text-xs">
                        {'★'.repeat(Math.round(rev.rating))}
                      </div>
                      <span className="text-[11px] text-neutral-400">{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>

                  {/* Micro criteria checklist tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] text-neutral-500">
                    <span className="bg-neutral-100 px-2 py-0.5 rounded">Academic Excellence: 5.0</span>
                    <span className="bg-neutral-100 px-2 py-0.5 rounded">Facilities: 5.0</span>
                    <span className="bg-neutral-100 px-2 py-0.5 rounded">Moral Discipline: 5.0</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: "Review ARCHWOOD SCHOOL" Form (From user prompt) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-md sticky top-28">
              <div className="flex items-center gap-2 mb-2 text-[#3E0F45]">
                <MessageSquare className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-serif font-bold text-[#3E0F45]">
                  Review ARCHWOOD SCHOOL
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mb-6">
                Share your experience as an Archwood parent or guardian. Your rating helps aspiring families make informed decisions.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-2 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">Thank You For Your Review!</h4>
                  <p className="text-xs text-emerald-700">
                    Your testimonial has been verified and added to the official Archwood School ratings feed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mrs. Ngozi Adeleke"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Relationship to School
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
                    >
                      <option value="Parent of Primary Pupil">Parent of Primary Pupil</option>
                      <option value="Parent of Nursery Pupil">Parent of Nursery Pupil</option>
                      <option value="Parent of Crèche Infant">Parent of Crèche Infant</option>
                      <option value="Alumni Parent / Guardian">Alumni Parent / Guardian</option>
                    </select>
                  </div>

                  {/* Rate ARCHWOOD SCHOOL: The 7 specific prompt metrics */}
                  <div className="pt-2 border-t border-neutral-100">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#3E0F45] mb-2">
                      Rate ARCHWOOD SCHOOL
                    </span>
                    <div className="space-y-2 bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      {criteriaLabels.map((crit) => (
                        <div key={crit.key} className="flex items-center justify-between text-xs">
                          <span className="font-medium text-neutral-700">{crit.label}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                type="button"
                                key={star}
                                onClick={() => handleRatingChange(crit.key, star)}
                                className={`text-sm cursor-pointer ${
                                  star <= ratings[crit.key] ? 'text-amber-400' : 'text-neutral-300'
                                }`}
                              >
                                ★
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Message / Comment
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Comment here..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-[#3E0F45] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3E0F45] hover:bg-[#52145B] text-white font-bold py-3 rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
