import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404</h1>
      <p>ページが見つかりません。</p>

      <Link href="/">
        トップへ戻る
      </Link>
    </div>
  );
}
