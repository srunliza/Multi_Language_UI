import { doSocialLogin } from "@/action";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin} className="flex gap-4">
      <button
        type="submit"
        name="action"
        value="google"
        className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100"
      >
        <img
          src="/assets/icons/google.svg"
          className="hover:scale-125 w-6 h-6 transition-all"
          alt="google icon"
        />
      </button>
      <button
        type="submit"
        name="action"
        value="github"
        className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100"
      >
        <img
          src="/assets/icons/github.svg"
          className="hover:scale-125 w-6 h-6 transition-all"
          alt="github"
        />
      </button>
      <button
        type="submit"
        name="action"
        value="facebook"
        className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100"
      >
        <img
          src="./Images/facebook.jpg"
          alt="Facebook"
          className="hover:scale-125 w-6 h-6 transition-all"
        />
      </button>
    </form>
  );
};

export default SocialLogin;
