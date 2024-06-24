import { previewXMLService } from "@/service/attachment.service";
import PreviewXmlFileComponent from "../../../../../../components/PreviewXML";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";

const PreviewXmlFilePage = async ({ params }) => {
  const { id } = params;
  const xml = await previewXMLService(id);
  let xmls = xml.payload || [];
  const data = await getFeedbackByAttachmentIdService(id);

  return <PreviewXmlFileComponent xml={xmls} attachmentId={id} feedback={data}/>;
};

export default PreviewXmlFilePage;
