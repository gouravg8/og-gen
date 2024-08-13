/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "No title";
    const image =
      searchParams.get("image") || "https://github.com/gouravg8.png";
    const postUrl =
      searchParams.get("postUrl") || "https://og-image.vercel.app/api/og.png";

    // const username = searchParams.get("username") || "gouravg8";
    // if (!username) {
    //   return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
    //     width: 1200,
    //     height: 630,
    //   });
    // }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "black",
            background: "#f6f6f6",
            width: "100%",
            height: "100%",
            paddingTop: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="256"
            height="256"
            src={`${image}`}
            style={{
              borderRadius: 128,
            }}
            alt={"no image"}
          />
          <h2>{title}</h2>
          <a href={`${postUrl}`} target="_blank" rel="noopener noreferrer">
            {postUrl}
          </a>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
