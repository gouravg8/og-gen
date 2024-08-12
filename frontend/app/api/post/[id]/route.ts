import { NextRequest, NextResponse } from "next/server";
import { getPostById, initDb } from "@/app/actions/post";

export async function POST(req: NextRequest) {
    const { message } = await initDb();
    let outMessage = message ? "Data inserted" : "Data not inserted";
    return NextResponse.json({ message: outMessage }, { status: 200 })
}

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    const { id } = params;
    console.log('id', id, 'type: ', typeof id);
    console.log('req', req.nextUrl, params);

    if (id) {
        const post = await getPostById(Number(id));
        return NextResponse.json({ msg: post.message, error: post.error }, { status: 200 })
    }
}

