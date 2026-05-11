import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Keahlian', path: '/skills' },
    { name: 'Proyek', path: '/projects' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Code2 className="text-neon-purple w-8 h-8" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
            DevPortfolio
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wider transition-colors hover:text-neon-pink ${
                  isActive ? 'text-neon-purple neon-text-purple' : 'text-text-secondary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {user ? (
            <button
              onClick={logout}
              className="text-sm font-medium uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-sm font-medium uppercase tracking-wider px-4 py-2 rounded border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 border-t border-white/10"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? 'text-neon-purple' : 'text-text-secondary hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {user ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="text-lg font-medium text-red-400 hover:text-red-300 transition-colors"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neon-purple border border-neon-purple px-6 py-2 rounded hover:bg-neon-purple hover:text-white transition-all duration-300"
            >
              Login
            </NavLink>
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
