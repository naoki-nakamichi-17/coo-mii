import { z } from "zod";

export const assessmentAnswerSchema = z.object({
  questionId: z.number(),
  answer: z.enum(["1", "2", "3", "4"]), // 1～4のラジオ
  category: z.string(),
  subCategory: z.string(),
});

export const assessmentSubmitSchema = z.object({
  userId: z.string(),
  answers: z.array(assessmentAnswerSchema),
});