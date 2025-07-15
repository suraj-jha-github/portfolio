import {
  Loader,
  NavBar,
  Sidebar,
  Hero,
  About,
  TechStack,
  Projects,
  Testimonials,
  Footer,
  Contact,
} from "./sections";

const App = () => {
  return (
    <div className="bg-black-100 px-2 md:px-4 lg:px-8">
      <Loader />
      <NavBar />
      <Sidebar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
