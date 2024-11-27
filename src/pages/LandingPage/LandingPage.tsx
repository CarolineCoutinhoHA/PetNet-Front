import Fluxogram from "../../components/Fluxogram/Fluxogram";
import Testimonials from "../../components/Testimonials/Testimonials";
import AdoptionBenefits from "../../components/Benefits/Benefits";
import FAQs from "../../components/FAQs/FAQs";
import Carousel from "../../components/Carousel/Carousel";
import ImpactAdoptionInfographic from "../../components/Impact/impact";
import About from "../../components/About/About";

const LandingPage = () => {
  return (
    <>
      <Carousel />
      <About />
      <Fluxogram />
      <AdoptionBenefits />
      <ImpactAdoptionInfographic />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default LandingPage;
