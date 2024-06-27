import Calendar from "@/components/Calendar";
import { getAttachmentByProjectIdService } from "@/service/attachment.service";
import { getProjectByIdService } from "@/service/project.service";

const CalendarPage = async ({ params }) => {
  const { id } = params;
  const projectDeadline = await getAttachmentByProjectIdService(id);
  const deadline = projectDeadline.payload || [];
  const project = await getProjectByIdService(id);
  let projects = project.payload || [];

  return (
    <main className="p-4 mt-1">
      <div className="bg-white p-6 rounded-lg shadow">
        <Calendar deadline={deadline} projects={projects} />
      </div>
    </main>
  );
};

export default CalendarPage;
