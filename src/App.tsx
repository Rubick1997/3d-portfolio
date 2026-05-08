import {
  Hero,
  Navbar,
  About,
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
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
