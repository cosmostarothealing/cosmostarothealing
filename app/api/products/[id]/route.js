import { NextResponse } from "next/server";

export async function GET(request) {
  // Get ID from URL path
  const { pathname } = new URL(request.url);
  const id = pathname.split('/').pop();

  const res = await fetch(`https://cosmos-admin-smoky.vercel.app/api/products/fetch/${id}`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}