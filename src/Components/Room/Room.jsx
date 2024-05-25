export const Room = ({ image, name, price, onSelect, cardSelected }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč za osobu</div>
    </div>
  );
};
