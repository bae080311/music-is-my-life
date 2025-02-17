import { useSearchParams } from "react-router-dom";
import Footer from "../shared/ui/footer";
import Header from "../shared/ui/header/header";
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
