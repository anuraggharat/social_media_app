import { NextResponse } from "next/server";

export async function GET(){
    const data ={message:"This is API for Next.js messenger application"}
    return NextResponse.json(data)
}