import { useSearchParams } from "react-router-dom";
import Footer from "../widgets/footer";
import Header from "../widgets/header/header";
import { useEffect } from "react";
import { token } from "../features/auth/getToken";

const Callback = () => {
  const [SearchParams] = useSearchParams();

  useEffect(() => {
    if (!localStorage.getItem("spotify_access_token")) {
      const code = SearchParams.get("code");
      code && token(code);
    }
    const fetchDatas = async () => {};
    fetchDatas();
  }, []);
  return (
    <div>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default Callback;
