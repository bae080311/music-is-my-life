import {
  Album,
  Artist,
  AudioBook,
  Player,
  Playlist,
  Search,
  User,
} from "../../../../entities/music";
import { API } from "../base/api";

// 공통 headers 설정
const headers = {
  Authorization: `Bearer ${localStorage.getItem("spotify_access_token")}`,
};

// 사용자 프로필 정보 가져오기
export const getUserProfile = async () => {
  return await API<User>("/me", {
    method: "GET",
    headers,
  });
};

// 검색하기 (query와 type을 이용)
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

// 아티스트 정보 가져오기
export const getArtist = async (artistId: string) => {
  return await API<Artist>(`/artists/${artistId}`, {
    method: "GET",
    headers,
  });
};

export const getArtists = async () => {
  return await API<Artist[]>("/me/player/artists", {
    method: "GET",
    headers,
  });
};

// 플레이리스트 가져오기
export const getPlaylist = async (playlistId: string) => {
  return await API<Playlist>(`/playlists/${playlistId}`, {
    method: "GET",
    headers,
  });
};

// 현재 플레이어 상태 가져오기
export const getPlayerState = async () => {
  return await API<Player>("/me/player", {
    method: "GET",
    headers,
  });
};

// 트랙 재생하기
export const playTrack = async (trackId: string) => {
  return await API<void>("/me/player/play", {
    method: "PUT",
    headers,
    body: JSON.stringify({
      uris: [`spotify:track:${trackId}`],
    }),
  });
};

// 앨범 정보 가져오기
export const getAlbum = async (albumId: string) => {
  return await API<Album>(`/albums/${albumId}`, {
    method: "GET",
    headers,
  });
};

export const getAlbums = async () => {
  return await API<Album[]>("/me/player/albums", {
    method: "GET",
    headers,
  });
};

// 오디오북 정보 가져오기
export const getAudioBooks = async () => {
  return await API<AudioBook[]>("/me/player/audio-books", {
    method: "GET",
    headers,
  });
};
