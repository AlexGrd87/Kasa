import './Banner.scss';

const Banner = ({ title, small }) => {
  return (
    <div className={`banner ${small ? 'banner--small' : ''}`}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
