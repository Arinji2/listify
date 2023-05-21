export interface Images {
  height: number;
  url: string;
  width: number;
}

export interface Playlist {
  followers: {
    total: number;
  };
  images: Images[];
  name: string;
  owner: {
    display_name: string;
  };
  description: string;
  external_urls: {
    spotify: string;
  };
}

export interface Artists {
  name: string;
}

export interface Track {
  track: {
    name: string;
    artists: Artists[];
    album: {
      images: Images[];
    };
    external_urls: {
      spotify: string;
    };
  };
}

export interface Data {
  playlist_id: string;
  name: string;
  user_name: string;
  followers: number;
  images: string;
  tracks: Track[];
  description: string;
  url: string;
}
