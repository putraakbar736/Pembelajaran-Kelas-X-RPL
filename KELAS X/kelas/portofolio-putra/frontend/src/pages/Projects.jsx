import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import api from '../lib/axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const staticProjects = [
    {
      id: 1,
      title: 'Neon Glow Portfolio',
      description: 'Website portfolio futuristik dengan efek glassmorphism dan animasi smooth. Dibangun menggunakan React dan Framer Motion dengan tema dark mode yang elegan.',
      tech_stack: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Backend REST API yang robust dengan autentikasi JWT.',
      tech_stack: ['Laravel', 'MySQL', 'REST API', 'Sanctum'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas interaktif dengan fitur drag-and-drop, real-time collaboration, dan dashboard analytics untuk tracking produktivitas tim.',
      tech_stack: ['Vue.js', 'Laravel', 'TailwindCSS', 'Pusher'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        console.warn('Backend not reachable, using fallback data');
        setProjects(staticProjects);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-6 py-20 flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Beberapa Karya Saya</h2>
          <div className="h-px bg-white/20 flex-1 max-w-md"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-purple"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 bg-red-500/10 p-4 rounded-lg border border-red-500/20">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden group flex flex-col h-full border-white/10 hover:border-neon-purple/50 transition-all duration-300 neon-box-purple"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-pink transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-text-secondary">
                      <a href="#" className="hover:text-neon-purple transition-colors"><FaGithub size={20} /></a>
                      <a href={project.link} className="hover:text-neon-purple transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {(Array.isArray(project.tech_stack) ? project.tech_stack : JSON.parse(project.tech_stack || '[]')).map((tech) => (
                      <span key={tech} className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
