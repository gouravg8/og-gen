import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <NewspaperIcon />
              <span className="text-lg font-semibold">News Hub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/posts"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Articles
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
function NewspaperIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}
