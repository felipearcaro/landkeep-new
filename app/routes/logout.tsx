import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";
import { logout } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
