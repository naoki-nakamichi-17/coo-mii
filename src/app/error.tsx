"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>エラーが発生しました</h1>

      <p>{error.message}</p>

      <button onClick={reset}>
        再試行
      </button>
    </div>
  );
}
