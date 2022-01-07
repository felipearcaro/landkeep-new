import { json, LoaderFunction, Outlet, redirect } from "remix";
import DashboardLayout from "~/components/dashboardLayout";
import { storage } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await storage.getSession(request.headers.get("Cookie"));

  if (!session.has("user")) return redirect("/login");
  else return json(200);
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
