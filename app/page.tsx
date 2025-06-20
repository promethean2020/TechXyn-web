'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TechXYN = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  // Create floating particles
  useEffect(() => {
    const createParticles = () => {
      if (!particlesContainerRef.current) return;
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-[2px] h-[2px] bg-blue-300/60 rounded-full animate-float';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%h`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
        particlesContainerRef.current.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (targetId?.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleScroll));
    return () => links.forEach(link => link.removeEventListener('click', handleScroll));
  }, []);

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.background = window.scrollY > 100
          ? 'rgba(15, 15, 35, 0.95)'
          : 'rgba(15, 15, 35, 0.8)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target as HTMLElement;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);


    const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  const el = card as HTMLElement;
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `all 0.6s ease ${index * 0.1}s`;
  observer.observe(el);
});


    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>TechXYN Solutions - Full Stack & AI Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          overflow-x: hidden;
          line-height: 1.6;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Animated background particles */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]" ref={particlesContainerRef}></div>

      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-2xl bg-[rgba(15,15,35,0.8)] border-b border-blue-300/20 z-[1000] transition-all duration-300">
        <nav className="flex justify-between items-center px-[5%] py-4 max-w-[1400px] mx-auto">
          <div className="flex items-center space-x-2 text-2xl font-extrabold bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">
            <Image src="/logo.png" alt="TechXYN Logo" width={80} height={80} />
          </div>
          <ul className="flex list-none gap-8 max-md:hidden">
            {['home', 'services', 'about', 'contact'].map((section) => (
              <li key={section}>
                <Link href={`https://www.techxyn.com/${section === 'home'? '' : section}`} className="text-white no-underline font-medium relative transition-all duration-300 hover:text-blue-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-300 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-[5%]" id="home">
        <div className="max-w-[800px] animate-[fadeInUp_1s_ease-out]">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black mb-6 bg-gradient-to-r from-blue-300 via-purple-600 to-red-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradientShift_3s_ease-in-out_infinite]">
            TechXYN Solutions
          </h1>
          <p className="text-xl mb-10 text-white/80 animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Empowering businesses with cutting-edge full-stack development and AI solutions. We transform ideas into digital reality.
          </p>
          <div className="flex gap-6 justify-center flex-wrap animate-[fadeInUp_1s_ease-out_0.6s_both]">
            <Link href="https://www.techxyn.com/contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-300 to-purple-600 text-white font-semibold text-lg no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(64,224,255,0.3)]">
              Contact Us!
            </Link>
            <Link href="https://www.techxyn.com/services" className="px-10 py-4 rounded-full bg-transparent text-blue-300 border-2 border-blue-300 font-semibold text-lg no-underline transition-all duration-300 hover:bg-blue-300 hover:text-[#0f0f23] hover:-translate-y-1">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-[5%] max-w-[1400px] mx-auto" id="services">
        <h2 className="text-center text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">
          Our Expertise
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 mt-16">
          {[
            { icon: '🌐', title: 'Full-Stack Development', desc: 'Complete web applications from frontend to backend using modern frameworks like React, Vue, Node.js, and Python. We build scalable, responsive solutions tailored to your needs.' },
            { icon: '🤖', title: 'AI & Machine Learning', desc: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms. From chatbots to predictive analytics, we bring AI to your business processes.' },
            { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and deployment strategies using AWS, Azure, and Google Cloud. We ensure your applications are secure, fast, and always available.' },
            { icon: '📱', title: 'Mobile Development', desc: 'Cross-platform mobile applications using React Native and Flutter. Reach your audience on any device with seamless, native-quality experiences.' },
            { icon: '🔧', title: 'API Development', desc: 'Robust RESTful and GraphQL APIs that power your applications. We create secure, well-documented interfaces for seamless data exchange.' },
            { icon: '⚡', title: 'Performance Optimization', desc: 'Speed up your applications with advanced optimization techniques. From database tuning to frontend optimization, we make everything lightning fast.' },
          ].map((service, index) => (
            <div key={index} className="service-card bg-white/5 backdrop-blur-2xl border border-blue-300/20 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2.5 hover:border-blue-300/50 hover:shadow-[0_20px_40px_rgba(64,224,255,0.1)] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:to-blue-300/10 before:transition-[left] before:duration-500 hover:before:left-full">
              <div className="text-5xl mb-6 bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">{service.title}</h3>
              <p className="text-white/80 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-[5%] bg-black/20" id="about">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:text-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-blue-300">Why Choose TechXYN?</h2>
            <p className="text-lg text-white/80 mb-6">We&rsquo;re a team of passionate developers and AI specialists dedicated to delivering exceptional digital solutions. Our expertise spans the entire technology stack, from sleek user interfaces to complex backend systems and intelligent AI integrations.</p>
            <p className="text-lg text-white/80 mb-6">With years of experience in modern web technologies and emerging AI trends, we help businesses stay ahead of the curve. Every project is approached with innovation, precision, and a commitment to excellence.</p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: '150+', label: 'Projects Delivered' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-blue-300/10 rounded-2xl border border-blue-300/20">
                  <span className="block text-4xl font-extrabold text-blue-300">{stat.number}</span>
                  <span className="text-sm text-white/80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[400px] bg-gradient-to-r from-blue-300/10 to-purple-600/10 rounded-2xl flex items-center justify-center text-7xl border border-blue-300/30">
            💻✨🚀
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-[5%] text-center" id="contact">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-lg text-white/80 mb-10">
  Let&rsquo;s discuss your project and create something amazing together.
</p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link href={"https://www.techxyn.com/contact"} legacyBehavior>
            <a href="mailto:info@techxyn.com" className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-300 to-purple-600 text-white font-semibold text-lg no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(64,224,255,0.3)]">
              Get In Touch
            </a>
            </Link>
            <Link href={"https://www.techxyn.com/contact"} legacyBehavior>
            <a href="tel:03454506130" className="px-10 py-4 rounded-full bg-transparent text-blue-300 border-2 border-blue-300 font-semibold text-lg no-underline transition-all duration-300 hover:bg-blue-300 hover:text-[#0f0f23] hover:-translate-y-1">
              Call Us Now
            </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8 px-[5%] text-center border-t border-blue-300/20">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>
            <p>© 2025 TechXYN Solutions. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            {[
              { href: '#', title: 'LinkedIn', icon: '💼' },
              { href: '#', title: 'GitHub', icon: '🐱' },
              { href: '#', title: 'Twitter', icon: '🐦' },
              { href: '#', title: 'Email', icon: '📧' },
            ].map((link, index) => (
              <a key={index} href={link.href} title={link.title} className="text-blue-300 text-2xl transition-all duration-300 hover:-translate-y-1 hover:text-purple-600">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default TechXYN;
