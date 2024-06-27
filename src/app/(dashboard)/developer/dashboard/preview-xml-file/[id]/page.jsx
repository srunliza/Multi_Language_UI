import PreviewXmlFileComponent from "@/components/PreviewXMLFileDeveloperComponent";
import { getPreviewDataService } from "@/service/attachment.service";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";
import { getCurrentUserProfileService } from "@/service/user.service";

const PreviewXmlFilePage = async ({ params }) => {
  const { id } = params;
  const xml = await getPreviewDataService(id);
  let xmls = xml.payload || [];
  const data = await getFeedbackByAttachmentIdService(id);
  const currentUser = await getCurrentUserProfileService();
  const userId = currentUser.payload.userId;

  return (
    <PreviewXmlFileComponent
      xml={xmls}
      attachmentId={id}
      feedback={data}
      userId={userId}
    />
  );
};

export default PreviewXmlFilePage;
