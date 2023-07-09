import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma=new PrismaClient()


export const GET = async(req: NextRequest)=>{
    const lists=await prisma.lists.findMany({})
    
    console.log(lists)
    return NextResponse.json({lists})
}

export const POST=async(req: NextRequest)=>{
    const {name,email,color}=await req.json()
    const lists=await prisma.lists.create({
        data:{
            title:name,
            activity:email,
            color:color
        }
    })
    return NextResponse.json({
        message:"success",
        data:lists
    })
}
export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url).searchParams
    const id = Number(url.get('id')) || 0

    const lists = await prisma.lists.delete({
        where: {
            id: id
        }
    })

    if (!lists) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }

    return NextResponse.json({})
}

export const PUT=async(req:NextRequest)=>{
    const {id,name,email,color}= await req.json()
    const lists=await prisma.lists.update({
        where:{
            id:Number(id)
        },
        data:{
            title:name,
            activity:email,
            color:color
        }
    })
    return NextResponse.json({
        message:"Update Succes",
        data:lists
    })
}