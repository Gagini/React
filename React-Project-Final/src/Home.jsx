import Hero from "./components/Hero";
import Recommend from "./components/Recommend";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
    return (
      <div>
        <Hero />
        <Services />
        <Recommend />
        <Testimonials />
      </div>
    );
  }
  