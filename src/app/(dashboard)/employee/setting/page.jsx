import SettingComponent from "@/components/SettingComponent";
import { getCurrentUserProfileService } from "@/service/user.service";

const SettingPage = async () => {
  const currentUser = await getCurrentUserProfileService();

  return <SettingComponent currentUser={currentUser} />;
};

export default SettingPage;
