import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is our sacred trust. We protect your information with the utmost care.
          </p>
          <p className="text-white/70 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At QuranOn, we understand that privacy is not just a legal requirement but a fundamental right. 
            This Privacy Policy explains how we collect, use, protect, and share your information when you use 
            our Quran learning platform.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using QuranOn, you trust us with your personal information, and we take that responsibility seriously.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Name and contact details (email, phone)</li>
                <li>• Student information (age, learning goals)</li>
                <li>• Payment information (processed securely)</li>
                <li>• Communication preferences</li>
              </ul>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning Data</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Course progress and completion status</li>
                <li>• Session attendance and participation</li>
                <li>• Learning preferences and feedback</li>
                <li>• Performance metrics and achievements</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• IP address and device information</li>
                <li>• Browser type and operating system</li>
                <li>• Usage patterns and session duration</li>
                <li>• Cookies and similar technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Service Delivery</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Provide personalized Quran education</li>
                <li>• Schedule and manage learning sessions</li>
                <li>• Track progress and achievements</li>
                <li>• Communicate important updates</li>
              </ul>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Platform Improvement</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Enhance user experience</li>
                <li>• Develop new features</li>
                <li>• Analyze usage patterns</li>
                <li>• Ensure platform security</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Communication</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Send learning materials</li>
                <li>• Provide customer support</li>
                <li>• Share important announcements</li>
                <li>• Request feedback and reviews</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Meet regulatory requirements</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Ensure platform safety</li>
                <li>• Protect user rights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection & Security</h2>
          
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Security Measures</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>256-bit SSL encryption for all data transmission</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Secure payment processing with PCI compliance</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Regular security audits and vulnerability testing</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Strict access controls and authentication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-teal-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Access & Review</h3>
                <p className="text-gray-600 text-sm">Request access to your personal information and review how it's being used.</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-cyan-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Correction & Update</h3>
                <p className="text-gray-600 text-sm">Correct inaccurate or incomplete personal information.</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-emerald-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Data Deletion</h3>
                <p className="text-gray-600 text-sm">Request deletion of your personal information where legally permitted.</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-600 font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Opt-out Options</h3>
                <p className="text-gray-600 text-sm">Control marketing communications and certain data processing activities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Questions About Your Privacy?</h2>
          <p className="text-white/90 mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, 
            please don't hesitate to contact us.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/90">privacy@quranon.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/90">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-white/90">123 Islamic Education Lane<br />Learning City, LC 12345</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-white/90">Within 7 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
