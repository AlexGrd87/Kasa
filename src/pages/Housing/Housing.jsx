import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import './Housing.scss';

const Housing = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />
    </div>
  );
};

export default Housing;
