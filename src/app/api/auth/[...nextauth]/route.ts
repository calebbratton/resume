import NextAuth from "next-auth";
import LinkedinProvider from "next-auth/providers/linkedin";

const handler = NextAuth({
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "profile",
        },
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});

export { handler as GET, handler as POST };
