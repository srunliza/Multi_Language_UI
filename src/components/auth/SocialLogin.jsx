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
          width={20}
          height={20}
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
          width={20}
          height={20}
          alt="github"
        />
      </button>
    </form>
  );
};

export default SocialLogin;
