"use client";
// next
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <li className="list-none">
        <button
          className="text-sm font-semibold bg-teal-500 py-2 px-4 rounded-md disabled:opacity-25"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </li>
    </div>
  );
}
