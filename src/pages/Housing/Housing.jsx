import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import './Housing.scss';

const Housing = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const { title, location, tags, host, rating, description, equipments, pictures } = logement;

  return (
    <div className="housing">
      <Slideshow pictures={pictures} />

      <div className="housing__info">
        <div className="housing__details">
          <h1 className="housing__title">{title}</h1>
          <p className="housing__location">{location}</p>
          <ul className="housing__tags">
            {tags.map((tag) => (
              <li key={tag} className="housing__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="housing__host-rating">
          <div className="housing__host">
            <p className="housing__host-name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="housing__host-picture" />
          </div>
          <div className="housing__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`housing__star ${star <= Number(rating) ? 'housing__star--filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="housing__collapses">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className="housing__equipments">
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Housing;
