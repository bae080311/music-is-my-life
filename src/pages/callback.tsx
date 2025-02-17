import { useSearchParams } from "react-router-dom";
import Footer from "../widgets/footer";
import Header from "../widgets/header/header";
import { useEffect, useState } from "react";
import * as F from "../shared/utils/api/music/music";
import { Album, Artist, AudioBook } from "../entities/music";
import List from "../shared/ui/list/list";

const Callback = () => {
  const [SearchParams] = useSearchParams();
  const [audioBooks, setAudioBooks] = useState<AudioBook[]>();
  const [artists, setArtists] = useState<Artist[]>();
  const [albums, setAlbums] = useState<Album[]>();

  useEffect(() => {
    const code = SearchParams.get("code");
    code && localStorage.setItem("code", code);

    const fetchDatas = async () => {
      const fetchAudioBooks = await F.getAudioBooks();
      fetchAudioBooks.success && setAudioBooks(fetchAudioBooks.data);

      const fetchArtists = await F.getArtists();
      fetchArtists.success && setArtists(fetchArtists.data);

      const fetchAlbums = await F.getAlbums();
      fetchAlbums.success && setAlbums(fetchAlbums.data);
    };
    fetchDatas();
  }, []);
  return (
    <div>
      <Header />
      <main>
        {audioBooks && <List items={audioBooks} name="AudioBook" />}
        {artists && <List items={artists} name="Artist" />}
        {albums && <List items={albums} name="Album" />}
      </main>
      <Footer />
    </div>
  );
};

export default Callback;
