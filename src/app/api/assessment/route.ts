import { NextRequest, NextResponse } from "next/server";
import { assessmentSubmitSchema } from "@/lib/assessmentSchema";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const raw = formData.get("payload") as string;
  const json = JSON.parse(raw);

  // Zodで検証
  const validated = assessmentSubmitSchema.parse(json);

  // リクエストfetch
  try {

    const res = await fetch(process.env.COOMII_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validated),
    });

    if (res.status !== 200) {
      new Error(`COOMII API Error: ${res.status}`);
    }

    const result = await res.json();
    return NextResponse.json({ success: true, result });

  } catch (e) {
    console.error(e);
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      );
    }

    const res = await fetch(
      `${process.env.COOMII_API_URL!}/assessment?userId=${userId}`,
      { method: "GET" }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `COOMII API failed: ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    const result = await res.json();

    return NextResponse.json({ success: true, result });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { success: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}