import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/ResidentCard.css";

export default function ResidentCard({ url }) {
  const [resident, setResident] = useFetch();
  const [showEpisodes, setShowEpisodes] = useState(false);

  useEffect(() => {
    setResident(url);
  }, [url]);

  const status = resident?.status.toLowerCase();
  const statusIcon =
    status === "alive" ? "status-alive" : status === "dead" ? "status-dead" : "status-unknown";

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
  };

  return (
    <div className="card">
      <div className="card__image">
        <img
          className="card__image--img"
          src={resident?.image}
          alt={resident?.name}
        />
        <span className="card__image_status">
          <span className={`card__status-light ${statusIcon}`}></span>
          {resident?.status}
        </span>
      </div>
      <div className="card__body">
        <h3 className="card__name">{resident?.name}</h3>
        <div className="card__info">
          <span className="card__info-item">
            <span className="card__info-label">Specie: </span>
            {resident?.species}
          </span>
          <span className="card__info-item">
            <span className="card__info-label">Origin: </span>
            {resident?.origin?.name}
          </span>
          <span className="card__info-item">
            <span className="card__info-label">Episodes where appear: </span>
            <button className="card__episodes-button" onClick={toggleEpisodes}>
              {resident?.episode?.length}
            </button>
          </span>
          {showEpisodes && (
            <ul className="card__episodes-list">
              {resident?.episode.map((episode, index) => (
                <li key={index} className="card__episode-item">
                  {episode}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
