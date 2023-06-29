// pages/api/message/index.js
import { addMessage } from '../../../controllers/messageController';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const messageData = await request.json();
    const newMessage = await addMessage(messageData);
    return NextResponse.json(newMessage);
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
