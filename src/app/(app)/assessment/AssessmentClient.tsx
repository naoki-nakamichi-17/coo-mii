"use client";

import { useState } from "react";
import { AssessmentQuestion } from "@/data/assessmentQuestions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation"

type Props = {
  questions: AssessmentQuestion[];
  assessmentId: string;
  userId: string;
};

export default function AssessmentClient({ questions, assessmentId, userId }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const router = useRouter()
  const setAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const submit = async () => {
    const payload = {
      assessment_id: assessmentId,
      user_id: userId,
      answers: Object.entries(answers).map(([qid, value]) => ({
        question_id: Number(qid),
        response_level: value,
      })),
    };

    const res = await fetch("/api/assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      alert("保存に失敗しました")
      return
    }
    router.push(`/assessment/complete?assessmentId=${assessmentId}`)
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="relative"
    >
      {/* ▼ 浮いている保存ボタン */}
      <button
        type="submit"
        className="
          fixed bottom-6 right-6
          h-16 w-16 rounded-full
          bg-blue-600 text-white
          shadow-xl
          hover:bg-blue-700
          active:scale-95
          transition
          flex items-center justify-center
          z-50
          text-sm font-bold
        "
      >
        保存
      </button>

      <div className="rounded-lg border">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="w-[50px] text-center">№</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">できている</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">だいたいできている</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">あまりできていない</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">できていない</TableHead>
              <TableHead className="w-3/4">内容</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {questions.map((q) => (
              <TableRow key={q.id}>
                <TableCell className="text-center">{q.code}</TableCell>

                <RadioGroup
                  className="contents"
                  value={answers[q.id]}
                  onValueChange={(v) => setAnswer(q.id, v)}
                >
                  <TableCell className="text-center">
                    <RadioGroupItem value="4" />
                  </TableCell>
                  <TableCell className="text-center">
                    <RadioGroupItem value="3" />
                  </TableCell>
                  <TableCell className="text-center">
                    <RadioGroupItem value="2" />
                  </TableCell>
                  <TableCell className="text-center">
                    <RadioGroupItem value="1" />
                  </TableCell>
                </RadioGroup>

                <TableCell>{q.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </form>
  );
}
