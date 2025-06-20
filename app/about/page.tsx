import React from 'react';
import Link from 'next/link';
import { Users, Award, Clock, Zap, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const AboutPage = () => (
  <Layout>
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About TechXYN
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate team of developers and AI specialists dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Story</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
              TechXYN Solutions has been at the forefront of digital innovation. We believe that every business, 
              regardless of size, deserves access to world-class technology solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our team combines years of experience in web development with the latest advances in artificial intelligence 
              to create solutions that not only meet today's needs but are ready for tomorrow's challenges.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We're not just developers; we're problem solvers, innovators, and partners in your success.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-400/30 flex items-center justify-center">
              <div className="text-6xl">🚀💻✨</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Happy Clients' },
            { icon: <Award className="w-8 h-8" />, number: '150+', label: 'Projects Completed' },
            { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Years Experience' },
            { icon: <Zap className="w-8 h-8" />, number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-cyan-400 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.',
                icon: '🚀'
              },
              {
                title: 'Quality',
                description: 'Every line of code, every design element, and every solution is crafted with meticulous attention to detail.',
                icon: '⭐'
              },
              {
                title: 'Partnership',
                description: 'We believe in building long-term relationships with our clients, becoming true partners in their success.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help transform your business with technology.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;