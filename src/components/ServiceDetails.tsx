import { motion } from 'framer-motion';
import { Shield, Brain, Cloud, Globe2, Cpu, Lock, Network, Database } from 'lucide-react';

const detailedServices = [
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Enterprise-grade network infrastructure spanning continents.',
    features: [
      { icon: Network, text: '99.99% Uptime Guarantee' },
      { icon: Lock, text: 'End-to-End Encryption' },
      { icon: Database, text: 'Edge Computing Ready' }
    ],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat protection and security solutions.',
    features: [
      { icon: Lock, text: 'Zero Trust Architecture' },
      { icon: Shield, text: 'Real-time Threat Detection' },
      { icon: Brain, text: 'AI-Powered Security' }
    ],
    color: 'from-indigo-500 to-purple-400'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Custom AI solutions for business automation.',
    features: [
      { icon: Cpu, text: 'Machine Learning Models' },
      { icon: Brain, text: 'Natural Language Processing' },
      { icon: Database, text: 'Big Data Analytics' }
    ],
    color: 'from-purple-500 to-pink-400'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable and reliable cloud infrastructure.',
    features: [
      { icon: Database, text: 'Auto-scaling Platform' },
      { icon: Network, text: 'Multi-region Deployment' },
      { icon: Lock, text: 'Secure Data Storage' }
    ],
    color: 'from-cyan-500 to-blue-400'
  }
];

export function ServiceDetails() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-20 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`order-2 lg:order-${index % 2 === 0 ? 1 : 2}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.features.map((feature, i) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={feature.text}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                            <FeatureIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                <div className={`order-1 lg:order-${index % 2 === 0 ? 2 : 1} relative h-96`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-3xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-white opacity-50" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}