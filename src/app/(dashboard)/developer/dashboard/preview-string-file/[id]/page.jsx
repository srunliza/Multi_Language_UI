import PreviewStringsFileComponent from "@/components/PreviewStringsFileDeveloper";
import { getPreviewDataService } from "@/service/attachment.service";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";
import { getCurrentUserProfileService } from "@/service/user.service";

const PreviewStringsFilePage = async ({ params }) => {
  const { id } = params;
  const string = await getPreviewDataService(id);
  let strings = string.payload || [];
  const data = await getFeedbackByAttachmentIdService(id);
  const currentUser = await getCurrentUserProfileService();
  const userId = currentUser.payload.userId;

  return (
    <PreviewStringsFileComponent
      string={strings}
      attachmentId={id}
      feedback={data}
      userId={userId}
    />
  );
};

export default PreviewStringsFilePage;
