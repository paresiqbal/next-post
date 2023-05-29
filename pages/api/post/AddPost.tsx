// next
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

// components
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const session = await getServerSession(req, res, authOptions);

    if (!session)
      return res.status(401).json({ message: "Please sign in to make a post" });

    const title: string = req.body.title;

    // Get User
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // CHeck title
    if (title.length > 300)
      return res.status(403).json({ message: "Please write less then or 300" });
    if (title.length)
      return res.status(403).json({ message: "Message must be not empety" });

    // Create a post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ error: "Error has occured whilst making a post" });
    }
  }
}
