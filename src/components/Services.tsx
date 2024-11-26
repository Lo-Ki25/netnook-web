import { motion } from 'framer-motion';
import { Shield, Brain, Cloud, Globe2 } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Seamless connectivity across continents with our advanced network infrastructure.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions protecting your digital assets 24/7.',
    color: 'from-indigo-500 to-purple-400'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence to transform your business operations.',
    color: 'from-purple-500 to-pink-400'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure designed for modern enterprises.',
    color: 'from-cyan-500 to-blue-400'
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-2.5 mb-6`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}