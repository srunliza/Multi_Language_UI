const ProfilePage = () => {
  return (
    <div class="flex h-screen items-center justify-center px-10">
      <div class="w-full sm:w-1/2  bg-white shadow-xl rounded-3xl">
        <div class="mt-10 flex justify-center mb-5 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN2MjSr0slVb3jxwjrIuBaAaqo669IBIKxw&usqp=CAU"
            class="rounded-full"
            alt=""
          />
        </div>
        <div class="flex justify-center px-5 ">
          <div class="border-b-2 border-gray-500 w-full"></div>
        </div>
        <div class="flex justify-center text-center p-5">
          <p>
            "I'm Jane Hong, and I recently graduated with an advanced diploma
            from Smith secondary school. I'm seeking an internship where I can
            apply my skills in content creation and increase my experience in
            digital marketing."
          </p>
        </div>
        <div class="flex justify-center gap-4 p-5">
          <button class="py-3 bg-indigo-500 font-semibold text-white w-1/4 rounded-xl hover:bg-indigo-600">
            Follow
          </button>
          <button class="py-3 bg-pink-500 font-semibold text-white w-1/4 rounded-xl hover:bg-pink-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
