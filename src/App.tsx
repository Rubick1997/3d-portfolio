import {
  Hero,
  Navbar,
  About,
  Projects,
  Contact,
  Footer,
  Experience,
} from "@/sections";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
