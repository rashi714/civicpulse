import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emergencyNumbers = [
    { service: 'Police Emergency', number: '100', icon: '🚔' },
    { service: 'Fire Department', number: '101', icon: '🚒' },
    { service: 'Ambulance', number: '102', icon: '🚑' },
    { service: 'Disaster Management', number: '108', icon: '🆘' }
  ];

  const faqs = [
    {
      question: 'How do I report an issue?',
      answer: 'Click on the "Report Issue" button in the navigation bar, fill out the form with details about the issue, upload photos if available, and submit. You\'ll receive a unique complaint ID to track your report.'
    },
    {
      question: 'How can I track my complaint?',
      answer: 'Go to the "Track Complaint" page and enter your complaint ID (e.g., CP-2026-1042). You\'ll see the current status and timeline of your complaint.'
    },
    {
      question: 'What is the typical response time?',
      answer: 'Most complaints receive an initial response within 24-48 hours. Resolution time varies based on the issue complexity and priority level, but the average is 2-5 days.'
    },
    {
      question: 'Can I submit anonymous complaints?',
      answer: 'While you can leave the name field optional, we recommend providing your contact information for updates. Your information is kept confidential and only used for complaint tracking purposes.'
    },
    {
      question: 'What types of issues can I report?',
      answer: 'You can report any civic issue including roads, sanitation, water supply, electricity, public safety, drainage, street lights, and other city infrastructure problems.'
    },
    {
      question: 'How does the AI Helper work?',
      answer: 'Our AI analyzes your complaint description and automatically suggests the appropriate department, priority level, and creates a summary to help expedite the resolution process.'
    },
    {
      question: 'What if my issue is urgent?',
      answer: 'For life-threatening emergencies, always call the emergency numbers provided below. For urgent civic issues, our AI will automatically flag them as high priority for faster processing.'
    },
    {
      question: 'Can I update or add information to my complaint?',
      answer: 'Yes, you can contact our support team with your complaint ID to add additional information or updates to your existing complaint.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">
            We're here to help! Get answers to your questions or reach out to our team.
          </p>
        </div>

        {/* Emergency Numbers */}
        <div className="mb-12">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Emergency Numbers</h2>
                <p className="text-sm text-gray-600">For immediate assistance, call these numbers</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyNumbers.map((emergency, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-red-200">
                  <div className="text-3xl mb-2">{emergency.icon}</div>
                  <p className="font-semibold text-gray-900 mb-1">{emergency.service}</p>
                  <a href={`tel:${emergency.number}`} className="text-2xl font-bold text-red-600">
                    {emergency.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-2">Get help via email within 24 hours</p>
                  <a href="mailto:support@civicpulse.gov" className="text-blue-600 hover:text-blue-700 font-medium">
                    support@civicpulse.gov
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-2">Available Mon-Fri, 9AM-6PM</p>
                  <a href="tel:+1-800-CIVIC-00" className="text-green-600 hover:text-green-700 font-medium text-lg">
                    1-800-CIVIC-00
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p className="text-blue-100 mb-4">Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-blue-100">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-blue-100">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <HelpCircle className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
