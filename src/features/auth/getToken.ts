import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

export const token = (code: string) => {
  axios
    .post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;

      localStorage.setItem("spotify_access_token", accessToken);
      localStorage.setItem("spotify_refresh_token", refreshToken);

      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);
    })
    .catch((error) => {
      console.error("Error fetching access token:", error);
    });
};
