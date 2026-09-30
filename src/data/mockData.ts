import { ReviewItem, StoryItem, ProgramItem } from '../types';

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mrs. Folashade Adeyemi',
    role: 'Parent of Primary 3 & Nursery 2 Pupils',
    date: '2 weeks ago',
    rating: 5,
    comment:
      'Archwood School has transformed our children into eager, confident learners. The blend of the British EYFS with the Nigerian curriculum gives them deep analytical skills and strong cultural values. The teachers at Ikota Villa are passionate and communicative.',
    ratingsBreakdown: {
      academicExcellence: 5,
      conduciveEnvironment: 5,
      moralDiscipline: 5,
      qualityOfFacilities: 5,
      securityMeasures: 5,
      relationshipManagement: 5,
      curriculum: 5,
    },
  },
  {
    id: 'rev-2',
    author: 'Dr. Chukwuma Okafor',
    role: 'Parent of Grade 5 Pupil',
    date: '1 month ago',
    rating: 5,
    comment:
      'Outstanding academic grounding and exceptional moral discipline. Our son consistently excels in national mathematics competitions. The facilities are modern, air-conditioned, and the Ikota Villa campus security gives working parents complete peace of mind.',
    ratingsBreakdown: {
      academicExcellence: 5,
      conduciveEnvironment: 5,
      moralDiscipline: 5,
      qualityOfFacilities: 5,
      securityMeasures: 5,
      relationshipManagement: 5,
      curriculum: 5,
    },
  },
  {
    id: 'rev-3',
    author: 'Engr. & Barr. Babatunde',
    role: 'Parent of Pre-Nursery Pupil',
    date: '2 months ago',
    rating: 5,
    comment:
      'We moved to Lekki Country Homes area last year and enrolling our daughter at Archwood was the best decision. The crèche and early years caregivers are nurturing, the phonics foundation is remarkable, and the open-door relationship with leadership is top-tier.',
    ratingsBreakdown: {
      academicExcellence: 5,
      conduciveEnvironment: 5,
      moralDiscipline: 5,
      qualityOfFacilities: 5,
      securityMeasures: 5,
      relationshipManagement: 5,
      curriculum: 5,
    },
  },
  {
    id: 'rev-4',
    author: 'Mrs. Halima Danjuma',
    role: 'Parent of Grade 2 Pupil',
    date: '3 months ago',
    rating: 5,
    comment:
      'The holistic approach to education here is truly world-class. From coding and robotics in the STEAM lab to swimming and taekwondo, my child looks forward to school every single morning. Truly living up to impacting the gift of knowledge.',
    ratingsBreakdown: {
      academicExcellence: 5,
      conduciveEnvironment: 5,
      moralDiscipline: 5,
      qualityOfFacilities: 5,
      securityMeasures: 5,
      relationshipManagement: 5,
      curriculum: 5,
    },
  },
  {
    id: 'rev-5',
    author: 'Mr. Emmanuel Nwosu',
    role: 'Parent of Grade 4 Pupil',
    date: '4 months ago',
    rating: 5,
    comment:
      'Very clean and conducive learning environment. The low teacher-to-student ratio guarantees that every child receives individualized attention. The school management values parent feedback and executes with excellence.',
    ratingsBreakdown: {
      academicExcellence: 5,
      conduciveEnvironment: 5,
      moralDiscipline: 5,
      qualityOfFacilities: 5,
      securityMeasures: 5,
      relationshipManagement: 5,
      curriculum: 5,
    },
  },
  {
    id: 'rev-6',
    author: 'Mrs. Sandra Peters-Cole',
    role: 'Parent of Nursery 1 Pupil',
    date: '5 months ago',
    rating: 5,
    comment:
      'The tuition finance support option made paying fees seamless for our family during the new academic term. Transparent administration, ₦0 admission registration fee, and remarkable educational standards in Ajah / Lekki axis.',
    ratingsBreakdown: {
      academicExcellence: 5,
      conduciveEnvironment: 5,
      moralDiscipline: 5,
      qualityOfFacilities: 5,
      securityMeasures: 5,
      relationshipManagement: 5,
      curriculum: 5,
    },
  },
];

