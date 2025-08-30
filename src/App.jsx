import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/Services';
import ContactUs from './pages/ContactUs';
const IndustriesPage = () => (
  <div className="min-h-screen">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/Analytica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-6">
            Industries
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Transforming Industries Through Technology Innovation
          </p>
          <p className="text-lg text-gray-300">
            This page is under construction. We'll add the Industries content here later.
          </p>
        </div>
      </div>
    </section>
  </div>
);
const SoftwareDevelopmentPage = () => (
  <div className="min-h-screen">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/Analytica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-6">
            A-To-Z Software Development
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Complete Software Solutions from Concept to Deployment
          </p>
          <p className="text-lg text-gray-300">
            This page is under construction. We'll add the Software Development content here later.
          </p>
        </div>
      </div>
    </section>
  </div>
);
const ResearchPage = () => (
  <div className="min-h-screen">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/Analytica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-6">
            Research & Development
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Pioneering the Future Through Innovation
          </p>
          <p className="text-lg text-gray-300">
            This page is under construction. We'll add the Research & Development content here later.
          </p>
        </div>
      </div>
    </section>
  </div>
);
const PartnersPage = () => (
  <div className="min-h-screen">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/Analytica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-6">
            Partners
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Building Strong Partnerships for Success
          </p>
          <p className="text-lg text-gray-300">
            This page is under construction. We'll add the Partners content here later.
          </p>
        </div>
      </div>
    </section>
  </div>
);
const CareersPage = () => (
  <div className="min-h-screen">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/Analytica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-6">
            Careers/Internship
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Join Our Team and Shape the Future
          </p>
          <p className="text-lg text-gray-300">
            This page is under construction. We'll add the Careers content here later.
          </p>
        </div>
      </div>
    </section>
  </div>
);
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App w-full bg-[#141517] transition-colors duration-300">
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
