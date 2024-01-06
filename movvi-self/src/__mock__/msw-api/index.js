import { http, HttpResponse } from "msw";

export const getData = http.get("api/user", () => {
  return HttpResponse.json([], {
    status: 200,
  });
});
