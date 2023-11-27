import { client } from '@utility/utility';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const author = await client.fetch(`*[_type == "author"]`);
    return NextResponse.json(author);
}