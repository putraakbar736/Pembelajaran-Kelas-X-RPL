import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Tentang Saya</h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Halo! Nama saya Putra Akbar dan saya senang membuat hal-hal yang hidup di internet. 
              Ketertarikan saya pada pengembangan web dimulai sejak tahun 2025 ketika saya memutuskan untuk memasuki SMK yang berjurusan Rekayasa 
              Perangkat Lunak (RPL). Di sinilah saya mulai belajar dasar-dasar pemrograman dan pengembangan web.
            </p>
            <p>
              Singkat cerita hingga hari ini, saya telah memiliki hak istimewa untuk bekerja di sebuah agensi periklanan, 
              start-up, perusahaan besar, dan studio desain yang dipimpin oleh mahasiswa. Fokus utama saya saat ini 
              adalah membangun produk yang aksesibel dan inklusif serta pengalaman digital untuk berbagai klien.
            </p>
            <p>
              Saya juga baru saja meluncurkan kursus yang mencakup semua yang Anda butuhkan untuk membangun aplikasi web 
              dengan API Spotify menggunakan Node & React.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass rounded-xl aspect-square overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Programming setup" 
                className="w-full h-full object-cover mix-blend-overlay hover:mix-blend-normal transition-all duration-500 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
