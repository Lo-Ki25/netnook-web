import { useState, useEffect } from 'react';
import { Menu, X, Globe2, Shield, Brain, Cloud, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    {
      icon: Globe2,
      label: 'Services',
      submenu: ['Global Network', 'Cybersecurity', 'AI Solutions', 'Cloud Services']
    },
    { icon: Shield, label: 'Portfolio' },
    { icon: Brain, label: 'Digital Lab' },
    { icon: Cloud, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id || 'home');
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer">
              Netnook
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map(({ icon: Icon, label, submenu }) => (
                <div key={label} className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === label.toLowerCase()
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => !submenu && scrollToSection(label)}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                    {submenu && <ChevronDown className="w-4 h-4" />}
                  </motion.button>

                  {submenu && (
                    <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative bg-black/90 backdrop-blur-xl">
                          {submenu.map((item) => (
                            <motion.button
                              key={item}
                              whileHover={{ x: 5 }}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-500/20"
                              onClick={() => scrollToSection(item)}
                            >
                              {item}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(({ icon: Icon, label, submenu }) => (
                <div key={label}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-500/20"
                    onClick={() => !submenu && scrollToSection(label)}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                    {submenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                  </motion.button>

                  {submenu && (
                    <div className="pl-6 space-y-1">
                      {submenu.map((item) => (
                        <motion.button
                          key={item}
                          whileHover={{ x: 5 }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white"
                          onClick={() => scrollToSection(item)}
                        >
                          {item}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}