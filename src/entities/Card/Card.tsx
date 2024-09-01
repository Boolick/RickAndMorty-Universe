import React from 'react';
import { useFetchCardsQuery } from '../../shared/api/apiSlice';
import { Character } from './types';

export const Card: React.FC = () => {
  const { data, error } = useFetchCardsQuery(undefined);
  if (error) return <div>Error occurred: {error.toString()}</div>;
  return (
    <div>
      {data?.results.map((character: Character) => (
        <div key={character.id} className="card">
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
