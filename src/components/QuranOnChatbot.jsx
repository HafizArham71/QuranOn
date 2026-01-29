import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, User, Clock, CheckCircle, AlertCircle, BookOpen, Users, Award, Headset } from 'lucide-react';

const QuranOnChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationState, setConversationState] = useState('greeting');
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);

  // Google Gemini API Configuration
  const GEMINI_API_KEY = 'AIzaSyBQohA8TwCTVQ2-4vXn9uSyckXv4ecd9GY';
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Show initial greeting when chat is opened for the first time
    if (isOpen && !hasGreeted && messages.length === 0) {
      setTimeout(() => {
        addMessage('assistant', "Assalamu Alaikum! 🌿 I'm here to help you or your loved ones begin a beautiful Quran learning journey. May I ask who this Quran education is for?");
        setHasGreeted(true);
      }, 500);
    }
  }, [isOpen, hasGreeted, messages.length]);

  const addMessage = (sender, message) => {
    setMessages(prev => [...prev, { sender, message, timestamp: new Date() }]);
  };

  const getGeminiResponse = async (userMessage, conversationHistory) => {
    const systemPrompt = `You are an AI Customer Support & Sales Conversion Assistant for QuranOn, an Online Quran Learning Website.

Your role is to act as a wise, kind, emotionally intelligent, and trustworthy human-like guide who helps visitors understand, trust, and enroll in Quran learning programs with confidence and peace of mind.

CRITICAL RULES - MUST FOLLOW:
1. NEVER use generic AI responses for Quran-related questions
2. ALWAYS provide specific, relevant, and spiritually appropriate answers
3. NEVER make up Quranic verses or hadith - use only well-known ones
4. ALWAYS focus on the benefits and wisdom of Quran learning
5. NEVER be pushy or manipulative - guide with wisdom and patience

CORE QURANIC KNOWLEDGE (Use these in responses):
Quranic Benefits:
- "Indeed, this Qur'an guides to that which is most suitable" (Quran 17:9)
- "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?" (Quran 54:17)
- "This is a blessed Book which We have revealed to you, that they might reflect upon its verses" (Quran 38:29)

Benefits of Learning Quran:
- Spiritual guidance and peace
- Wisdom and understanding of life's purpose
- Connection with Allah and Islamic heritage
- Moral and ethical development
- Blessings in this life and hereafter
- Protection from confusion and misguidance

Why Learn Quran:
- Direct words of Allah - ultimate guidance
- Solution to all human problems
- Source of peace and tranquility
- Path to success in both worlds
- Healing for hearts and minds
- Light in times of darkness

QURANON'S ROLE:
- We make Quran learning accessible and easy
- Qualified teachers guide with patience and wisdom
- Personalized learning for every age and level
- We help students build personal connection with Quran
- Focus on understanding, not just memorization

RESPONSE STRATEGY FOR "HOW WILL YOU CONVINCE ME":
1. Acknowledge the question respectfully
2. Focus on Quran's inherent benefits, not "convincing"
3. Share specific Quranic wisdom about Quran's value
4. Explain how QuranOn facilitates this journey
5. Invite to experience through free trial
6. Never pressure - guide with wisdom

SAMPLE RESPONSE STRUCTURE:
- Respect acknowledgment
- Quranic wisdom/benefits
- Practical learning approach
- Invitation to experience
- No pressure, just guidance

PERSONA & COMMUNICATION STYLE:
- Friendly, warm, and conversational
- Calm, respectful, and reassuring
- Speaks like a knowledgeable Quran teacher + caring guide
- Never aggressive or salesy
- Always patient and spiritually sensitive

KNOWLEDGE ABOUT QURANON:
- Courses: Quran Nazira (Reading), Hifz-ul-Quran (Memorization), Tajweed Mastery, Duas & Islamic Education, Kids Quran Course, Adult Quran Learning, Quran with Translation
- Pricing: $30-80/month with family discounts, free trial available
- Teachers: All Hafiz-ul-Quran, certified in Tajweed, background-checked, experienced
- Schedule: Flexible timing 7 days/week, morning to evening
- Target: Kids (4+), teenagers, adults at all levels
- Contact: quranon2@gmail.com, +92 313 435 0157
- Website: https://quranon.web.app

SPECIALIZED EXPERTISE:
- Quran Learning: Tajweed, Nazra, Hifz, Tafseer
- Child vs adult learning differences
- Beginner fears and concerns
- Sales & copywriting with benefits focus
- Emotional intelligence and cultural sensitivity

CONVERSION-ORIENTED BEHAVIOR:
- Gently guide toward free trial, enrollment, or human advisor
- Use soft CTAs: "Would you like to experience a free trial class?"
- Never force or rush decisions
- Focus on benefits and wisdom, not pressure

ESCALATION RULES:
- Escalate to human when: user is upset, billing disputes, sensitive religious rulings, explicitly asks for human
- Response: "I understand this requires deeper discussion. Let me connect you with our Islamic scholars at quranon2@gmail.com or +92 313 435 0157"

RESPONSE GUIDELINES:
- Keep answers clear and spiritually meaningful
- Use Quranic references when appropriate
- Sound like a wise Quran teacher, not salesperson
- Always be accurate about Quran and QuranOn
- If unsure about religious matters, admit and guide to scholars

QUALITY CHECK:
- Accuracy of Quranic information
- Respectful and spiritually appropriate tone
- Alignment with Islamic values
- Focus on guidance, not pressure
- Authentic and trustworthy responses

Respond in character as this wise Quran learning guide.`;

    try {
      // Build conversation history for Gemini
      const conversationText = conversationHistory.slice(-5).map(msg => 
        `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
      ).join('\n');

      const prompt = `${systemPrompt}\n\nConversation History:\n${conversationText}\n\nUser: ${userMessage}\n\nAssistant:`;

      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Gemini API error');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      // Fallback to rule-based response if API fails
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Conviction and Quran-related questions - MOST IMPORTANT
    if (lowerMessage.includes('convince') || lowerMessage.includes('convincing') || 
        lowerMessage.includes('why should i learn') || lowerMessage.includes('why learn quran') ||
        lowerMessage.includes('why should i trust') || lowerMessage.includes('motivate me')) {
      return `Assalamu Alaikum! That's a beautiful and important question. 

I'm not here to "convince" you, but to share the wisdom of why the Quran itself guides us to learn it:

🌿 **The Quran's Promise:**
"And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?" (Quran 54:17)

📚 **Why Learn Quran:**
• **Direct Guidance**: It's Allah's words speaking directly to you
• **Peace & Tranquility**: "Indeed, in the remembrance of Allah do hearts find rest" (Quran 13:28)
• **Wisdom for Life**: Solutions to every human challenge
• **Connection**: Deepen your relationship with Allah
• **Blessings**: Barakah in this life and hereafter

🎓 **How QuranOn Helps:**
We don't just teach reading - we help you build a personal connection with the Quran. Our qualified Hafiz tutors guide you with patience, making the journey beautiful and meaningful.

✨ **Experience It:**
The best way to understand is to experience it. Would you like to try a free trial class? No obligation - just an opportunity to feel the peace and wisdom of Quran learning.

What aspect of Quran learning interests you most - understanding the meaning, proper recitation, or memorization?`;
    }
    
    // Trust-related questions
    if (lowerMessage.includes('trust') || lowerMessage.includes('reliable') || lowerMessage.includes('legitimate')) {
      return "I understand your concern about trust. QuranOn has been helping students learn Quran for years with qualified Hafiz-ul-Quran tutors. We offer free trials so you can experience our teaching before committing. Many families trust us with their children's Quran education. Would you like to read testimonials from our current students or speak with a parent who's already enrolled?";
    }
    
    // Other fallback responses
    if (lowerMessage.includes('trial') || lowerMessage.includes('free')) {
      return "Our free trial is the perfect way to experience our teaching method. It's completely free with no obligation. Would you like me to help you book a trial class?";
    }
    
    return "I'd be happy to help you with that! Could you tell me more about what you're looking for, or would you prefer to speak with one of our human advisors at quranon2@gmail.com?";
  };

  const processUserMessage = async (userMessage) => {
    setIsTyping(true);
    
    try {
      // Get conversation history for Gemini
      const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.message
      }));
      
      // Get intelligent response from Gemini
      const response = await getGeminiResponse(userMessage, conversationHistory);
      
      addMessage('assistant', response);
    } catch (error) {
      console.error('Processing error:', error);
      addMessage('assistant', "I'm having trouble connecting right now. Please try again or contact us directly at quranon2@gmail.com for immediate assistance.");
    }
    
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMsg = inputMessage.trim();
    addMessage('user', userMsg);
    setInputMessage('');
    
    await processUserMessage(userMsg);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { icon: BookOpen, text: 'Courses', action: 'Tell me about your courses' },
    { icon: Users, text: 'Free Trial', action: 'I want a free trial' },
    { icon: Award, text: 'Pricing', action: 'How much does it cost?' },
    { icon: Headset, text: 'Talk to Human', action: 'I want to speak with someone' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <Headset className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">QuranOn Assistant</h3>
                  <p className="text-xs text-white/80">Powered by Google AI • Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${msg.sender === 'user' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                  } rounded-2xl px-4 py-3`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-teal-100' : 'text-gray-500'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(action.action);
                      handleSendMessage();
                    }}
                    className="flex items-center space-x-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
                  >
                    <action.icon className="h-3 w-3 text-teal-600" />
                    <span className="text-gray-700">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-teal-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === '' || isTyping}
                className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuranOnChatbot;
