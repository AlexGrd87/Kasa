import logements from '../../data/logements.json';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="home__card-section">
        <div className="home__card-list">
          {logements.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
