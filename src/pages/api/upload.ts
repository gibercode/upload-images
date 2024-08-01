import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  console.log("🚀 ~ POST ~ request:", request);
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  console.log("🚀 ~ POST ~ filename:", filename);

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(filename || "", request.body, {
    access: "public",
  });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: "public",
  // });

  return NextResponse.json(blob);
}
