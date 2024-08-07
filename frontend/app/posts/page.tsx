"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  const [posts, setPosts] = useState<
    {
      _id: string;
      title: string;
      description: string;
      imageUri: string;
      postUri: string;
    }[]
  >([]);

  useEffect(() => {
    console.log("server", process.env.NEXT_PUBLIC_SERVER_HOST);
    console.log("frontend", process.env.NEXT_PUBLIC_FRONTEND_VERCEL_URL);

    const fetchPost = async () => {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_HOST + "/api/posts"
      );
      setPosts(response.data);
    };

    fetchPost();
  }, []);

  if (!posts) return <div>No posts found</div>;

  return (
    <div className="flex flex-col px-8 gap-4 my-6 w-full lg:w-1/3 mx-auto">
      {posts.map((post, index) => {
        return (
          <Link href={`/posts/${post._id}`} key={post.postUri + index}>
            <Image
              className="rounded w-full"
              src={post.imageUri}
              alt={post.title}
              width={0}
              height={0}
              sizes="100vw"
            />
            <div>
              <h1 className="font-semibold text-lg">{post.title}</h1>
              <p className="text-sm">{post.description.slice(0, 75)}...</p>
            </div>
            <hr className="border-gray-600 my-4" />
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
