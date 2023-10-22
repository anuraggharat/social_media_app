import prisma from "@/app/libs/prismadb";

export default async function getMessages(conversationId:string){
    try {
        const messages = await prisma.message.findMany({
            where:{
                conversationId: conversationId
            },
            include:{
                sender:true,
                seen:true
            },
            orderBy:{
                createdAt:'asc'
            }
        })
        return messages;
    } catch (error) {
        console.log(error)
        return []
    }
}