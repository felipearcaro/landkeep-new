import { LoaderFunction, Outlet } from "remix";
import DashboardLayout from "~/components/dashboardLayout";
import { authenticator } from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession();
  console.log("session info", session.get(authenticator.sessionKey));

  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
