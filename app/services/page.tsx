import React from 'react';
import Link from 'next/link';
import { Code, Brain, Cloud, Smartphone, Database, Zap, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const ServicesPage = () => (
  <Layout>
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: <Code className="w-16 h-16" />,
              title: 'Full-Stack Web Development',
              description: 'Complete web applications from concept to deployment using modern frameworks and technologies.',
              features: ['React/Next.js Frontend', 'Node.js/Python Backend', 'Database Design', 'API Development', 'Responsive Design', 'Performance Optimization'],
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: <Brain className="w-16 h-16" />,
              title: 'AI & Machine Learning',
              description: 'Intelligent solutions that automate processes and provide valuable business insights.',
              features: ['Custom AI Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots & Virtual Assistants', 'Data Science'],
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: <Cloud className="w-16 h-16" />,
              title: 'Cloud Solutions',
              description: 'Scalable, secure, and cost-effective cloud infrastructure and deployment strategies.',
              features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Containerization', 'Microservices Architecture', 'Cloud Migration', 'Security & Compliance'],
              gradient: 'from-green-500 to-teal-500'
            },
            {
              icon: <Smartphone className="w-16 h-16" />,
              title: 'Mobile App Development',
              description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
              features: ['React Native', 'Flutter Development', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications', 'Offline Functionality'],
              gradient: 'from-orange-500 to-red-500'
            },
            {
              icon: <Database className="w-16 h-16" />,
              title: 'API Development & Integration',
              description: 'Robust APIs and seamless third-party integrations for connected applications.',
              features: ['RESTful APIs', 'GraphQL', 'Third-party Integrations', 'API Documentation', 'Rate Limiting & Security', 'Webhook Implementation'],
              gradient: 'from-indigo-500 to-purple-500'
            },
            {
              icon: <Zap className="w-16 h-16" />,
              title: 'Performance Optimization',
              description: 'Speed up your applications with advanced optimization techniques and best practices.',
              features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'CDN Implementation', 'Load Balancing', 'Monitoring & Analytics'],
              gradient: 'from-yellow-500 to-orange-500'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className={`text-white mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.gradient} w-fit group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">Let&rsquo;s discuss your project and create something amazing together.</p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ServicesPage;
