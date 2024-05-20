import CreateProject from "./components/CreateProject";
import LanguageSelector from "./components/LanguageSelector";

export default function Home() {
  return (
    <main>
      <LanguageSelector />
      <CreateProject />
    </main>
  );
}
