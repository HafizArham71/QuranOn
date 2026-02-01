import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Welcome to QuranOn. These terms govern your use of our Quran learning platform and services.
          </p>
          <p className="text-white/70 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Agreement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By accessing and using QuranOn, you agree to be bound by these Terms of Service and all applicable 
            laws and regulations. If you do not agree with any of these terms, you are prohibited from using 
            our services.
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
            <p className="text-gray-700 font-medium">
              Using QuranOn indicates your acceptance of these terms and your commitment to uphold them in 
              the spirit of Islamic learning and mutual respect.
            </p>
          </div>
        </div>

        {/* Service Description */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-cyan-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Educational Services</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Live Quran reading and memorization classes</li>
                <li>• One-on-one tutoring with qualified instructors</li>
                <li>• Group learning sessions and workshops</li>
                <li>• Progress tracking and assessment tools</li>
                <li>• Islamic studies and Arabic language courses</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Platform Features</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Interactive learning materials</li>
                <li>• Video conferencing capabilities</li>
                <li>• Progress monitoring dashboard</li>
                <li>• Parent/guardian access for minor students</li>
                <li>• Mobile app for on-the-go learning</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any part of our services at any time 
            without prior notice. We will strive to provide advance notice for significant changes.
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Security</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Maintain confidentiality of your login credentials</li>
                <li>• Notify us immediately of unauthorized access</li>
                <li>• Use strong, unique passwords</li>
                <li>• Log out from shared devices</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conduct Guidelines</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Respect instructors and fellow students</li>
                <li>• Maintain Islamic etiquette during sessions</li>
                <li>• Participate actively and respectfully</li>
                <li>• Avoid disruptive or inappropriate behavior</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Integrity</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Complete your own work honestly</li>
                <li>• Attend scheduled sessions punctually</li>
                <li>• Provide accurate information</li>
                <li>• Follow instructor guidance respectfully</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
          
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Fee Structure</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Monthly subscription plans available</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Pay-per-session options</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Family discount packages</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Scholarship opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Payment Schedule</h4>
              <p className="text-gray-600 text-sm">
                Payments are due in advance of the service period. Late payments may result in service suspension 
                until payment is received.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Refund Policy</h4>
              <p className="text-gray-600 text-sm">
                Refunds are available within 7 days of purchase if you're not satisfied with our services. 
                After 7 days, refunds are prorated based on unused services.
              </p>
            </div>
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4 font-medium">
              The following activities are strictly prohibited and may result in immediate account termination:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-3">•</span>
                <span className="text-gray-600">Sharing account credentials with others</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">•</span>
                <span className="text-gray-600">Recording sessions without permission</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">•</span>
                <span className="text-gray-600">Harassment or discrimination of any kind</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">•</span>
                <span className="text-gray-600">Attempting to hack or disrupt our platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">•</span>
                <span className="text-gray-600">Using services for illegal or immoral purposes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">•</span>
                <span className="text-gray-600">Impersonating instructors or staff</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Our Content</h3>
              <p className="text-gray-600 leading-relaxed">
                All course materials, curriculum, videos, text, graphics, and other content on QuranOn are 
                owned by or licensed to us and are protected by copyright, trademark, and other intellectual 
                property laws.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Your License</h3>
              <p className="text-gray-600 leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use our content 
                for personal, non-commercial educational purposes during your subscription period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Restrictions</h3>
              <p className="text-gray-600 leading-relaxed">
                You may not copy, modify, distribute, transmit, display, perform, reproduce, publish, license, 
                create derivative works from, transfer, or sell any information, software, products or services 
                obtained from QuranOn.
              </p>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              To the fullest extent permitted by law, QuranOn shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including without limitation, loss of profits, data, 
              use, goodwill, or other intangible losses, resulting from your use of the services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our total liability for any claims arising out of or relating to these terms or the services 
              shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">By You</h3>
              <p className="text-gray-600 text-sm">
                You may terminate your account at any time through your account settings or by contacting 
                our support team. You'll continue to have access until the end of your current billing period.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">By Us</h3>
              <p className="text-gray-600 text-sm">
                We may terminate or suspend your account immediately for violation of these terms, 
                fraudulent activity, or any reason that threatens our platform integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
          <p className="text-white/90 mb-6">
            If you have any questions about these Terms of Service, please contact us. We're here to help 
            clarify any concerns and ensure you have a positive learning experience.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Legal Inquiries</h3>
                <p className="text-white/90">legal@quranon.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">General Support</h3>
                <p className="text-white/90">support@quranon.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-white/90">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-white/90">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
