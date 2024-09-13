import React from 'react';

interface RestoreAllButtonProps {
  onRestoreAll: () => void;
}

export const RestoreAllButton: React.FC<RestoreAllButtonProps> = ({
  onRestoreAll,
}) => {
  return <button onClick={onRestoreAll}> Restore cards</button>;
};

export default RestoreAllButton;
