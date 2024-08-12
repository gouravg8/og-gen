import { getAllPosts, initDb } from "@/app/actions/post";
import {NextRequest, NextResponse } from "next/server";

export async function GET() {
    const posts = await getAllPosts();
    try {
        return NextResponse.json(posts)
    } catch (error) {
        return NextResponse.json({ message: 'Can not get posts', error })
    }
}

export async function POST(req: NextRequest) {
    const { message } = await initDb();
    let outMessage = message ? "Data inserted" : "Data not inserted";
    return NextResponse.json({ message: outMessage }, { status: 200 })
}