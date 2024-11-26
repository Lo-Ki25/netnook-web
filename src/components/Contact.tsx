import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">123 Innovation Drive<br />Tech Valley, CA 94025</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">contact@netnook.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}