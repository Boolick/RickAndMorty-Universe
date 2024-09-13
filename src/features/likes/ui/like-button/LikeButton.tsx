import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/index';
import { toggleLike } from '../../model/likesSlice';
import styles from './LikeButton.module.css';

interface LikeButtonProps {
  id: number;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state: RootState) =>
    state.likes.likedIds.includes(id),
  );

  const handleToggleLike = (event: React.MouseEvent): void => {
    event.stopPropagation();
    dispatch(toggleLike(id));
  };

  return (
    <button className={styles.likeButton} onClick={handleToggleLike}>
      {isLiked ? '❤️' : '🤍'}
    </button>
  );
};
export default LikeButton;
