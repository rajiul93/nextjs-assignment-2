import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    let prisma = new PrismaClient();
    let reqBody = await req.json();
    let deleteOne = await prisma.user.update({
      where: { id: id },
      data:reqBody
    });
    return NextResponse.json({ status: "success", data: deleteOne });
  } catch (error) {
    return NextResponse.json({ status: "Failed", data: error.toString() });
  }
}
