import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-neon-pink font-mono tracking-widest uppercase mb-4 text-sm md:text-base">
          Halo, nama saya
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-primary">
          Putra Akbar.
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-text-secondary">
          Saya membuat aplikasi web.
        </h1>
        
        <p className="max-w-2xl text-text-secondary text-lg mb-12 mx-auto leading-relaxed">
          Saya adalah seorang full-stack developer yang berfokus pada pembuatan pengalaman digital yang luar biasa. 
          Saat ini, saya fokus membangun produk yang aksesibel dan berpusat pada manusia menggunakan Laravel dan React.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-full font-bold text-white flex items-center gap-3 border border-neon-purple/50 hover:bg-neon-purple/20 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            >
              Lihat Karya Saya
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-white transition-colors"
            >
              Hubungi Saya
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
