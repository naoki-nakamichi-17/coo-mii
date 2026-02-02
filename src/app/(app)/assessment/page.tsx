import { supabaseServer } from "@/lib/supabaseServer"
import AssessmentClient from "./AssessmentClient"

export default async function Page() {
  const userId = "296d0088-2c35-4330-a289-f56d40c41cc2"

  // ① assessment を作成（UUIDはDBが自動生成）
  const { data: assessment, error: assessmentError } = await supabaseServer
    .from("assessments")
    .insert({
      user_id: userId,
      title: "初回アセスメント",
      status: "0",
      create_user_id: userId,
      update_user_id: userId,
    })
    .select()
    .single()

  if (assessmentError || !assessment) {
    console.error(assessmentError)
    throw new Error("assessment 作成失敗")
  }

  // ② questions を取得
  const { data: rows, error: questionError } = await supabaseServer
    .from("questions")
    .select(`
      question_id,
      question_text,
      categories (
        name
      )
    `)
    .eq("del_flg", false)
    .order("question_id")

  if (questionError) {
    console.error(questionError)
    throw new Error("質問の取得に失敗しました")
  }

  const questions = (rows ?? []).map((q: any, index: number) => {
    const category = q.categories?.[0]

    return {
      id: q.question_id,
      code: String(index + 1),
      text: q.question_text,
      category: category?.name ?? "",
      subCategory: "",
      materialCodes: [],
    }
  })

  // 🔥 ③ assessment_questions を自動生成（FKを満たす）
  const assignmentRows = questions.map((q, index) => ({
    assessment_id: assessment.assessment_id,
    question_id: q.id,
    display_no: index + 1,          // ← これが必須
    is_required: true,             // ← 明示的に入れると安全
    create_user_id: userId,
    update_user_id: userId,
  }))

  const { error: assignError } = await supabaseServer
    .from("assessment_questions")
    .insert(assignmentRows)

  if (assignError) {
    console.error(assignError)
    throw new Error("assessment_questions 作成失敗")
  }

  // ④ Client に渡す
  return (
    <AssessmentClient
      questions={questions}
      assessmentId={assessment.assessment_id}
      userId={userId}
    />
  )
}
