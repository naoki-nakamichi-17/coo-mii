import { redirect } from "next/navigation"

export default function Home() {
  return (
    <>
    {/* TODO: ここにlogin認証を実装して画面遷移を管理(AngularでいうRouting State管理をするイメージ) */}
    if (false) {
      redirect("/auth/signup")
    }
    </>
  );
}
