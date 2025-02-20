import PreviewJsonFileComponent from "@/components/PreviewJson";
import { getPreviewDataService } from "@/service/attachment.service";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";
import { getCurrentUserProfileService } from "@/service/user.service";

const PreviewJsonFilePage = async ({ params }) => {
  const { id } = params;
  const json = await getPreviewDataService(id);
  let jsons = json.payload || [];
  const data = await getFeedbackByAttachmentIdService(id);
  const currentUser = await getCurrentUserProfileService();
  const userId = currentUser.payload.userId;

  return (
    <PreviewJsonFileComponent
      json={jsons}
      attachmentId={id}
      feedback={data}
      userId={userId}
    />
  );
};

export default PreviewJsonFilePage;
