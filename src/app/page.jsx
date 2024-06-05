import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./(dashboard)/developer/_components/Sidebar";
import { Children } from "react";

export default function Home() {
  return (
    <div className="flex h-full ">
      <aside className="w-[280px] fixed top-0 left-0 h-full">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px]">
        <NavbarComponent />
        <main className="p-4">
          {Children}
        </main>
      </div>
    </div>
  );
}
