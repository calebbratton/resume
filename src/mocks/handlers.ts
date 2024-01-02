import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/comments", () => {
    return HttpResponse.json([]);
  }),
];
