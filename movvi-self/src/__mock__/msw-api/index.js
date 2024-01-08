import { http, HttpResponse } from "msw";

const userData = [];

export const getData = http.get("api/user", () => {
  return HttpResponse.json(userData, {
    status: 200,
  });
});

export const postSignUp = http.post("api/user/signUp", async ({ request }) => {
  const newUser = await request.json();
  const { name, email, password } = newUser;

  const userInfo = {
    name: name,
    email: email,
    password: password,
  };

  userData.push(userInfo);

  return HttpResponse.json(userData, { status: 201 });
});

export const postSignIn = http.post("api/user/signIn", async ({ request }) => {
  const newUser = await request.json();
  const { email, password } = newUser;

  const userInfo = userData.filter((el) => {
    return el.email === email && el.password === password;
  });

  return HttpResponse.json(userInfo.name, { status: 201 });
});
