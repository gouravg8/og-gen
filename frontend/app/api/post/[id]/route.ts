import { NextRequest, NextResponse } from "next/server";
import { getPostById } from "@/app/actions/post";

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    const { id } = params;
    console.log('id', id, 'type: ', typeof id);
    console.log('req', req.nextUrl, params);

    if (id) {
        const post = await getPostById(Number(id));
        return NextResponse.json({ msg: post.message, error: post.error }, { status: 200 })
    }
}

