import { google } from "googleapis";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const url = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});

console.log("Autorise cette application en visitant cette URL :", url);

rl.question("Entre le code que tu obtiens ici : ", async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Ton refresh token :", tokens.refresh_token);
  rl.close();
});
