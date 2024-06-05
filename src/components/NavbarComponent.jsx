import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NavbarComponent = () => {
  return (
    <nav class="bg-white pt-4 pr-10 flex justify-between items-center">
      <div class="flex items-center w-1/2">
        <div class="relative w-[17rem]">
          <input
            type="text"
            placeholder="Search project"
            class="border border-gray-300 rounded-lg py-2 pl-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="relative">
          <button class="focus:outline-none">
            <NotificationsOutlinedIcon />
          </button>

          <span class="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        <div class="flex items-center">
          <img
            class="inline-block size-[38px] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
