import { useEffect, useState } from "react";
import { getFeedbackByAttachmentIdService } from "@/service/feedback.service";
import FeedbackComponent from "./FeedbackComponent";

const FeedbackServer = ({ attachmentId }) => {
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      const data = await getFeedbackByAttachmentIdService(attachmentId);
      setFeedback(data);
    };

    fetchFeedback();
  }, [attachmentId]);

  return <FeedbackComponent feedback={feedback} />;
};

export default FeedbackServer;
