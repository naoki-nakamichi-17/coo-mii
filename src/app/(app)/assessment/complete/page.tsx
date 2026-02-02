// src/app/(app)/assessment/complete/page.tsx

import Link from "next/link"

type Props = {
  searchParams: {
    assessmentId?: string
  }
}

export default function AssessmentCompletePage({ searchParams }: Props) {
  const assessmentId = searchParams.assessmentId

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">
          回答が完了しました
        </h1>

        <p className="text-gray-600 mb-6">
          アセスメントの送信が正常に完了しました。
        </p>

        {assessmentId && (
          <p className="text-sm text-gray-400 mb-6">
            受付ID：{assessmentId}
          </p>
        )}

        <Link
          href="/mypage"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          マイページへ戻る
        </Link>
      </div>
    </div>
  )
}
