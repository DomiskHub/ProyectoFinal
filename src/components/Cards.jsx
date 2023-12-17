import CatCard from "./CatCard";

const Cards = ({ cats }) => {
  return (
    <ul className="glide__slides">
      {cats.map((cat, index) => (
        <li className="glide__slide">
          <CatCard cat={cat} key={index} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
