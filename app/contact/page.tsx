'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let&rsquo;s Build Something Amazing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with us and let&rsquo;s discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="fullstack" className="bg-slate-800">Full-Stack Development</option>
                    <option value="ai" className="bg-slate-800">AI & Machine Learning</option>
                    <option value="cloud" className="bg-slate-800">Cloud Solutions</option>
                    <option value="mobile" className="bg-slate-800">Mobile Development</option>
                    <option value="api" className="bg-slate-800">API Development</option>
                    <option value="optimization" className="bg-slate-800">Performance Optimization</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-400">info@techxyn.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-400">03454506130</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">Address</div>
                      <div className="text-gray-400">Lahore, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 hover:bg-cyan-500/30 hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/30 hover:scale-110 transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Free project consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Agile development process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Transparent pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Quality assurance testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Post-launch support
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Email Response</span>
                    <span className="text-cyan-400 font-medium">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Phone Response</span>
                    <span className="text-cyan-400 font-medium">Within 30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Project Proposal</span>
                    <span className="text-cyan-400 font-medium">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes! We offer comprehensive post-launch support including bug fixes, updates, and feature enhancements. Our support packages are tailored to your specific needs."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "We specialize in React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms like AWS and Azure. We choose the best tech stack for each project."
                },
                {
                  question: "How do you handle project pricing?",
                  answer: "We provide transparent, fixed-price quotes for most projects after understanding your requirements. For larger projects, we can work with milestone-based payments."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;