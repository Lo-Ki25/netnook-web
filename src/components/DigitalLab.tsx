import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Code2, Workflow, Boxes } from 'lucide-react';

const tools = [
  {
    icon: Terminal,
    title: 'Command Center',
    description: 'Access all your digital tools from one centralized dashboard.'
  },
  {
    icon: Code2,
    title: 'API Integration',
    description: 'Seamlessly connect your systems with our robust API platform.'
  },
  {
    icon: Workflow,
    title: 'Workflow Builder',
    description: 'Create custom automation workflows with our visual builder.'
  },
  {
    icon: Boxes,
    title: 'Resource Manager',
    description: 'Efficiently manage and monitor your digital resources.'
  }
];

export function DigitalLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="digital-lab" ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
      
      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Digital Lab
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                    <p className="text-gray-300">{tool.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
            Launch Digital Lab
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}