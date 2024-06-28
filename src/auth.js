import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService, loginSclService } from "./service/auth.service";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const detail = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const user = await loginService(detail);
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
    Google,
    GitHub,
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (
        user &&
        account &&
        (account.provider === "google" || account.provider === "github")
      ) {
        console.log("user: ", user);
        const userInfo = {
          email: user.email,
          username: user.name,
          password: user.email,
          image: user.image,
        };

        try {
          const authenticatedUser = await loginSclService(userInfo);
          if (authenticatedUser) {
            token = { ...token, ...authenticatedUser };
            console.log("token: ", token);
          }
        } catch (error) {
          console.error("Error during social login:", error);
        }
      } else if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
