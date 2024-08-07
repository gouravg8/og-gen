import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { getPost } from "@/lib/api";
import CopyLink from "@/components/CopyLink";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.id);
  const currentUrl = process.env.NEXT_PUBLIC_FRONTEND_VERCEL_URL + "/posts/" + params.id;
  return {
    title: post.title,
    openGraph: {
      title: post.title.slice(0, 100),
      description: post.description.slice(0, 150),
      url: currentUrl,
      type: "website",
      siteName: "News Hub",
      images: post?.imageUri,
    },
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  //   calling the function to fetch the data
  const post = await getPost(params.id);

  return (
    <div className="w-full lg:w-1/2 mx-auto px-6 my-6 flex flex-col gap-4 justify-center align-middle items-center">
      <Image
        src={post.imageUri}
        alt={post.title}
        width={0}
        height={0}
        sizes="100vw"
        className="rounded-lg w-full"
      />
      <div className="px-4 flex flex-col gap-4">
        <h2 className="font-semibold text-xl">{post.title}</h2>
        <div className="flex gap-4">
          <Link
            href={post.postUri}
            className="w-fit border px-3 py-1 border-gray-700 rounded-md"
          >
            visit
          </Link>
          <CopyLink />
        </div>
        <p>
          {post.description.length > 500
            ? post.description.slice(0, 500) + "..."
            : post.description}
        </p>
      </div>
    </div>
  );
};

export default page;
