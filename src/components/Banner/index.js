import "./style.css";

function Banner({ banner }) {
  return (
    <div className="banner-container">
      <div className="banner-filter"></div>
      <img src={banner} alt="Banner home" />
    </div>
  );
}

export default Banner;
