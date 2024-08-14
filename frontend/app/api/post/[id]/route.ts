import { NextRequest, NextResponse } from "next/server";
import { getPostById } from "@/app/actions/post";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    if (id) {
        const post = await getPostById(id);
        return NextResponse.json({ msg: post.message, error: post.error }, { status: 200 })
    }
}

