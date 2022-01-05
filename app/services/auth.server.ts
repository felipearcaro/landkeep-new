// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { OAuth2Strategy } from "remix-auth-oauth2";

const getUser = async (callbackParams) => ({});

if (!process.env.APP_DOMAIN) throw new Error("App Domain not set.");
if (!process.env.COGNITO_DOMAIN) throw new Error("Cognito Domain not set.");
if (!process.env.COGNITO_CLIENT_ID)
  throw new Error("Cognito Client ID not set.");
if (!process.env.COGNITO_CLIENT_SECRET)
  throw new Error("Cognito Client Secret not set.");

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<any>(sessionStorage);

authenticator.use(
  new OAuth2Strategy(
    {
      authorizationURL: `${process.env.COGNITO_DOMAIN}/oauth2/authorize`,
      tokenURL: `${process.env.COGNITO_DOMAIN}/oauth2/token`,
      clientID: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      callbackURL: `${process.env.APP_DOMAIN}/auth/callback`,
    },
    // async ({ accessToken, refreshToken, extraParams, profile, context }) => {s
    async (callbackParams) => {
      console.log("callbackParams", callbackParams);
      // here you can use the params above to get the user and return it
      // what you do inside this and how you find the user is up to you
      return await getUser(callbackParams);
    }
  ),
  // this is optional, but if you setup more than one OAuth2 instance you will
  // need to set a custom name to each one
  "cognito"
);
