import { client } from '@utility/utility';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest,{params}:{params:{id:string}}) {
    const id= params.id
    const singleProject = await client.fetch(`*[_id == "${id}"]`);
    return NextResponse.json(singleProject);
}