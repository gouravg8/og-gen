import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../actions/post";

const Page = async () => {
  let posts = await getAllPosts();
  if (!posts.message) return <div>No posts found</div>;
  if (!Array.isArray(posts.message)) return <div>this is not array</div>;
  return (
    <div className="flex flex-col px-8 gap-4 mt-24 mb-6 w-full lg:w-1/3 mx-auto">
      {posts.message.map((post, index) => {
        return (
          <Link href={`/posts/${post.id}`} key={post.postUrl + index}>
            <Image
              className="rounded w-full"
              src={post.image}
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
