export const getURLWithQueryParams = (base: string, params: object) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  return `${base}?${query}`;
};

export const LINKEDIN_URL = getURLWithQueryParams(
  "https://www.linkedin.com/oauth/v2/authorization",
  {
    response_type: "code",
    client_id: process.env.LINKEDIN_CLIENT_ID || "",
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI || "",
    state: process.env.LINKEDIN_STATE || "",
    scope: process.env.LINKEDIN_SCOPE || "",
  }
);
