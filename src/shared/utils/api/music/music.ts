import {
  Album,
  Artist,
  Player,
  Playlist,
  Search,
  User,
} from "../../../../entities/music";
import { API } from "../base/api";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("code")}`,
};

export const getUserProfile = async () => {
  return await API<User>("/me", {
    method: "GET",
    headers,
  });
};

export const search = async (query: string, type: string) => {
  return await API<Search>("/search", {
    method: "GET",
    headers,
    body: JSON.stringify({
      q: query,
      type: type,
    }),
  });
};

export const getArtist = async (artistId: string) => {
  return await API<Artist>(`/artists/${artistId}`, {
    method: "GET",
    headers,
  });
};

export const getPlaylist = async (playlistId: string) => {
  return await API<Playlist>(`/playlists/${playlistId}`, {
    method: "GET",
    headers,
  });
};

export const getPlayerState = async () => {
  return await API<Player>("/me/player", {
    method: "GET",
    headers,
  });
};

export const playTrack = async (trackId: string) => {
  return await API("/me/player/play", {
    method: "PUT",
    headers,
    body: JSON.stringify({
      uris: [`spotify:track:${trackId}`],
    }),
  });
};

export const getAlbum = async (albumId: string) => {
  return await API<Album>(`/albums/${albumId}`, {
    method: "GET",
    headers,
  });
};
