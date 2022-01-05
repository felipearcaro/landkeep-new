import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";
import { authenticator } from "~/services/auth.server";
import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
