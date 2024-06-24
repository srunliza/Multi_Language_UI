import PreviewJsonFileComponent from "@/components/PreviewJsonFileDeveloperComponent";
import { previewJsonService } from "@/service/attachment.service";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";

const PreviewJsonFilePage = async ({ params }) => {
  const { id } = params;
  const json = await previewJsonService(id);
  let jsons = json.payload || [];
  const data = await getFeedbackByAttachmentIdService(id);

  return (
    <PreviewJsonFileComponent json={jsons} attachmentId={id} feedback={data} />
  );
};

export default PreviewJsonFilePage;
