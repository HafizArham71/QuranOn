import React from 'react';
import { termsOfServiceData } from '../mock';

const TermsOfService = () => {
  const { header, sections, contact } = termsOfServiceData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{header.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {header.subtitle}
          </p>
          <p className="text-white/70 mt-4">Last updated: {header.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Agreement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{sections[0].title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {sections[0].content}
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
            <p className="text-gray-700 font-medium">
              Using QuranOn indicates your acceptance of these terms and your commitment to uphold them in the spirit of Islamic learning and mutual respect.
            </p>
          </div>
        </div>

        {/* Service Description */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{sections[1].title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {sections[1].categories.map((category, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'bg-cyan-50' : 'bg-teal-50'} rounded-xl p-6`}>
                <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {sections[1].note}
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{sections[2].title}</h2>
          
          <div className="space-y-6">
            {sections[2].categories.map((category, index) => (
              <div key={index} className={`border-l-4 ${index === 0 ? 'border-cyan-500' : index === 1 ? 'border-teal-500' : 'border-emerald-500'} pl-6`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <ul className="text-gray-600 space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{sections[3].title}</h2>
          
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Fee Structure</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              {sections[3].feeStructure.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {sections[3].policies.map((policy, index) => (
              <div key={index} className={`${index === 0 ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'} rounded-lg p-4`}>
                <h4 className="font-semibold text-gray-900 mb-2">{policy.title}</h4>
                <p className="text-gray-600 text-sm">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{sections[4].title}</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4 font-medium">{sections[4].note}</p>
            <ul className="space-y-2">
              {sections[4].activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-3">•</span>
                  <span className="text-gray-600">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">{contact.title}</h2>
          <p className="text-white/90 mb-6">
            {contact.description}
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Legal Inquiries</h3>
                <p className="text-white/90">{contact.legalEmail}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">General Support</h3>
                <p className="text-white/90">{contact.supportEmail}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-white/90">{contact.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-white/90">{contact.officeHours}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;
