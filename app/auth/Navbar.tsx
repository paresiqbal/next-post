// next
import Link from "next/link";

// pages
import Login from "./Login";

import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Logged from "./Logged";

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
        {session?.user && <Logged image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
}
