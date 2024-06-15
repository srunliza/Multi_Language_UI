"use client"
import React from "react";
import FeedbackComponent from "@/components/FeedbackComponent";
import ProjectLeaderPreviewTranslateComponent from "../../_components/ProjectLeaderPreviewComponent";

const PreviewPage = () => {

    return (
        <div className="px-6 py-4">
            <div className="flex flex-col sticky w-full lg:flex-row gap-6">
                {/* Translation Table Section*/}
                <ProjectLeaderPreviewTranslateComponent />
                {/*End Translation Table Section*/}

                {/* Feedback Section */}
                <section class=" w-full lg:w-1/3">
                    <FeedbackComponent />
                </section>
                {/*End Feedback Section */}
            </div>
        </div>
    );
};

export default PreviewPage;
