import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/index';
import { CardInfo } from '../../entities';

const CharacterDetailPage: React.FC = () => {
  const { id = '0' } = useParams<{ id: string }>();
  const character = useSelector((state: RootState) =>
    state.character.characters.find((char) => char.id === parseInt(id, 10)),
  );

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="character-detail-card">
      <CardInfo
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        type={character.type}
        gender={character.gender}
        image={character.image}
        episode={character.episode}
        location={character.location}
      />
    </div>
  );
};

export default CharacterDetailPage;
