"use client";
// next
import { useState } from "react";

// library
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { error } from "console";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // Create new post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("api/posts/addPost", { title }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log(data);
        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost}>
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
          type="submit"
          className="text-sm font-semibold bg-teal-500 py-2 px-4 rounded-md disabled:opacity-25"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}
