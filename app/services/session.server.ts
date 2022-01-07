import { createCookieSessionStorage } from "remix";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

export const storage = createCookieSessionStorage({
  cookie: {
    name: "_lk_session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [sessionSecret], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
});

// you can also export the methods individually for your own usage
// export let { getSession, commitSession, destroySession } = sessionStorage;
