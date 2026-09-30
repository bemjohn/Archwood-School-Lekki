import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { STORIES } from '../data/mockData';
import { StoryItem } from '../types';
import { ArchwoodOfficialEmblem } from './CrestLogo';

interface ArchwoodStoriesProps {
  onSelectStory: (story: StoryItem) => void;
}

export const ArchwoodStories: React.FC<ArchwoodStoriesProps> = ({ onSelectStory }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'social' | 'events'>('news');
  const [sliderIndex, setSliderIndex] = useState(0);

  const eventStories: StoryItem[] = [
    {
      id: 'event-1',
      category: 'Events',
      tag: 'FEATURED',
      title: 'Annual Inter-House Sports & Cultural Day 2026',
      summary: 'A celebration of physical agility, teamwork, and Nigerian cultural heritage with parents and alumni.',
      fullText: 'Join us at the Archwood Lekki grounds for our flagship annual sports festival featuring track events, tug of war, martial arts exhibitions, and traditional dance displays.',
      date: 'November 14, 2026',
      readTime: '9:00 AM – 3:00 PM',
      image: '/src/assets/images/archwood_hero_sports_1790709936569.jpg',
    },
    {
      id: 'event-2',
      category: 'Events',
      tag: 'ACADEMICS',
      title: 'STEAM Robotics & Young Inventors Showcase',
      summary: 'Pupils demonstrate autonomous rover models, coding projects, and recycled engineering prototypes.',
      fullText: 'An inspiring showcase displaying our pupils analytical competencies developed in the Archwood STEAM lab. Open to prospective parents and partners.',
      date: 'December 4, 2026',
      readTime: '10:00 AM',
      image: '/src/assets/images/archwood_hero_stem_1790709923945.jpg',
    },
    {
      id: 'event-3',
      category: 'Events',
      tag: 'EARLY YEARS',
      title: 'Early Years Literacy & Jolly Phonics Parent Workshop',
      summary: 'Empowering parents with practical techniques for bedtime reading and phonetic pronunciation reinforcement at home.',
      fullText: 'Facilitated by our certified British EYFS specialists to help parents support developmental reading milestones.',
      date: 'October 22, 2026',
      readTime: '11:00 AM',
      image: '/src/assets/images/archwood_classroom_tour_1790709947333.jpg',
    },
  ];

  const socialStories: StoryItem[] = [
    {
      id: 'social-1',
      category: 'Community',
      tag: 'COMMUNITY',
      title: 'Little Chefs in Action: Fun Practical Life Class in Nursery 2',
      summary: 'Developing independence and fine motor skills by preparing healthy fruit salads.',
      fullText: 'Our Nursery 2 learners had an exciting practical life session yesterday! Developing sensory vocabulary, kitchen etiquette, and healthy habits.',
      date: '3 days ago',
      readTime: 'Instagram @archwoodschoollekki',
      image: '/src/assets/images/archwood_classroom_tour_1790709947333.jpg',
    },
    {
      id: 'social-2',
      category: 'Community',
      tag: 'ATHLETICS',
      title: 'Swimming Gala Prep: Building Confidence in the Water',
      summary: 'Catch a glimpse of our primary pupils mastering water safety and freestyle strokes.',
      fullText: 'Swimming builds aerobic stamina and mental focus. Our certified coaches provide individualized stroke correction in small pods.',
      date: '1 week ago',
      readTime: 'Facebook / YouTube',
      image: '/src/assets/images/archwood_hero_sports_1790709936569.jpg',
    },
  ];

  const currentList = activeTab === 'news' ? STORIES : activeTab === 'events' ? eventStories : socialStories;

  const nextSlide = () => {
    if (sliderIndex < currentList.length - 1) {
      setSliderIndex((prev) => prev + 1);
    } else {
      setSliderIndex(0);
    }
  };

  const prevSlide = () => {
    if (sliderIndex > 0) {
      setSliderIndex((prev) => prev - 1);
    } else {
      setSliderIndex(currentList.length - 1);
    }
  };

  return (
    <section id="stories" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Crest (Matches Screenshot 3) */}
        <div className="text-center mb-10">
          <div className="mb-3 flex justify-center">
            <ArchwoodOfficialEmblem sizeClass="w-14 h-14" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3E0F45]">
            Archwood Stories
          </h2>

          {/* Clean Segmented Navigation Tabs (Matches Screenshot 3) */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <button
              onClick={() => {
                setActiveTab('news');
                setSliderIndex(0);
              }}
              className={`text-lg sm:text-xl font-bold pb-2 transition-all cursor-pointer relative ${
                activeTab === 'news'
                  ? 'text-[#3E0F45] border-b-3 border-amber-400'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              News
            </button>
            <button
              onClick={() => {
                setActiveTab('social');
                setSliderIndex(0);
              }}
              className={`text-lg sm:text-xl font-bold pb-2 transition-all cursor-pointer relative ${
                activeTab === 'social'
                  ? 'text-[#3E0F45] border-b-3 border-amber-400'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Social
            </button>
            <button
              onClick={() => {
                setActiveTab('events');
                setSliderIndex(0);
              }}
              className={`text-lg sm:text-xl font-bold pb-2 transition-all cursor-pointer relative ${
                activeTab === 'events'
                  ? 'text-[#3E0F45] border-b-3 border-amber-400'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        {/* Story Cards Grid (Matches Screenshot 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-neutral-900 h-[380px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={story.image}
                alt={story.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Gradient Overlay for high legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

              {/* Tag in Top Left (Matches Screenshot 3) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#4A154B]/90 text-amber-300 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-sm border border-purple-400/40">
                  {story.tag}
                </span>
              </div>

              {/* Text Content Overlay on Bottom */}
              <div className="relative z-10 p-5 space-y-2 text-white">
                <div className="text-[11px] text-purple-200 flex items-center gap-2">
                  <span>{story.date}</span>
                  <span>·</span>
                  <span>{story.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg leading-snug group-hover:text-amber-300 transition-colors line-clamp-3">
                  {story.title}
                </h3>
                <div className="pt-2 flex items-center text-xs font-semibold text-amber-300 gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Buttons and More Stories Link (Matches Screenshot 3) */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            aria-label="Previous stories"
            className="w-10 h-10 rounded-full bg-purple-100 hover:bg-[#3E0F45] text-[#3E0F45] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => onSelectStory(currentList[0])}
            className="text-xs font-bold uppercase tracking-wider text-[#3E0F45] hover:text-[#581861] border-b-2 border-[#3E0F45] pb-0.5 transition-colors px-2"
          >
            MORE STORIES & UPDATES
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next stories"
            className="w-10 h-10 rounded-full bg-purple-100 hover:bg-[#3E0F45] text-[#3E0F45] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
