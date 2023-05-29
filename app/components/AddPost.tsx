"use client";
// next
import { useState } from "react";

// library
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form>
      <div className="flex my-4">
        <textarea
          name="title"
          id=""
          placeholder="What's on your mind ?"
          cols={45}
          rows={15}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-lg rounded-md bg-gray-800 outline-none"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2 ">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-white"
          }`}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-sm font-semibold bg-teal-500 py-2 px-4 rounded-md disabled:opacity-25"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}
