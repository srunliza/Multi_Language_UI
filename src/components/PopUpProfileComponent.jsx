import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const PopUpProfileComponent = () => {
  const router = useRouter();
  const [animateProfile, setAnimateProfile] = useState(false);

  const handleProfileClick = () => {
    setAnimateProfile(true);
    setTimeout(() => setAnimateProfile(false), 300);
    router.push("/employee/profile");
  };

  const handleMenuItemClick = (key) => {
    switch (key) {
      case "view_profile":
        router.push("/employee/profile");
        break;
      case "settings":
        router.push("/employee/settings");
        break;
      case "new_project":
        router.push("/employee/new_project");
        break;
      case "help_and_feedback":
        router.push("/employee/help_and_feedback");
        break;
      case "logout":
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <img
          className={`inline-block h-[38px] w-[38px] rounded-full cursor-pointer ${
            animateProfile ? "animate-scale-up" : ""
          }`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz-0gZGjxoAp2wa6pbtGIR_9nsVwQZMHbOQ&s"
          alt="Profile Image"
          onClick={handleProfileClick}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
        onAction={handleMenuItemClick}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
            <User
              name="Srun Lisa"
              description="lisa@gmail.com"
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              img={{
                size: "sm",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz-0gZGjxoAp2wa6pbtGIR_9nsVwQZMHbOQ&s",
              }}
            />
          </DropdownItem>
          <DropdownItem key="view_profile">View Profile</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem key="new_project">New Project</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout">Log Out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PopUpProfileComponent;
