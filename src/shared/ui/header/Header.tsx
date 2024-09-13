import React from 'react';
import { LikeFilterButton, RestoreButton } from '../../../features/index';
import styles from './Header.module.css';

interface HeaderProps {
  onToggleFilter: (showLiked: boolean) => void;
  onRestoreAll: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onToggleFilter,
  onRestoreAll,
}): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <h1>Universe of Rick and Morty</h1>
      <div className={styles['button-block']}>
        <LikeFilterButton onToggleFilter={onToggleFilter} />
        <RestoreButton onRestoreAll={onRestoreAll} />
      </div>
    </header>
  );
};

export default Header;
