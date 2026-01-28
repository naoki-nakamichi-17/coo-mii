import z from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスが正しくありません。" }),
  password: z
    .string()
    .min(6, { message: "パスワードは2文字以上で入力してください。" })
    .max(10, { message: "パスワードは10文字以内で入力してください。" })
})