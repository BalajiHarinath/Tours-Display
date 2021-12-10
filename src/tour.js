import { useState } from "react";
const Tour = ({ id, name, info, image, price, tours, setTours }) => {
  const [more, setMore] = useState(false);
  function deleteHandler() {
    setTours(tours.filter((item) => item.id !== id));
  }
  return (
    <article>
      <img className="article-img" src={image} alt={name} />
      <div className="article-name-price-div">
        <p className="article-name">
          <b>{name}</b>
        </p>
        <p className="article-price">
          <b>Price ${price}</b>
        </p>
      </div>
      <p className="article-info">
        {more ? info : `${info.substring(1, 200)}...`}
        <button
          onClick={() => {
            setMore(!more);
          }}
          className="show-more"
        >
          {more ? "Read Less" : "Read More"}
        </button>
      </p>
      <button onClick={deleteHandler} className="delete">
        Not Interested
      </button>
    </article>
  );
};
export default Tour;
