import React from 'react';
import styles from './CardHeader.module.css';

interface CardHeaderProps {
  id: number;
  name: string;
  image: string | undefined;
}

export const CardMain = ({ name, image }: CardHeaderProps): JSX.Element => {
  return (
    <div className={styles.cardHeader}>
      <h2 className={styles.cardName}>{name}</h2>
      <img src={image} alt={name} className={styles.cardImage} />
    </div>
  );
};
export default CardMain;
