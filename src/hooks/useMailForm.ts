import { mailSchema } from "@/lib/mailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useMailForm = () => {
  const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      username: "",
      subject: "",
      email: "",
      content: "",
      file: undefined,
    }
  });

  const onSubmit = useCallback(async (values: z.infer<typeof mailSchema>) => {
    const { username, email, subject, content, file } = values;

    // form
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("content", content);
    formData.append("file", file[0]);

    try {
      // await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
      await fetch("/api/send", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { form, onSubmit };
}
