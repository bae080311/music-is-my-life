import qs from "query-string";
import { authfunctions } from "../../shared/auth/auth";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

export const loginWithSpotify = () => {
  const state = authfunctions.generateRandomString(32);

  const authUrl =
    "https://accounts.spotify.com/authorize?" +
    qs.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      state: state,
    });

  window.location.href = authUrl;
};
