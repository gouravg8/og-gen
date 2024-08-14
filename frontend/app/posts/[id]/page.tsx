import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import CopyLink from "@/components/CopyLink";
import { getPostById } from "@/app/actions/post";

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { message: post } = await getPostById(params.id);
  const currentUrl =
    process.env.NEXT_PUBLIC_FRONTEND_VERCEL_URL + "/posts/" + params.id;
  if (post && typeof post === "object" && post.image)
    return {
      title: post.title,
      openGraph: {
        title: post.title.slice(0, 100),
        description: post.description.slice(0, 150),
        url: currentUrl,
        type: "website",
        siteName: "News Hub",
        images: [
          {
            url:
              process.env.NEXT_PUBLIC_FRONTEND_VERCEL_URL +
              "/api/og?&image=" +
              post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  return undefined;
}

const page = async ({ params }: Props) => {
  //   calling the function to fetch the data
  const { message: post } = await getPostById(params.id);

  if (!post) return <div>No post found</div>;

  if (typeof post === "object" && post.image)
    return (
      <div className="w-full lg:w-1/2 mx-auto px-6 mt-24 mb-6 flex flex-col gap-4 justify-center align-middle items-center">
        <Image
          src={post.image}
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
              href={post.postUrl}
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

  return null;
};

export default page;
