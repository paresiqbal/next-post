"use client";
// next
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex gap-4 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm font-semibold bg-teal-500 py-2 px-4 rounded-md disabled:opacity-25"
      >
        Sign Out
      </button>
      <Link href={"/"}>
        <Image
          src={image}
          width={64}
          height={64}
          alt="Profile"
          priority
          className="w-10 rounded-full"
        />
      </Link>
    </li>
  );
}
