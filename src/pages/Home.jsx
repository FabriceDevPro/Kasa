import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import CardContainer from "./Home/CardContainer";

const Home = () => {
  return (
    <>
      <Loader />
      <div className="Home">
        <PageTitle title="Kasa - Accueil" />
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
