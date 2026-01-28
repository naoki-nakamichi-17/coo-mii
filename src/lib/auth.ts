import { cookies } from "next/headers"

export type Session = {
  userId: string
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const session = cookieStore.get("session")

  console.log(session);
  // if (!session) return null

  // 本来はDBやRedisで検証する
  return {
    userId: session ? session.value : "",
  }
}