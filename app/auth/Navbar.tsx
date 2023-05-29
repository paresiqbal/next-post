// next
import Link from "next/link";

// pages
import Login from "./Login";

export default async function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"} className="font-bold text-lg">
        Dashboard
      </Link>
      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </nav>
  );
}
