import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardMain, setCharacters, Character } from '../../entities/index';
import { useFetchCardsQuery } from '../../shared/api/apiSlice';
import styles from './HomePage.module.css';

export const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchCardsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  const handleCardClick = (id: number): void => {
    navigate(`/character/${id}`);
  };
  return (
    <section className={styles.mainSection}>
      {data?.results.map((card: Character) => (
        <button
          key={card.id}
          className="card"
          onClick={() => handleCardClick(card.id)}
        >
          <CardMain id={card.id} name={card.name} image={card.image} />
        </button>
      ))}
    </section>
  );
};

export default HomePage;
