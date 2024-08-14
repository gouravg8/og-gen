/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // const title = searchParams.get("title") || "No title";
    const image =
      searchParams.get("image") || "https://github.com/gouravg8.png";
    // const postUrl =
    //   searchParams.get("postUrl") || "https://og-image.vercel.app/api/og.png";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img title="og-image" src={`${image}`} alt="no imge" />
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
