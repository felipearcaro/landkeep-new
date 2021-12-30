import AWS from "aws-sdk";

export const cognito = new AWS.CognitoIdentityServiceProvider({
  region: "us-east-1",
});
