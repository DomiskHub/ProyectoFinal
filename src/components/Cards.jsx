import CatCard from "./CatCard";

const Cards = ({ cats }) => {
  return (
    <ul className="glide__slides">
      {cats.map((cat, index) => (
        <li className="glide__slide" key={index}>
          <CatCard cat={cat} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
