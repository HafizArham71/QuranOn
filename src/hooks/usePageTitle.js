import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitleConfig = {
  '/': {
    title: 'QuranOn - Online Quran Learning Platform | Learn Quran with Expert Tutors',
    description: 'Learn Quran online with expert tutors at QuranOn. We offer Quran Nazira, Hifz, Tajweed, and Islamic education courses for kids and adults. Start your free trial today!'
  },
  '/about': {
    title: 'About QuranOn - Our Mission & Vision | Online Quran Education',
    description: 'Learn about QuranOn\'s mission to provide quality Quran education worldwide. Meet our founder, understand our values, and discover what makes us different.'
  },
  '/services': {
    title: 'QuranOn Services - Quran Nazira, Hifz, Tajweed & Islamic Education',
    description: 'Explore our comprehensive Quran learning services including Quran Nazira, Hifz programs, Tajweed courses, and Islamic education for all ages.'
  },
  '/courses': {
    title: 'Quran Courses Online - Kids, Teens & Adults Programs | QuranOn',
    description: 'Discover our range of Quran courses for kids, teens, and adults. From basic Quran reading to advanced Hifz programs, find the perfect course for you.'
  },
  '/blog': {
    title: 'QuranOn Blog - Islamic Education & Quran Learning Tips',
    description: 'Read our latest articles on Quran learning, Islamic education, parenting tips, and spiritual growth. Expert insights from qualified Quran teachers.'
  },
  '/testimonials': {
    title: 'QuranOn Reviews & Success Stories | Student Testimonials',
    description: 'Read authentic reviews and success stories from our students and parents. See how QuranOn has helped thousands learn Quran effectively.'
  },
  '/faqs': {
    title: 'QuranOn FAQs - Common Questions About Online Quran Learning',
    description: 'Find answers to frequently asked questions about our online Quran classes, teaching methods, schedules, and enrollment process.'
  },
  '/contact': {
    title: 'Contact QuranOn - Get in Touch for Quran Learning',
    description: 'Contact QuranOn for inquiries about our online Quran classes. Reach out via phone, email, or visit our support center for immediate assistance.'
  },
  '/book-trial': {
    title: 'Book Free Quran Trial Class - QuranOn',
    description: 'Schedule your free trial Quran class with expert tutors. Experience our teaching method and start your Quran learning journey today.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy - QuranOn Online Quran Learning Platform',
    description: 'Read QuranOn\'s privacy policy to understand how we protect your personal information and ensure data security.'
  },
  '/terms-of-service': {
    title: 'Terms of Service - QuranOn Online Quran Education',
    description: 'Review QuranOn\'s terms of service for online Quran classes, enrollment policies, and user agreements.'
  }
};

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let config;
    
    // Handle dynamic routes
    if (location.pathname.startsWith('/blog/')) {
      config = {
        title: 'QuranOn Blog - Islamic Education & Quran Learning Tips',
        description: 'Read our latest articles on Quran learning, Islamic education, parenting tips, and spiritual growth. Expert insights from qualified Quran teachers.'
      };
    } else {
      config = pageTitleConfig[location.pathname] || pageTitleConfig['/'];
    }
    
    // Update page title
    document.title = config.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = config.description;
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = config.title;
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = config.description;
    }
    
    // Update Twitter title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.content = config.title;
    }
    
    // Update Twitter description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.content = config.description;
    }
    
  }, [location.pathname]);
};
