import { getCurrentUserProfileService } from "@/service/user.service";
import NavbarClient from "./NavbarClient";

const NavbarComponent = ({ toggleSidebar }) => {
  // const currentUser = await getCurrentUserProfileService();
  // console.log(currentUser)
  return <NavbarClient toggleSidebar={toggleSidebar} />;
};

export default NavbarComponent;
