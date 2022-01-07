import { redirect } from "remix";
import { cognito } from "~/aws-exports";
import { storage } from "~/services/session.server";
import jwtDecode from "jwt-decode";
import { http } from "~/utils";

export async function login(email: string, password: string) {
  if (!process.env.COGNITO_CLIENT_ID) throw Error("Client ID not set.");

  const resp = await cognito
    .initiateAuth({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: process.env.COGNITO_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    })
    .promise();
  console.log("resp", resp);
  if (!resp.AuthenticationResult) {
    throw new Error("Did not receive a valid AuthenticationResult.");
  }
  const { IdToken, RefreshToken } = resp?.AuthenticationResult;

  const session = await storage.getSession();
  session.set("accessToken", IdToken);
  session.set("refreshToken", RefreshToken);

  const decodedToken: { sub: string } = jwtDecode(IdToken ?? "");
  console.log("decodedToken", decodedToken);

  const userRes = await http.get(`/users/${decodedToken.sub}`, {
    headers: {
      Authorization: `${IdToken}`,
    },
  });
  console.log("userRes.data", userRes.data);
  session.set("user", userRes.data);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
