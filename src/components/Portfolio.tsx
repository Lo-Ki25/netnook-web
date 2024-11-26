import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Global Tech Solutions',
    description: 'Enterprise network infrastructure for Fortune 500 company',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Network', 'Infrastructure', 'Security']
  },
  {
    title: 'AI-Driven Analytics',
    description: 'Machine learning platform for predictive maintenance',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI', 'ML', 'Analytics']
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cloud', 'DevOps', 'Migration']
  }
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black" />
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[60vh] rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-xl text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}