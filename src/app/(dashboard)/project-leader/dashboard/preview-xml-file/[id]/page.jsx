import { previewXMLService } from "@/service/attachment.service";
import PreviewXmlFileComponent from "../../../../../../components/PreviewXML";

const PreviewXmlFilePage = async ({ params }) => {
  const { id } = params;
  const xml = await previewXMLService(id);
  let xmls = xml.payload || [];

  return <PreviewXmlFileComponent xml={xmls} attachmentId={id} />;
};

export default PreviewXmlFilePage;
