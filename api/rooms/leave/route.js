// pages/api/room/[roomId]/leave.js
import { leaveRoom } from '../../../controllers/roomController';
import { NextResponse } from 'next/server';

export async function PATCH(request, { params }) {
  const { roomId } = params;

  try {
    const updatedRoom = await leaveRoom(roomId);
    return NextResponse.json(updatedRoom);
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
