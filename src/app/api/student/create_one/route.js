import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();
    let reqBody = await req.json();
    let createOne = await prisma.user.create({
      data: reqBody
    });
    return NextResponse.json({ status: "success", data: createOne });
  } catch (error) {
    return NextResponse.json({ status: "Failed", data: error.toString() });
  }
}
