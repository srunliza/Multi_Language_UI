import React from "react";

export default function NavbarComponent() {
  return (

    <main>
        <div class=" bg-gray-100">
        {/* <SidebarComponent /> */}
            <div class="flex flex-col flex-1 overflow-y-auto">
                <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div class="flex items-center px-4 ">
                        <input class="ml-[40px] mx-4 w-[481px] border rounded-md px-4 py-2" type="text" placeholder="Search" />
                    </div>
                    <div class="flex items-center pr-4 gap-4">
                        <button class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span class="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="./profile.svg" alt="user photo" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
