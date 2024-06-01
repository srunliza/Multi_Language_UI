import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
export default function Home() {
  return (
    <main>
      <div className=" flex h-screen bg-gray-100">
        <div>
          <SidebarComponent />
        </div>
        <div className="w-full">
          <NavbarComponent />
        </div>

      </div>

    </main>



  );
}
