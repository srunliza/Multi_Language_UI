import React from "react";
import Link from "next/link";
import { getProjectByIdService } from "@/service/project.service";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import OpenAddMemberModalButton from "../../_components/ProjectLeaderAddMember";
import MemberProjectLeader from "@/components/MemberProjectLeader";

const CreateProjectPage = async ({ params }) => {
  const { id } = params;
  const project = await getProjectByIdService(id);
  let projects = project.payload || [];

  return (
    <div className="w-full px-6 py-4 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-semibold">{projects.projectName}</h2>
        <OpenAddMemberModalButton project={projects} />
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col flex-1 px-3 bg-white shadow-lg border rounded-xl">
          {/* Header */}
          <NavbarProjectLeaderComponent project={projects} />

          {/* Container */}
          <div className="py-10">
            <div>
              <p className="text-3xl text-gray-700 font-semibold text-center">
                Ready to add content?
              </p>
              <p className="text-center py-10">
                There are two ways to add content to your project - choose the
                most suitable option for you.
              </p>
            </div>

            {/* File upload */}
            <div className="flex flex-col items-center md:flex-row justify-center gap-3">
              <div className="pt-10 w-full lg:w-1/2 max-w-md">
                <div className="rounded-lg overflow-hidden">
                  <div className="flex justify-center">
                    <Link
                      href={`/project-leader/dashboard/upload-file/${id}`}
                    >
                      <div className="relative h-[250px] rounded-2xl border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center cursor-pointer">
                        <div className="absolute w-full px-5">
                          <h1 className="text-md leading-loose mb-2 text-center">
                            File Upload
                          </h1>
                          <hr className="w-full mb-3" />
                          <div className="flex flex-col items-center">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1602 46.0003C31.0668 46.0003 30.1602 45.0937 30.1602 44.0003V30.667C30.1602 29.5737 31.0668 28.667 32.1602 28.667C33.2535 28.667 34.1602 29.5737 34.1602 30.667V44.0003C34.1602 45.0937 33.2535 46.0003 32.1602 46.0003Z"
                                fill="#1E63F2"
                              />
                              <path
                                d="M38.6654 39.333H25.332C24.2387 39.333 23.332 38.4263 23.332 37.333C23.332 36.2397 24.2387 35.333 25.332 35.333H38.6654C39.7587 35.333 40.6654 36.2397 40.6654 37.333C40.6654 38.4263 39.7587 39.333 38.6654 39.333Z"
                                fill="#1E63F2"
                              />
                              <path
                                d="M45.332 60.6663H18.6654C6.90536 60.6663 3.33203 57.093 3.33203 45.333V18.6663C3.33203 6.90634 6.90536 3.33301 18.6654 3.33301H22.6654C27.332 3.33301 28.7987 4.85301 30.6654 7.33301L34.6654 12.6663C35.5454 13.8397 35.6787 13.9997 37.332 13.9997H45.332C57.092 13.9997 60.6654 17.573 60.6654 29.333V45.333C60.6654 57.093 57.092 60.6663 45.332 60.6663ZM18.6654 7.33301C9.14536 7.33301 7.33203 9.14634 7.33203 18.6663V45.333C7.33203 54.853 9.14536 56.6663 18.6654 56.6663H45.332C54.852 56.6663 56.6654 54.853 56.6654 45.333V29.333C56.6654 19.813 54.852 17.9997 45.332 17.9997H37.332C33.9187 17.9997 32.7987 16.8263 31.4654 15.0663L27.4654 9.73301C26.0787 7.89301 25.6787 7.33301 22.6654 7.33301H18.6654Z"
                                fill="#1E63F2"
                              />
                            </svg>
                            <p className="text-base py-2 text-blue-700">
                              Select a File Upload
                            </p>
                            <span className="block text-xs text-gray-400 font-normal">
                              Or Drag and Drop It here
                            </span>
                          </div>
                        </div>
                        <input
                          type="file"
                          className="h-full w-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* File upload add manually */}
              <div className="pt-10 w-full lg:w-1/2 max-w-md">
                <div className="rounded-lg overflow-hidden">
                  <div className="flex justify-center">
                    <Link
                      href={`/project-leader/dashboard/add-key-value/${id}`}
                    >
                      <div className="relative h-[250px] rounded-2xl border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center cursor-pointer">
                        <div className="absolute w-full px-5">
                          <h1 className="text-md leading-loose mb-2 text-center">
                            Add keys manually
                          </h1>
                          <hr className="w-full mb-3" />
                          <div className="flex flex-col items-center">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1602 46.0003C31.0668 46.0003 30.1602 45.0937 30.1602 44.0003V30.667C30.1602 29.5737 31.0668 28.667 32.1602 28.667C33.2535 28.667 34.1602 29.5737 34.1602 30.667V44.0003C34.1602 45.0937 33.2535 46.0003 32.1602 46.0003Z"
                                fill="#1E63F2"
                              />
                              <path
                                d="M38.6654 39.333H25.332C24.2387 39.333 23.332 38.4263 23.332 37.333C23.332 36.2397 24.2387 35.333 25.332 35.333H38.6654C39.7587 35.333 40.6654 36.2397 40.6654 37.333C40.6654 38.4263 39.7587 39.333 38.6654 39.333Z"
                                fill="#1E63F2"
                              />
                              <path
                                d="M45.332 60.6663H18.6654C6.90536 60.6663 3.33203 57.093 3.33203 45.333V18.6663C3.33203 6.90634 6.90536 3.33301 18.6654 3.33301H22.6654C27.332 3.33301 28.7987 4.85301 30.6654 7.33301L34.6654 12.6663C35.5454 13.8397 35.6787 13.9997 37.332 13.9997H45.332C57.092 13.9997 60.6654 17.573 60.6654 29.333V45.333C60.6654 57.093 57.092 60.6663 45.332 60.6663ZM18.6654 7.33301C9.14536 7.33301 7.33203 9.14634 7.33203 18.6663V45.333C7.33203 54.853 9.14536 56.6663 18.6654 56.6663H45.332C54.852 56.6663 56.6654 54.853 56.6654 45.333V29.333C56.6654 19.813 54.852 17.9997 45.332 17.9997H37.332C33.9187 17.9997 32.7987 16.8263 31.4654 15.0663L27.4654 9.73301C26.0787 7.89301 25.6787 7.33301 22.6654 7.33301H18.6654Z"
                                fill="#1E63F2"
                              />
                            </svg>
                            <p className="text-base py-2 text-blue-700">
                              Add keys and Value
                            </p>
                            <span className="block text-xs text-gray-400 font-normal">
                              Or Drag and Drop It here
                            </span>
                          </div>
                        </div>
                        <input
                          type="file"
                          className="h-full w-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[23%] lg:w-[23%] xl:block lg:hidden sm:hidden md:hidden">
          <MemberProjectLeader project={projects} />
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
