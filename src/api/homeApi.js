// Home Page API - Complete content management for Home page
// This file provides all content data for the Home page, making it easy to maintain and update

import { BookOpen, Brain, Mic2, Heart, Users, Globe, Award, Clock } from 'lucide-react';

// Icon mappings for dynamic rendering
export const iconMap = {
  BookOpen: BookOpen,
  Brain: Brain,
  Mic2: Mic2,
  Heart: Heart,
};

export const statsIconMap = {
  Users: Users,
  Globe: Globe,
  Award: Award,
  Clock: Clock,
};

// Hero Section Content
export const heroContent = {
  trustBadge: {
    text: "Trusted by 10,000+ Muslim Families Worldwide",
    mobileText: "Trusted by 10,000+ families",
    className: "inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-8"
  },
  title: {
    main: "Learn Quran Online with",
    gradient: "Expert Teachers",
    className: "text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6"
  },
  description: {
    text: "One-on-one live Quran classes with certified teachers. Personalized learning that adapts to your child's pace and schedule.",
    className: "text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
  },
  stats: [
    {
      icon: "Users",
      value: "10,000+",
      label: "Students",
      className: "flex items-center justify-center space-x-2"
    },
    {
      icon: "Award", 
      value: "500+",
      label: "Teachers",
      className: "flex items-center justify-center space-x-2"
    },
    {
      icon: "Globe",
      value: "50+", 
      label: "Countries",
      className: "col-span-2 flex items-center justify-center space-x-2"
    }
  ],
  ctaButtons: [
    {
      to: "/book-trial",
      text: "Start Your 3-Day Free Trial",
      variant: "primary",
      size: "lg",
      className: "w-full sm:w-auto h-12 px-8 py-3 text-base",
      showIcon: true,
      iconPosition: "right"
    },
    {
      to: "/courses",
      text: "View Courses", 
      variant: "outline",
      size: "lg",
      className: "w-full sm:w-auto bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-12 px-8 py-3 text-base",
      showIcon: true,
      iconPosition: "right"
    }
  ],
  features: [
    {
      icon: "BookOpen",
      title: "Quran Reading",
      description: "From basics to fluent recitation",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: "Brain", 
      title: "Memorization",
      description: "Structured Hifz programs",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      icon: "Mic2",
      title: "Tajweed", 
      description: "Perfect pronunciation",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    }
  ],
  trustIndicators: [
    {
      text: "No credit card required",
      icon: "CheckCircle"
    },
    {
      text: "Free trial class",
      icon: "CheckCircle"
    },
    {
      text: "Expert teachers", 
      icon: "CheckCircle"
    }
  ]
};

