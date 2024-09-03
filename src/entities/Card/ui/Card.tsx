import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../model/types';

export const Card = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  image,
  episode,
}: Character): JSX.Element => {
  const navigate = useNavigate();
  const handleCardClick = (): void => {
    navigate(`/character/${id}`);
  };
  return (
    <button
      id={id.toString()}
      className="card"
      onClick={handleCardClick}
      style={{
        border: 'none',
        background: 'none',
        padding: 0,
        textAlign: 'left',
      }}
    >
      <div>
        {image && <img src={image} alt={name} />}
        <h2>{name}</h2>
      </div>
      {status && <p>Status: {status}</p>}
      {species && <p>Species: {species}</p>}
      {gender && <p>Gender: {gender}</p>}
      {type && <p>Type: {type}</p>} {episode && <ul>Episodes: {episode}</ul>}
    </button>
  );
};

export default Card;
