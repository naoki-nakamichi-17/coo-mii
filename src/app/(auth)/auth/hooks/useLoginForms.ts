import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginFormSchema } from "../lib/loginFormSchema";
import z from "zod";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {

  const [ error, setError ] = useState<string>("");

  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = async (formData) => {
    const { email, password } = formData;
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if(signInError) {
        setError(signInError.message);
        throw signInError;
      }

      router.push("/mypage");

    } catch (error) {
      if (error instanceof Error) {
      }
    }
  };

  return { form, onSubmit, error };
}