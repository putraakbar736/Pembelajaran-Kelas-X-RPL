import { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../lib/axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await api.post('/contacts', formData);
      setStatus({ type: 'success', message: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda kembali.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi nanti.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 flex-1 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-neon-pink font-mono tracking-widest uppercase mb-4 text-sm">Selanjutnya?</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Hubungi Saya</h1>
          <p className="text-text-secondary text-lg">
            Meskipun saat ini saya tidak sedang mencari peluang baru, kotak masuk saya selalu terbuka. 
            Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!
          </p>
        </div>

        <div className="glass p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple rounded-full mix-blend-multiply filter blur-[64px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-pink rounded-full mix-blend-multiply filter blur-[64px] opacity-20"></div>
          
          {status.message && (
            <div className={`p-4 mb-6 rounded-lg border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-text-secondary font-mono">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
                  placeholder="Putra Akbar"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-text-secondary font-mono">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
                  placeholder="akbar@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-text-secondary font-mono">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors resize-none"
                placeholder="Halo..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg font-bold text-white glass border border-neon-purple/50 hover:bg-neon-purple/20 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
