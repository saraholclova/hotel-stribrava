export const Room = ({ image, name, price, onSelect, id, cardSelected }) => {
  return (
    <div onClick={() => onSelect(id)} className="card">
      <img className="card__image" src={image} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč za osobu</div>
    </div>
  );
};
