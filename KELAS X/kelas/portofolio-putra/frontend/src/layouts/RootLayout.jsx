import { Outlet } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="min-h-screen pt-24 relative z-10 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
