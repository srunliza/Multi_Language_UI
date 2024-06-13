
const LoadingChatbotPage = () => {
    return ( 
       <>
        <div class="flex animate-pulse">
            <div class="flex-shrink-0">
                <span class="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
            </div>

            <div class="ms-4 mt-2 w-full">
                <p class="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 w-60"></p>

                <ul class="mt-5 space-y-3">
                <li class="w-full h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                <li class="w-full h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                <li class="w-full h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                <li class="w-full h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                </ul>
            </div>
        </div>
       </>
     );
}
 
export default LoadingChatbotPage;