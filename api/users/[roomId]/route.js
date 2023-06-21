// pages/api/user/[roomId].js
import { getUsers } from '../../../controllers/userController';
import { NextResponse } from 'next/server';

export async function GET(request, {params}) {
  const { roomId } = params;
  try {
    const users = await getUsers(roomId);
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
