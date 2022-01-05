import { ActionFunction, json, LoaderFunction } from "remix";
import { authenticator } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  console.log("request", request);
  return await authenticator.authenticate("cognito", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log("request", request);
  return await authenticator.authenticate("cognito", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};
