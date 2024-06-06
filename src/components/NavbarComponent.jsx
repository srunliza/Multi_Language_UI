import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NavbarComponent = () => {
  return (
    <nav className="bg-white sticky z-50 top-0 shadow-md h-16 flex px-3 justify-between items-center border">
      <div className="flex items-center w-1/2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search project"
            className="border border-gray-300 my-1 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="focus:outline-none">
            <NotificationsOutlinedIcon />
          </button>

          <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

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
