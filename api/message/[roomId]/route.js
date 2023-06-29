// pages/api/message/[roomId].js
import { getAllMessage } from '../../../controllers/messageController';
import { NextResponse } from 'next/server';

export async function GET(request, {params}) {
  const {roomId} = params;
  try {
    const messages = await getAllMessage(roomId);
    return NextResponse.json(messages, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
