import './TrendingCard.scss';

function TrendingCard({ title, imageSerie }) {
  return (
    <div
      className="TrendingCard__globalContainer"
      style={{ backgroundImage: `url(${imageSerie})` }}
    >
      <p className="TrendingCard__title">{title}</p>
    </div>
  );
}

export default TrendingCard;
