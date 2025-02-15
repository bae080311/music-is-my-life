// 오디오북 정보
export interface AudioBook {
  id: string; // 오디오북의 Spotify ID
  name: string; // 오디오북의 이름
  artists: Artist[]; // 아티스트 목록
  available_markets: string[]; // 이용 가능한 시장 목록
  external_urls: { spotify: string }; // Spotify 외부 URL
  images: ImageObject[]; // 이미지 객체 배열
  release_date: string; // 출시일
  release_date_precision: string; // 출시일 정밀도
  type: string; // 객체 유형 (예: "audiobook")
  uri: string; // Spotify URI
}

// 아티스트 정보
export interface Artist {
  id: string; // 아티스트의 Spotify ID
  name: string; // 아티스트의 이름
  type: string; // 객체 유형 (예: "artist")
  uri: string; // Spotify URI
}

// 이미지 객체
export interface ImageObject {
  url: string; // 이미지 URL
  height: number; // 이미지 높이
  width: number; // 이미지 너비
}

// 플레이리스트 정보
export interface Playlist {
  id: string; // 플레이리스트의 Spotify ID
  name: string; // 플레이리스트의 이름
  description: string; // 플레이리스트 설명
  images: ImageObject[]; // 이미지 객체 배열
  owner: User; // 플레이리스트 소유자
  tracks: Track[]; // 트랙 목록
  type: string; // 객체 유형 (예: "playlist")
  uri: string; // Spotify URI
}

// 사용자 정보
export interface User {
  id: string; // 사용자의 Spotify ID
  display_name: string; // 사용자 표시 이름
  type: string; // 객체 유형 (예: "user")
  uri: string; // Spotify URI
}

// 트랙 정보
export interface Track {
  id: string; // 트랙의 Spotify ID
  name: string; // 트랙의 이름
  artists: Artist[]; // 아티스트 목록
  album: Album; // 앨범 정보
  duration_ms: number; // 트랙 길이 (밀리초 단위)
  preview_url: string; // 미리 듣기 URL
  type: string; // 객체 유형 (예: "track")
  uri: string; // Spotify URI
}

// 앨범 정보
export interface Album {
  id: string; // 앨범의 Spotify ID
  name: string; // 앨범의 이름
  release_date: string; // 출시일
  images: ImageObject[]; // 이미지 객체 배열
  type: string; // 객체 유형 (예: "album")
  uri: string; // Spotify URI
}

// 플레이어 상태
export interface Player {
  is_playing: boolean; // 현재 재생 중인지 여부
  item: Track; // 현재 재생 중인 트랙
  progress_ms: number; // 현재 재생 위치 (밀리초 단위)
  context: any; // 재생 컨텍스트 (예: 앨범, 재생목록 등)
  type: string; // 객체 유형 (예: "player")
  uri: string; // Spotify URI
}

// 검색 결과
export interface Search {
  tracks: Track[];
  albums: Album[];
  artists: Artist[];
  playlists: Playlist[];
  type: string; // 객체 유형 (예: "search")
  uri: string; // Spotify URI
}
