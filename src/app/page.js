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
{/* 
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <div><SidebarComponent /></div>
        </div>
        <div className="col-span-10">
          <div><NavbarComponent /></div>
        </div>
      </div> */}
    </main>



  );
}
