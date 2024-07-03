"use client";
import React, { useEffect, useState } from "react";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CreateProject from "@/components/CreateProject";
import PopUpLogoutComponent from "@/components/PopUpLogoutComponent";
import { getCurrentUserProfileService } from "@/service/user.service";

const PopUpProfileComponent = () => {
  const router = useRouter();
  const [animateProfile, setAnimateProfile] = useState(false);
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const [user, setUser] = useState({});

  const handleProfileClick = () => {
    setAnimateProfile(true);
    setTimeout(() => setAnimateProfile(false), 300);
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await getCurrentUserProfileService();
        setUser(response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleMenuItemClick = (key) => {
    switch (key) {
      case "view_profile":
        router.push("/employee/profile");
        break;
      case "settings":
        router.push("/employee/setting");
        break;
      case "new_project":
        setIsCreateProjectOpen(true);
        break;
      case "help_and_feedback":
        router.push("/employee/help_and_feedback");
        break;
      case "logout":
        setIsLogoutPopupVisible(true);
        break;
      default:
        break;
    }
  };

  const handleLogoutConfirm = () => {
    console.log("User confirmed logout");
    setIsLogoutPopupVisible(false);
    router.push("/");
  };

  const handleLogoutCancel = () => {
    console.log("User canceled logout");
    setIsLogoutPopupVisible(false);
  };

  const handleNewProjectClose = () => {
    setIsCreateProjectOpen(false);
  };

  return (
    <>
      <Dropdown
        radius="sm"
        classNames={{
          base: "before:bg-gray-100",
          content: "p-0 border-small border-gray-300 bg-white",
        }}
      >
        <DropdownTrigger>
          <img
            className={`inline-block h-[38px] w-[38px] rounded-full border-2 border-gray-300 cursor-pointer ${
              animateProfile ? "animate-scale-up" : ""
            }`}
            src={user?.payload?.image || "/Images/user-profile.png"}
            alt="Profile Image"
            onClick={handleProfileClick}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          disabledKeys={["profile"]}
          className="p-3 w-[400px] h-auto bg-white"
          itemClasses={{
            base: [
              "rounded-md",
              "text-gray-700",
              "transition-opacity",
              "data-[hover=true]:text-black",
              "data-[hover=true]:bg-gray-200",
              "dark:data-[hover=true]:bg-gray-100",
              "data-[selectable=true]:focus:bg-gray-100",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-gray-300",
            ],
          }}
          onAction={handleMenuItemClick}
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem
              isReadOnly
              key="profile"
              className="h-14 gap-2 opacity-100 hover:bg-gray-200 mb-6"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full border-2 border-gray-300"
                  src={user?.payload?.image || "/Images/user-profile.png"}
                  alt="User img"
                />
                <div className="ml-2">
                  <p className="text-gray-800 text-lg">
                    {user?.payload?.username}
                  </p>
                  <p className="text-gray-700 text-base">
                    {user?.payload?.email}
                  </p>
                </div>
              </div>
            </DropdownItem>

            <DropdownItem key="view_profile">
              <div className="flex items-center">
                <AccountBoxOutlinedIcon className="mx-2" />
                <p className="text-lg">View Profile</p>
              </div>
            </DropdownItem>
            <DropdownItem key="settings">
              <div className="flex items-center">
                <SettingsOutlinedIcon className="mx-2" />
                <p className="text-lg">Settings</p>
              </div>
            </DropdownItem>
            <DropdownItem key="new_project">
              <div className="flex items-center">
                <AddToPhotosOutlinedIcon className="mx-2" />
                <p className="text-lg">New Project</p>
              </div>
            </DropdownItem>
          </DropdownSection>

          <DropdownSection>
            <DropdownItem key="logout" className="text-red-500">
              <div className="flex items-center">
                <ExitToAppOutlinedIcon className="mx-2" />
                <p className="text-lg">Log Out</p>
              </div>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      {isCreateProjectOpen && <CreateProject onClose={handleNewProjectClose} />}
      {isLogoutPopupVisible && (
        <PopUpLogoutComponent
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}
    </>
  );
};

export default PopUpProfileComponent;
