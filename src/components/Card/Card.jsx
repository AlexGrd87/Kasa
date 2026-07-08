import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <p className="card__title">{title}</p>
    </Link>
  );
};

export default Card;
