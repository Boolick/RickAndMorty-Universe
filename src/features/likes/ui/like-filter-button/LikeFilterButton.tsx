import React from 'react';

interface LikeFilterButtonProps {
  onToggleFilter: (showLiked: boolean) => void;
}

export const LikeFilterButton: React.FC<LikeFilterButtonProps> = ({
  onToggleFilter,
}) => {
  const [showLiked, setShowLiked] = React.useState(false);

  const handleToggleFilter = (): void => {
    const newShowLiked = !showLiked;
    setShowLiked(newShowLiked);
    onToggleFilter(newShowLiked);
  };

  return (
    <button onClick={handleToggleFilter}>
      {showLiked ? 'Show All' : 'Show Liked'}
    </button>
  );
};

export default LikeFilterButton;
