import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Plans from './components/Plans';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import BackToTop from '@/components/BackToTop';
import SmoothScroll from '@/components/SmoothScroll';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='*:odd:bg-second-300'>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Contact />
        <Testimonials />
        <Gallery />
        <Location />
        {/* <NewsLetter /> */}

        {/* smooth scroll and back to top */}
        <BackToTop />
        <SmoothScroll />
      </main>
      <Footer />
    </>
  );
};

export default Home;
