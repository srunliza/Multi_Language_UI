import TranslatorWorkSpaceClient from "../../../_components/TranslatorWorkSpaceCLient";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";
import { getDataByAttachmentIdService } from "@/service/attachment.service";

export default async function TranslatorWorkSpace({ params }) {
  const { id } = params;
  const data = await getFeedbackByAttachmentIdService(id);
  const previewData = await getDataByAttachmentIdService(id);
  let previewDatas = previewData.payload || [];

  return (
    <TranslatorWorkSpaceClient feedback={data} previewData={previewDatas} />
  );
}
