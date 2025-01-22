import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const {
    count,
    isLike,
    handleDecrement,
    handleIncrement,
    handleResetCounter,
    handleLikeToggle,
  } = useCounter();

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <button onClick={handleDecrement}>Kurang</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleResetCounter}>Reset</button>
      <button
        onClick={handleLikeToggle}
        style={{ backgroundColor: isLike ? "red" : "#1a1a1a" }}
      >
        {isLike ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Counter;
