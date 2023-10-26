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
      checks: ["none"],
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile(profile, tokens) {
        const defaultImage =
          "/defaultProfile.jpg" ||
          "https://cdn-icons-png.flaticon.com/user_847970/847970.png";
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
