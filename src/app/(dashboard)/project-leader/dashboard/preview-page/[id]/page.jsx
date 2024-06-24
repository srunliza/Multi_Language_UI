import FeedbackComponent from "@/components/FeedbackComponent";
import ProjectLeaderPreviewTranslateComponent from "../../../_components/ProjectLeaderPreviewComponent";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";

const PreviewPage = async ({ params }) => {
  const { id } = params;
  const data = await getFeedbackByAttachmentIdService(id);

  return (
    <div className="px-6 py-4">
      <div className="flex flex-col sticky w-full lg:flex-row gap-6">
        {/* Translation Table Section*/}
        <ProjectLeaderPreviewTranslateComponent  attachmentId={id}/>
        {/*End Translation Table Section*/}

        {/* Feedback Section */}
        <section class=" w-full lg:w-1/3">
          <FeedbackComponent attachmentId={id} feedback={data}/>
        </section>
        {/*End Feedback Section */}
      </div>
    </div>
  );
};

export default PreviewPage;
