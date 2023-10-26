import NextAuth from "next-auth";
import LinkedinProvider from "next-auth/providers/linkedin";

const handler = NextAuth({
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "profile email",
        },
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token }) {
  //     token.userRole = "admin";
  //     return token;
  //   },
  // },
});

export { handler as GET, handler as POST };
