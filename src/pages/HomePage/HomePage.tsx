import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'app/index';
import { LikeButton, DeleteButton, restoreAllCards } from '../../features';
import { CardMain, setCharacters, Character } from '../../entities/index';
import { useFetchCardsQuery } from '../../shared/api/apiSlice';
import styles from './HomePage.module.css';
import { Header } from '../../shared/ui';

export const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchCardsQuery();
  const navigate = useNavigate();

  const [filterLiked, setFilterLiked] = useState(false);

  const likedIds = useSelector((state: RootState) => state.likes.likedIds);
  const deletedIds = useSelector((state: RootState) => state.delete.deletedIds);

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  const handleToggleFilter = (showLiked: boolean): void => {
    setFilterLiked(showLiked);
  };

  const handleRestoreAll = (): void => {
    dispatch(restoreAllCards());
  };

  // Фильтрация карточек в зависимости от состояния фильтра и удаленных карточек
  const filteredCards = data?.results.filter((card) => {
    if (deletedIds.includes(card.id)) return false;
    if (filterLiked) return likedIds.includes(card.id);
    return true;
  });

  const handleCardClick = (id: number): void => {
    navigate(`/character/${id}`);
  };

  return (
    <>
      <Header
        onToggleFilter={handleToggleFilter}
        onRestoreAll={handleRestoreAll}
      />
      <section className={styles.mainSection}>
        {filteredCards?.map((card: Character) => {
          const isLiked = likedIds.includes(card.id);

          return (
            <div key={card.id} className={styles.cardContainer}>
              <button
                className={`${styles.card} ${isLiked ? styles.likedCard : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <CardMain id={card.id} name={card.name} image={card.image} />
                <div className={styles.buttonBlock}>
                  <LikeButton id={card.id} />
                  <DeleteButton id={card.id} />
                </div>
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HomePage;
