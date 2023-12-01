import AboutContainer from "./container/AboutContainer";
import BannerContainer from "./container/BannerContainer";
import Social from "../components/Social";
import Langage from "../components/Langage";
import Loader from "../components/Loader";

function Home() {
  return (
    <div className="Home">
      <Loader />
      <AboutContainer />
      <Langage />
      <BannerContainer />
      <Social />
    </div>
  );
}

export default Home;
