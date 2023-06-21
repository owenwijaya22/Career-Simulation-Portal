import getCurrentUser from "@/app/actions/getCurrentUser";
import { MessageModel } from "@/app/types/Message";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            message,
            image,
            conversationId
        } = body;

        if(!currentUser?.id || !currentUser?.email){
            return new NextResponse('Unauthorized', { status: 401});
        }

        const newMessage = await MessageModel.create({
            body: message,
            image: image,
            conversationId: conversationId,
            from: currentUser.id,
        })
        const populatedMessage = await MessageModel.findById(newMessage._id)
        .populate('sender')
        .exec();
        return NextResponse.json(newMessage);

    } catch (error:any) {
        console.log(error, 'ERROR_MESSAGES');
        return new NextResponse('InternalError', { status:500 });
    }

}