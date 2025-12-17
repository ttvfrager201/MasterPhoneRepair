import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import Trust from './Trust';
import Testimonials from './Testimonials';
import Location from './Location';
import QuoteForm from './QuoteForm';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <Gallery />
      <Trust />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="location">
        <Location />
      </div>
      <QuoteForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Home;
