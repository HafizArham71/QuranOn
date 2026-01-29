import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import QuranOnChatbot from "./components/QuranOnChatbot";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import BookTrial from "./pages/BookTrial";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-trial" element={<BookTrial />} />
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
