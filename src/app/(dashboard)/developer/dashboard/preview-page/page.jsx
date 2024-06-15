import React from "react";
import FeedbackComponent from "@/components/FeedbackComponent";
import DeveloperPreviewTranslateComponent from "../../_components/DeveloperPreviewTranslateComponent";

const DeveloperPage = () => {
    return (
        <div class="px-6 py-4">
            <div class="flex flex-col sticky w-full lg:flex-row gap-6">

                {/* Translation Table Section*/}
                <DeveloperPreviewTranslateComponent />
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

export default DeveloperPage;
