import { client } from '@utility/utility';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const experience = await client.fetch(`*[_type == "experience"]`);
    return NextResponse.json(experience);
}