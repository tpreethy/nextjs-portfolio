import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
         <div className="container mt-24 mx-auto px-12 py-4">
            <HeaderSection/>
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
         </div>
      </main>
  );
}
