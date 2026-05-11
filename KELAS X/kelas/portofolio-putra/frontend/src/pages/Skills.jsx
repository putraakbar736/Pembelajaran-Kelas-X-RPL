import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Laravel', 'Node.js', 'Express', 'PHP', 'Python'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Linux'] },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Keahlian Teknis</h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-colors group"
            >
              <h3 className="text-2xl font-semibold mb-6 text-neon-pink group-hover:text-neon-purple transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-text-secondary hover:text-white hover:border-neon-purple/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
