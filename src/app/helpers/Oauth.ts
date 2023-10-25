import { getURLWithQueryParams } from "./linkedIn";

export const oAuth = async (code: string) => {
  const LINKEDIN_URL = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.LINKEDIN_REDIRECT_URI || "",
      client_id: process.env.LINKEDIN_CLIENT_ID || "",
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    }
  );
  let tok;

  let res = await fetch(LINKEDIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (res.ok) tok = await res.json();
  let { access_token, expires_in } = tok;

  let auth = "Bearer " + access_token;
  let u = {};

  let usr = await fetch("https://api.linkedin.com/v2/me", {
    method: "GET",
    headers: {
      Connection: "Keep-Alive",
      Authorization: auth,
    },
  });

  if (usr.ok) u = await usr.json();

  return u;
};
