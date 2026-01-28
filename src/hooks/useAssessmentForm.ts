import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { assessmentSubmitSchema } from "@/lib/assessmentSchema";
import { z } from "zod";

export type AssessmentForm = z.infer<typeof assessmentSubmitSchema>;

export const useAssessmentForm = () => {
  return useForm<AssessmentForm>({
    resolver: zodResolver(assessmentSubmitSchema),
    defaultValues: {
      userId: "",
      answers: [],
    },
  });
};
