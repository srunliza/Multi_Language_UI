import { createProjectService } from "@/service/project.service";
import { revalidateTag } from "next/cache";

export const createProjectAction = async (formData) => {
  console.log("Project detail in action: ", formData);
  const project = {
    projectName: formData?.get("projectName"),
  };
  console.log("Project object in action: ", project);
  await createProjectService(project);
  revalidateTag("projectName");
};
