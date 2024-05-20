import CreateProject from "./components/CreateProject";
import FileList from "./components/FileList";
import Notification from "./components/Notification";

export default function Home() {
  return (
    <main>
      <CreateProject />
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-8">
        <FileList />
      </div>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Notification />
      </div>
    </main>
  );
}
