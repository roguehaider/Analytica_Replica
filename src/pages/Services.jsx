import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';
const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {}
      <PageHero 
        heading="SERVICES"
        subtitle="EXCEPTIONAL TECHNOLOGY SOLUTIONS"
        bodyText="Tailored technology consulting, AI solutions, software, blockchain, healthcare, data analysis, and computer vision. Analytica drives your success with innovative customizations."
        videoSource="/videos/About-US.mp4"
      />
      {}
      <ServicesSection />
    </div>
  );
};
export default ServicesPage;
