import { client } from '@utility/utility';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const projects = await client.fetch(`*[_type == "projects"]| order(_createdAt asc)`);
    return NextResponse.json(projects);
}