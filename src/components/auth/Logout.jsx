import { doLogout } from "@/action";
import React from "react";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button type="submit" className="bg-blue-400 my-2 text-white p-1 rounded">
        Logout
      </button>
    </form>
  );
};

export default Logout;
