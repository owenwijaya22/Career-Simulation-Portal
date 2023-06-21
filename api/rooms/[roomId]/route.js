// pages/api/room/[roomId].js
import { getRoom, deleteRoom } from '../../../controllers/roomController';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const room = await getRoom(params.roomId);
    return NextResponse.json(room);
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const deletedRoom = await deleteRoom(params.roomId);
    return NextResponse.json(deletedRoom);
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
