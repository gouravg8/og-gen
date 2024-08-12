import { getAllPosts } from "@/app/actions/post";
import { NextResponse } from "next/server";

export async function GET() {
    const posts = await getAllPosts();
    try {
        return NextResponse.json(posts)
    } catch (error) {
        return NextResponse.json({ message: 'Can not get posts', error })
    }
}