import { getAttachmentByProjectIdService } from "@/service/attachment.service";
import { getAllLanguageService } from "@/service/language.service";
import AttachmentComponent from "../../_components/AttachmentDeveloper";

const AttachmentPage = async ({ params }) => {
  const { id } = params;
  const attachment = await getAttachmentByProjectIdService(id);
  let attachments = attachment.payload || [];
  const language = await getAllLanguageService();
  let languages = language.payload || [];

  return (
    <div className="w-full p-6">
      <div className="overflow-y-auto no-scrollbar">
        <AttachmentComponent attachment={attachments} language={languages} />
      </div>
    </div>
  );
};

export default AttachmentPage;
