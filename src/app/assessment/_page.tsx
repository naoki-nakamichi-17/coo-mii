"use client";

import { assessmentQuestions } from "@/data/assessmentQuestions";
import { useAssessmentForm } from "@/hooks/useAssessmentForm";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";

function AssessmentPage() {
  const { register, handleSubmit, control } = useAssessmentForm();

  const { fields, replace } = useFieldArray({
    control,
    name: "answers",
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("payload", JSON.stringify(data));

    await fetch("/api/assesment", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <input {...register("userId")} placeholder="ユーザーID" />

      {fields.map((field, index) => (
        <div key={field.id} className="p-4 border rounded">
          <p>{assessmentQuestions[index].text}</p>

          {[1, 2, 3, 4].map((v) => (
            <label key={v} className="mr-4">
              <input
                type="radio"
                value={String(v)}
                {...register(`answers.${index}.answer`)}
              />
              {v}
            </label>
          ))}
        </div>
      ))}

      <Button type="submit">送信</Button>
    </form>
  );
}
