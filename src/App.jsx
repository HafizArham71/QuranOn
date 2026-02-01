import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import QuranOnChatbot from "./components/QuranOnChatbot";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/sonner";
import ElegantLoader from "./components/ElegantLoader";
import { useElegantLoader } from "./hooks/useElegantLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import BookTrial from "./pages/BookTrial";
import PrivacyPolicy from "./pages/PrivacyPolicySimple";
import TermsOfService from "./pages/TermsOfService";

function App() {
  const isLoading = useElegantLoader(2500);

  if (isLoading) {
    return <ElegantLoader />;
  }

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-trial" element={<BookTrial />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        {/* WhatsApp Button - Update phoneNumber with your WhatsApp number (include country code, e.g., "15551234567" or "+15551234567") */}
        <WhatsAppButton phoneNumber="923134350157" />
        {/* AI Chatbot Assistant */}
        <QuranOnChatbot />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
