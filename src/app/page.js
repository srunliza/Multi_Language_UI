import Image from "next/image";
import CardComponent from "./components/CardComponent";
import FileCardComponent from "./components/FileCardComponent";
import ProjectCard from "./components/ProjectCardComponent";

const project = {
  name: "Web Designing",
  timeLeft: "1 Day left",
  progress: 75,
  members: [
    { name: "Alice", image: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg" },
    { name: "Bob", image: "https://t3.ftcdn.net/jpg/06/43/68/64/360_F_643686482_wdZr9fJEnrp6MwQcBtxKRpH9U4BXOaNL.jpg" },
    { name: "Charlie", image: "https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" },
    { name: "Dana", image: "https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg" },
    // More members...
  ]
};

export default function Home() {
  return (
    <main className="flex bg-slate-200 min-h-screen flex-col items-center justify-between p-24">
      <CardComponent />

      <div className="mt-4">
        <FileCardComponent />
      </div>


      <div className="mt-4">
        <ProjectCard project={project} />
      </div>
    </main>
  );
}
