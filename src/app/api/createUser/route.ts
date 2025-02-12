import { NextResponse } from "next/server";
import db from "../../../../prisma/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      password,
      image,
    }: {
      name: string;
      email: string;
      password: string;
      image: string;
    } = body;
    if (!name || !email || !password || !image) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }
    const findUser = await db.user.findUnique({
      where: { email },
    });
    if (findUser) {
      return NextResponse.json(
        { error: "Esse email já esta em uso." },
        { status: 409 }
      );
    }
    const user = await db.user.create({
      data: {
        name,
        email,
        image,
        password,
        carrinho: {
          create: {},
        },
      },
      include: {
        carrinho: true,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
