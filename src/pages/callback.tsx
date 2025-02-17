import { useSearchParams } from "react-router-dom";
import Footer from "../widgets/footer";
import Header from "../widgets/header/header";
import { useEffect } from "react";

const Callback = () => {
  const [SearchParams] = useSearchParams();
  useEffect(() => {
    const code = SearchParams.get("code");
    code && localStorage.setItem("code", code);
  });
  return (
    <div>
      <Header />
      <main></main>
      <main>{}</main>
      <Footer />
    </div>
  );
};

export default Callback;
