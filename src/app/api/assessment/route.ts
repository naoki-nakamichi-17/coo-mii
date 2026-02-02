import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ← 必須
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API payload:", body);

    const { assessment_id, user_id, answers } = body;

    const rows = answers.map((answer: any) => ({
      assessment_id,
      question_id: answer.question_id,
      response_level: answer.response_level,
      create_user_id: user_id,
    }));

    console.log("Insert rows:", rows);

    const { data, error } = await supabase
      .from("assessment_responses")
      .insert(rows)
      .select();

    if (error) {
      console.error("Supabase error detail:", error);
      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    console.log("Inserted:", data);

    return NextResponse.json({ success: true, data });
  } catch (e) {
    console.error("API crash:", e);
    return NextResponse.json(
      { success: false, error: String(e) },
      { status: 500 }
    );
  }
}
