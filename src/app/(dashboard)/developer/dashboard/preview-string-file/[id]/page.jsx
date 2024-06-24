import PreviewJsonFileComponent from "@/components/PreviewJsonFileDeveloperComponent";
import { previewStringsService } from "@/service/attachment.service";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";

const PreviewStringsFilePage = async ({ params }) => {
  const { id } = params;
  const string = await previewStringsService(id);
  let strings = string.payload || [];
  const data = await getFeedbackByAttachmentIdService(id);

  return (
    <PreviewJsonFileComponent
      string={strings}
      attachmentId={id}
      feedback={data}
    />
  );
};

export default PreviewStringsFilePage;
