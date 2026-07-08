import './Banner.scss';

const Banner = ({ title, small, image }) => {
  return (
    <div
      className={`banner ${small ? 'banner--small' : ''}`}
      style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})` }}
    >
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
