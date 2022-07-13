import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import BannerHome from "../../assets/banner-home.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../utils/context";
import Loader from "../../utils/Loader";
import Error from "../Error";

function Home() {
  const { lodgings, isDataLoading } = useContext(DataContext);

  if (!lodgings) {
    return <Error />;
  }

  return (
    <div>
      <Header />
      <div className="banner-home">
        <Banner banner={BannerHome} />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      {isDataLoading ? (
        <Loader />
      ) : (
        <section className="gallery">
          {lodgings.map((lodging) => {
            return (
              <Link key={lodging.id} to={`/logement/${lodging.id}`}>
                <Card
                  cover={lodging.cover}
                  title={lodging.title}
                />
              </Link>
            );
          })}
        </section>
      )}

      <Footer />
    </div>
  );
}

export default Home;
