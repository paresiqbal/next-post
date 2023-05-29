"use client";

import AddPost from "./components/AddPost";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h1>Hello World</h1>
      <AddPost />
    </main>
  );
}
