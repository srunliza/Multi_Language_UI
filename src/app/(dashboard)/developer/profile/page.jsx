const ProfilePage = () => {
  return (
    <main class="flex items-center justify-center h-full">
      <div class="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-4">
          <div class="flex items-center">
            <img
              class="w-16 h-16 object-cover rounded-full"
              src="path_to_image"
              alt="Profile Picture"
            />
            <div class="ml-4">
              <h2 class="text-xl font-semibold text-gray-900">
                Vibolpheakneat Tan
              </h2>
              <p class="text-gray-500">Employee</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="text-gray-700 font-semibold">FIRST NAME</h3>
                <p class="text-gray-900">Vibolpheakneat</p>
              </div>
              <div>
                <h3 class="text-gray-700 font-semibold">LAST NAME</h3>
                <p class="text-gray-900">Tan</p>
              </div>
              <div>
                <h3 class="text-gray-700 font-semibold">Day Of Birth</h3>
                <p class="text-gray-900">Feb-14-2002</p>
              </div>
              <div>
                <h3 class="text-gray-700 font-semibold">Gender</h3>
                <p class="text-gray-900">Female</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h3 class="text-gray-700 font-semibold">Phone</h3>
              <p class="text-gray-900">+855 123 456 789</p>
            </div>
            <div>
              <h3 class="text-gray-700 font-semibold">Email</h3>
              <p class="text-gray-900">neathtan1402@gmail.com</p>
            </div>
            <div>
              <h3 class="text-gray-700 font-semibold">Telegram</h3>
              <p class="text-gray-900">@NeathZZ</p>
            </div>
            <div>
              <h3 class="text-gray-700 font-semibold">Facebook</h3>
              <p class="text-gray-900">Cutie Pie</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
