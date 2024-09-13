import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../model/deleteSlice';

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteCard = (event: React.MouseEvent): void => {
    event.stopPropagation();
    dispatch(deleteCard(id));
  };

  return <button onClick={handleDeleteCard}>🗑️</button>;
};
export default DeleteButton;
