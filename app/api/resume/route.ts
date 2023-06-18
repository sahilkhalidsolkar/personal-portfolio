import { client } from '@utility/utility';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const resume = await client.fetch(`*[_type == "resume"]{...,technologies[]->}`);
    return NextResponse.json(resume);
}