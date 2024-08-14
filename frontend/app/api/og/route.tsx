import Image from "next/image";
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const image = searchParams.get("image") || "";
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
          objectFit: "fill",
          // paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {image && <img src={`${image}`} />}
        {/* <Image
          src={`https://github.com/${username}.png`}
          width={256}
          height={256}
          alt={username}
        /> */}
        {/* <p>github.com/{username}</p> */}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
