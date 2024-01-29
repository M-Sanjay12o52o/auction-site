import { db } from "@/app/db/script";
import { NextApiRequest, NextApiResponse } from "next";
import { getAuthSession } from "../auth/[...nextauth]/options";

export async function POST(req: Request, res: Response) {
  try {
    // const session = await getAuthSession();

    // if (!session?.user) {
    //   return new Response("Unauthorized", { status: 401 });
    // }

    const body = await req.json();

    console.log(body, "body");

    const { username, email, password } = body;

    console.log(body, "body");

    const emailExists = await db.user.findFirst({
      where: {
        email: email,
      },
    });

    console.log(emailExists, "emailExists");

    if (emailExists) {
      return new Response("Email already exists", { status: 409 });
    }

    const user = await db.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });

    console.log(user, "user");

    return new Response(user.username);
  } catch (error) {
    console.log(error);
  }
}
