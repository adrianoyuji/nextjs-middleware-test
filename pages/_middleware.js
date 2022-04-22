import { NextResponse } from "next/server";

export function middleware(req, ev) {
  console.log(req.headers);
  console.log(req.nextUrl.href);

  return NextResponse.next();
}
