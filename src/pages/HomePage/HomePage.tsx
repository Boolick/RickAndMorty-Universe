import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCharacters } from '../../entities/Card/model/characterSlice';
import { Character } from '../../entities/Card/model/types';
import { useFetchCardsQuery } from '../../shared/api/apiSlice';
import Card from '../../entities/Card/ui/Card';
import styles from './HomePage.module.css';

export const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchCardsQuery();
  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  return (
    <section
      className={styles.mainSection}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '2 rem',
      }}
    >
      {data?.results.map((card: Character) => (
        <Card key={card.id} id={card.id} name={card.name} image={card.image} />
      ))}
    </section>
  );
};

export default HomePage;
