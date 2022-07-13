import "./style.css";

function Card({ cover, title }) {
  return (
    <div className="card-logement">
      <p>{title}</p>
      <div className="filter"></div>
      <img src={cover} alt={title} />
    </div>
  );
}

export default Card;