// Stats Section Content
export const statsContent = {
  stats: [
    { 
      icon: "Users", 
      label: 'Active Students', 
      value: '10,000+',
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    { 
      icon: "Globe", 
      label: 'Countries Served', 
      value: '50+',
      bgColor: "bg-teal-100", 
      iconColor: "text-teal-600"
    },
    { 
      icon: "Award", 
      label: 'Qualified Teachers', 
      value: '500+',
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    { 
      icon: "Clock", 
      label: 'Classes Completed', 
      value: '100,000+',
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ]
};

// Services Section Content
export const servicesContent = {
  header: {
    title: "Our Services",
    subtitle: "Comprehensive Quran education tailored to your spiritual journey",
    titleClassName: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
    descriptionClassName: "text-xl text-gray-600 max-w-2xl mx-auto"
  },
  services: [
    {
      id: 1,
      title: "Quran Nazira",
      description: "Learn to read the Quran correctly from basics to fluent recitation. Perfect for beginners of all ages.",
      features: [
        "Arabic alphabet (Noorani Qaida)",
        "Word formation and pronunciation", 
        "Basic recitation skills",
        "Reading with proper flow"
      ],
      icon: "BookOpen",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Hifz-ul-Quran",
      description: "Structured memorization program with proven techniques to help you or your child become a Hafiz/Hafiza.",
      features: [
        "Step-by-step memorization plan",
        "Regular revision schedule",
        "Individual pace accommodation", 
        "Progress tracking and reports"
      ],
      icon: "Brain",
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      id: 3,
      title: "Tajweed",
      description: "Master the art of beautiful Quran recitation with proper pronunciation and rules of Tajweed.",
      features: [
        "Makharij (pronunciation points)",
        "Rules of Noon Saakin & Tanween",
        "Characteristics of letters",
        "Advanced recitation techniques"
      ],
      icon: "Mic2",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      title: "Duas & Islamic Education",
      description: "Learn essential daily duas, basic Islamic knowledge, and prophetic supplications for children and adults.",
      features: [
        "Daily duas with meanings",
        "Basic Islamic teachings",
        "Prophetic supplications",
        "Character building lessons"
      ],
      icon: "Heart",
      gradient: "from-teal-500 to-emerald-600"
    }
  ],
  ctaButton: {
    to: "/services",
    text: "Explore All Services",
    variant: "primary",
    size: "lg",
    className: "h-12 px-8 py-3 text-base",
    showIcon: true
  }
};

// Why Choose Us Section Content
export const whyChooseUsContent = {
  header: {
    title: "Why Choose Quran Academy?",
    subtitle: "Trusted by thousands of families worldwide",
    titleClassName: "text-3xl font-bold text-gray-900 sm:text-4xl",
    subtitleClassName: "mt-4 text-lg text-gray-600"
  },
  reasons: [
    {
      title: 'Qualified Teachers',
      description: 'All our teachers are Hafiz/Hafiza with Ijazah and years of teaching experience.',
      icon: 'CheckCircle',
      iconColor: 'text-teal-600'
    },
    {
      title: 'One-on-One Classes',
      description: 'Personalized attention ensures every student progresses at their optimal pace.',
      icon: 'CheckCircle',
      iconColor: 'text-teal-600'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose class times that fit your family routine. Available 7 days a week.',
      icon: 'CheckCircle',
      iconColor: 'text-teal-600'
    },
    {
      title: 'Affordable Pricing',
      description: 'Quality Quran education accessible to everyone with family discounts available.',
      icon: 'CheckCircle',
      iconColor: 'text-teal-600'
    },
    {
      title: 'Safe Learning',
      description: 'Learn from the comfort of home with full parental supervision and monitoring.',
      icon: 'CheckCircle',
      iconColor: 'text-teal-600'
    },
    {
      title: 'Bilingual Support',
      description: 'Instruction available in English and Urdu for better understanding.',
      icon: 'CheckCircle',
      iconColor: 'text-teal-600'
    }
  ]
};

// Risk-Free Trial Section Content
export const trialSectionContent = {
  leftContent: {
    badge: {
      text: "Limited Time Offer",
      className: "inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6"
    },
    title: "Start Your Free Trial Today",
    titleGradient: "Free Trial",
    titleClassName: "text-4xl font-bold text-gray-900 mb-6",
    description: "Join 10,000+ Muslim families who trust QuranOn for their children's Islamic education. No credit card required. Cancel anytime.",
    descriptionClassName: "text-xl text-gray-600 mb-8 leading-relaxed",
    trustBadges: [
      {
        icon: "Shield",
        text: "100% Secure",
        className: "flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
      },
      {
        icon: "Clock", 
        text: "Cancel Anytime",
        className: "flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
      },
      {
        icon: "Award",
        text: "Certified Teachers", 
        className: "flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
      }
    ],
    ctaButton: {
      to: "/book-trial",
      text: "Start Your 3-Day Free Trial",
      variant: "default",
      size: "lg", 
      className: "h-12 px-8 py-3 text-base",
      showIcon: true,
      iconPosition: "right"
    },
    footerNote: "✓ No hidden fees ✓ Instant access ✓ 24/7 support"
  },
  rightContent: {
    title: "What You'll Get:",
    titleClassName: "text-2xl font-bold text-gray-900 mb-6",
    benefits: [
      {
        title: "Personalized Learning Plan",
        description: "Custom curriculum based on your child's level and goals"
      },
      {
        title: "One-on-One Sessions", 
        description: "Individual attention from certified Quran teachers"
      },
      {
        title: "Progress Tracking",
        description: "Monitor your child's learning journey with detailed reports"
      },
      {
        title: "Flexible Scheduling",
        description: "Classes that fit your family's busy schedule"
      },
      {
        title: "Parent Dashboard",
        description: "Stay involved with real-time updates and insights"
      }
    ],
    socialProof: {
      rating: 4.9,
      totalReviews: "2,500+",
      studentsCount: "10,000+",
      studentsLabel: "Happy Students"
    }
  }
};

// Final CTA Section Content
export const finalCtaContent = {
  title: "Begin Your Quran Journey Today",
  subtitle: "Experience our teaching quality with a free trial class. No commitment required.",
  titleClassName: "text-3xl font-bold text-white sm:text-4xl",
  subtitleClassName: "mt-4 text-lg text-white/90",
  ctaButton: {
    to: "/book-trial",
    text: "Book Your Free Trial Now",
    variant: "outlineLight",
    size: "lg",
    className: "h-12 px-8 py-3 text-base",
    showIcon: true
  }
};

// Export all content as a single object for easy importing
export const homePageContent = {
  hero: heroContent,
  stats: statsContent,
  services: servicesContent,
  whyChooseUs: whyChooseUsContent,
  trialSection: trialSectionContent,
  finalCta: finalCtaContent
};

// Helper functions for dynamic content rendering
export const getIconComponent = (iconName, iconMap) => {
  return iconMap[iconName] || null;
};

export const getGradientClass = (index) => {
  const gradients = [
    'from-teal-500 to-cyan-600',
    'from-cyan-500 to-teal-600', 
    'from-emerald-500 to-teal-600',
    'from-teal-500 to-emerald-600'
  ];
  return gradients[index % gradients.length];
};

// Content update utilities
export const updateHeroContent = (newContent) => {
  Object.assign(heroContent, newContent);
};

export const updateServicesContent = (newServices) => {
  servicesContent.services = newServices;
};

export const updateStatsContent = (newStats) => {
  statsContent.stats = newStats;
};
