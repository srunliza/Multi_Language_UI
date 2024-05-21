import CreateProject from "./components/CreateProject.jsx";
import FileList from "./components/FileList.jsx";
import NotificationAll from "./components/NotificationAll.jsx";
import NotificationUnread from "./components/NotificationUnread.jsx";
import UsernameForm from "./components/UsernameForm.jsx";

export default function Home() {
  return (
    <main>
      <CreateProject />
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-8">
        <FileList />
      </div>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <NotificationUnread />
      </div>
      <div className="min-h-screen bg-black flex items-center justify-center py-32">
        <NotificationAll />
      </div>
      <UsernameForm />
    </main>
  );
}
