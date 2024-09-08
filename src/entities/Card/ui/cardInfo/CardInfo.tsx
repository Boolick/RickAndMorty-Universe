import React, { useState } from 'react';
import styles from './CardInfo.module.css';

interface CardInfoProps {
  id: number;
  name: string;
  image: string | undefined;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  location?: {
    name: string;
    url: string;
  };
  episode?: string[];
}

export const CardInfo = ({
  id,
  name,
  image,
  status,
  species,
  type,
  gender,
  location,
  episode,
}: CardInfoProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleEpisodes = (): void => {
    setIsExpanded(!isExpanded);
  };
  return (
    <article className={styles.card}>
      {name && <h1>{name}</h1>}
      <div id={id.toString()} className={styles.cardInfo}>
        <div>
          <div className={styles.image}>
            {image && <img alt={`charachter: ${name}`} src={image}></img>}
          </div>
        </div>
        <div className={styles.info}>
          {status && <p>Status: {status}</p>}
          {species && <p>Species: {species}</p>}
          {type && <p>Type: {type}</p>}
          {gender && <p>Gender: {gender}</p>}
          {location && (
            <p>
              Location: {location.name} (
              <a href={location.url} target="_blank" rel="noopener noreferrer">
                View
              </a>
              )
            </p>
          )}
        </div>
      </div>
      <button className={styles.toggleButton} onClick={toggleEpisodes}>
        {isExpanded ? 'Hide Episodes' : 'Show Episodes'}
      </button>
      <div
        className={`${styles.episodesContainer} ${isExpanded ? styles.open : ''}`}
      >
        {episode && (
          <div className={styles.episodes}>
            {episode.map((item, index) => (
              <p key={`${id}-${index}`}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
export default CardInfo;
