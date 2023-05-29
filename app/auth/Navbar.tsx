// next
import Link from "next/link";

// pages
import Login from "./Login";

import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"} className="font-bold text-lg">
        Dashboard
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <h1>{session.user.name}</h1>}
      </ul>
    </nav>
  );
}
