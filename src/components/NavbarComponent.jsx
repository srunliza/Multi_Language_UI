import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Input } from "@nextui-org/input";
import SearchIcon from "@mui/icons-material/Search";

const NavbarComponent = () => {
  return (
    <nav className="bg-white sticky z-50 top-0 flex px-8 justify-between items-center border ">
      <div className="flex items-center justify-between h-16">
        <div class="flex items-center px-4">
          <Input
            classNames="max-w-[12rem] h-[240px] px-8 rounded-2xl flex justify-center items-center text-white shadow-lg"
            placeholder="Type to search..."
            size="md"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <NotificationsOutlinedIcon />
        </button>
        <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        <div className="flex items-center">
          <img
            className="inline-block size-[38px] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
