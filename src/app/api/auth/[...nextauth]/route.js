import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import { loginService } from "@/service/auth.service";

export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(userDetail) {
        const detail = {
          email: userDetail.email,
          password: userDetail.password,
        };
        const login = await loginService(detail);
        return login;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  // calling secret key
  secret: process.env.NEXTAUTH_SECRET,
  // tell protected to used this segment for login
  pages: {
    signIn: "/login",
  },
};

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
