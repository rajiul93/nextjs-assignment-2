import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let findMany = await prisma.user.findMany();
    return NextResponse.json({ status: "success", data: findMany });
  } catch (error) {
    return NextResponse.json({ status: "Failed", data: error.toString() });
  }
}
