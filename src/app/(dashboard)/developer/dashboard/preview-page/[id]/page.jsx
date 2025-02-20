import FeedbackComponent from "@/components/FeedbackComponent";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";
import DeveloperPreviewTranslateComponent from "../../../_components/DeveloperPreviewTranslateComponent";
import { getDataByAttachmentIdService } from "@/service/attachment.service";
import { getCurrentUserProfileService } from "@/service/user.service";

const PreviewPage = async ({ params }) => {
  const { id } = params;
  const data = await getFeedbackByAttachmentIdService(id);
  const previewData = await getDataByAttachmentIdService(id);
  let previewDatas = previewData.payload || [];
  const currentUser = await getCurrentUserProfileService();
  const userId = currentUser.payload.userId;

  return (
    <div className="px-6 py-4">
      <div className="flex flex-col sticky w-full lg:flex-row gap-6">
        {/* Translation Table Section*/}
        <DeveloperPreviewTranslateComponent previewData={previewDatas} />
        {/*End Translation Table Section*/}

        {/* Feedback Section */}
        <section className=" w-full lg:w-1/3">
          <FeedbackComponent attachmentId={id} feedback={data} userId={userId}/>
        </section>
        {/*End Feedback Section */}
      </div>
    </div>
  );
};

export default PreviewPage;
