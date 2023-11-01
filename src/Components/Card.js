import "../App.css";

export default function Card({ city, state, country, handleClick, selected }) {
  return (
    <div
      className="Card"
      onClick={handleClick}
      style={
        selected
          ? {
              boxShadow: "0px 0px 4px 4px rgb(214, 214, 255)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "black",
            }
          : null
      }
    >
      <p>
        <span className="Card_city">{city}</span>, {state}
      </p>
      <p className="Card_country">{country}</p>
    </div>
  );
}
