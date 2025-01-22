import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);
  const handleResetCounter = () => setCount(0);
  const handleLikeToggle = () => setIsLike((prevState) => !prevState);

  return {
    count,
    isLike,
    handleDecrement,
    handleIncrement,
    handleResetCounter,
    handleLikeToggle,
  };
};
