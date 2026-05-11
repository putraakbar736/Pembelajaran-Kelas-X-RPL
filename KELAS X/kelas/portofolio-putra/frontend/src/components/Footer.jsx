import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass py-8 mt-20 border-t border-white/10 text-center relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-text-secondary hover:text-neon-purple transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-text-secondary hover:text-neon-pink transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-text-secondary hover:text-neon-purple transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-text-secondary hover:text-neon-pink transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} DevPortfolio. Dibuat dengan Laravel & React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
