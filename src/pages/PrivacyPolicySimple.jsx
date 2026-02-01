import React from 'react';
import { privacyPolicyData } from '../mock';

const PrivacyPolicySimple = () => {
  const { header, sections, contact } = privacyPolicyData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          {header.title}
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{sections[0].title}</h2>
          <p className="text-gray-600 leading-relaxed">
            {sections[0].content}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{sections[1].title}</h2>
          <div className="space-y-4">
            {sections[1].subsections.map((subsection, index) => (
              <div key={index} className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subsection.title}</h3>
                <ul className="text-gray-600 space-y-1">
                  {subsection.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{sections[2].title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sections[2].categories.map((category, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'bg-teal-50' : 'bg-cyan-50'} rounded-xl p-6`}>
                <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{sections[3].title}</h2>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
            <ul className="text-gray-600 space-y-2">
              {sections[3].securityMeasures.map((measure, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{sections[4].title}</h2>
          <div className="space-y-4">
            {sections[4].rights.map((right, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-teal-600 font-semibold text-sm">{right.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{right.title}</h3>
                  <p className="text-gray-600 text-sm">{right.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">{contact.title}</h2>
          <p className="text-white/90 mb-6">{contact.description}</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/90">{contact.email}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/90">{contact.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-white/90">{contact.address}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-white/90">{contact.responseTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySimple;