export const STORIES: StoryItem[] = [
  {
    id: 'story-1',
    category: 'Campus Life',
    tag: 'FEATURED',
    title: "There's Nothing Quite Like Seeing Campus Come Back to Life!",
    summary:
      'Our vibrant pupils returned to Archwood School Lekki for the new academic session, eager to embrace new challenges, hands-on STEAM exploration, and lifelong friendships.',
    fullText:
      'The halls of Archwood School at Plot 17 Road 1 Ikota Villa resonated with infectious energy as pupils, teachers, and parents gathered for the opening assembly. With upgraded multimedia classrooms, renewed STEAM robotics stations, and expanded library resources, the 2026/2027 academic session promises unprecedented milestones in holistic learning and personal development.',
    date: 'September 2026',
    readTime: '3 min read',
    image: '/src/assets/images/archwood_hero_stem_1790709923945.jpg',
  },
  {
    id: 'story-2',
    category: 'Early Years',
    tag: 'EARLY YEARS',
    title: 'Little Explorers: Practical Montessori & Phonics Learning in Action',
    summary:
      'Inside our Nursery and Crèche wings, early learners develop fine motor coordination, sensory perception, and expressive language through purposeful play.',
    fullText:
      'At Archwood Early Years, we believe every child is naturally curious. Using certified Montessori sensorial apparatus combined with Jolly Phonics and interactive storytelling, our pupils build unshakeable reading foundations before entering Primary school. Every corner of the classroom is tailored to foster independence and joy.',
    date: 'September 2026',
    readTime: '4 min read',
    image: '/src/assets/images/archwood_classroom_tour_1790709947333.jpg',
  },
  {
    id: 'story-3',
    category: 'Athletics & Clubs',
    tag: 'ATHLETICS',
    title: 'Wearing Royal & Gold: Archwood Athletes Excel on the Field',
    summary:
      'Pupils showcase sportsmanship, grit, and physical agility across swimming, taekwondo, athletics, and football during the Lekki Schools Invitational.',
    fullText:
      'Physical fitness and teamwork go hand-in-hand with academic scholarship. Archwood School Lekki prides itself on weekly swimming sessions, certified martial arts coaching, and dynamic track events. Our pupils learn resilience, fair play, and self-confidence through active competition.',
    date: 'August 2026',
    readTime: '3 min read',
    image: '/src/assets/images/archwood_hero_sports_1790709936569.jpg',
  },
  {
    id: 'story-4',
    category: 'Academic Rigour',
    tag: 'ACADEMICS',
    title: 'Integrating Nigerian Excellence with British EYFS Standards',
    summary:
      'How our blended curriculum equips nursery and primary pupils with global competitive competence while celebrating local culture and values.',
    fullText:
      'Our dual-curriculum framework combines the analytical depth of the Nigerian national primary curriculum with the investigative inquiry of the British Early Years Foundation Stage (EYFS) and Cambridge Primary frameworks. Pupils master coding, mental arithmetic, creative writing, and public speaking.',
    date: 'August 2026',
    readTime: '5 min read',
    image: '/src/assets/images/archwood_pupils_glance_1790709958618.jpg',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'creche',
    title: 'Crèche & Day Care',
    ageGroup: '3 Months – 18 Months',
    curriculum: 'Early Sensory & Cognitive Stimulation',
    description:
      'A warm, pristine, hygienic sanctuary where infants and toddlers receive loving individualized care, sensory motor games, and gentle milestone tracking.',
    highlights: [
      'Certified pediatric-trained early caregivers',
      'Quiet air-conditioned nap suites & sanitized play mats',
      'Daily milestone updates & real-time feeding/sleep logs',
      'Stimulating sensory toys & baby sign language introduction',
    ],
    schedule: 'Monday – Friday, 7:00 AM – 5:30 PM',
  },
  {
    id: 'nursery',
    title: 'Nursery (Pre-Nursery, Nursery 1 & 2)',
    ageGroup: '1.5 Years – 5 Years',
    curriculum: 'British EYFS & Montessori Blend',
    description:
      'Focusing on phonetic awareness, early numeracy, creative arts, social emotional development, and inquisitive exploration through guided discovery.',
    highlights: [
      'Jolly Phonics, early reading and creative speech',
      'Montessori practical life skills & sensorial learning',
      'Hands-on basic numeracy, pattern recognition & logic',
      'French language, music, rhythm, and expressive arts',
    ],
    schedule: 'Monday – Friday, 7:30 AM – 1:30 PM / Aftercare available',
  },
  {
    id: 'primary',
    title: 'Primary School (Grades 1 – 6)',
    ageGroup: '5 Years – 11 Years',
    curriculum: 'Blended Nigerian & British Primary Curriculum',
    description:
      'An academically rigorous, inquiry-based curriculum cultivating critical problem-solvers, articulate communicators, and morally upright young leaders.',
    highlights: [
      'STEAM Robotics, Coding & Computer Science Lab',
      'Advanced Mathematics, Quantitative & Verbal Reasoning',
      'Science inquiry, Social Studies, History & Civic Ethics',
      'Weekly swimming, taekwondo, chess, debate & drama clubs',
    ],
    schedule: 'Monday – Friday, 7:30 AM – 3:00 PM',
  },
];
