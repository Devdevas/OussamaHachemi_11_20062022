import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Navigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../../utils/context";
import Loader from "../../utils/Loader";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import star from "../../assets/star.svg";
import starGray from "../../assets/star-gray.svg";
import Collapse from "../../components/Collapse";

function Lodging() {
  const { id } = useParams();
  const { lodgings, isDataLoading } = useContext(DataContext);
  const [index, setIndex] = useState(0);

  const lodging = lodgings.find((element) => {
    return element.id === id;
  });

  if (!lodging) {
    return <Navigate to="/error" />;
  }

  const previousPicture = () => {
    index !== 0 ? setIndex(index - 1) : setIndex(lodging.pictures.length - 1);
  };

  const nextPicture = () => {
    index < lodging.pictures.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const rating = [];
  const getRating = () => {
    for (let i = 0; i < lodging.rating; i++) {
      rating.push(<img key={`${i}-star-red`} src={star} alt="rating" />);
    }
    while (rating.length < 5) {
      rating.push(
        <img key={`${Math.random()}-star-gray`} src={starGray} alt="rating" />
      );
    }
  };
  getRating();

  return (
    <div>
      <Header />
      {isDataLoading ? (
        <Loader />
      ) : (
        <article>
          <figure className="picture-container">
            <img
              src={arrowLeft}
              alt="arrow-left"
              className="arrow-left"
              onClick={previousPicture}
            />
            <img
              src={arrowRight}
              alt="arrow-right"
              className="arrow-right"
              onClick={nextPicture}
            />
            <p>{`${index + 1}/${lodging.pictures.length}`}</p>
            {<img src={lodging.pictures[index]} alt="0" className="picture" />}
          </figure>
          <figcaption>
            <div className="figcaption-header">
              <div>
                <h1 className="title">{lodging.title}</h1>
                <p className="location">{lodging.location}</p>
              </div>
              <div className="host">
                <p>{lodging.host.name}</p>
                <img src={lodging.host.picture} alt={lodging.host.name} />
              </div>
            </div>
            <div className="figcaption-body">
              <div className="tags">
                {lodging.tags.map((tag) => (
                  <p key={`${tag}-${id}`}>{tag}</p>
                ))}
              </div>
              <div className="rating">{rating}</div>
            </div>
          </figcaption>
          <section className="details">
            <Collapse title={"Description"} content={lodging.description} />
            <Collapse
              title={"Équipements"}
              content={
                <ul>
                  {lodging.equipments.map((equipment) => {
                    return <li key={`${id}-${equipment}`}>{equipment}</li>;
                  })}
                </ul>
              }
            />
          </section>
        </article>
      )}
      <Footer />
    </div>
  );
}

export default Lodging;
