import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-32 lg:py-48">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
              Stay Informed, Stay Ahead
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
              Discover the latest news, insights, and analysis from our team of
              expert journalists.
            </p>
            <div className="mt-8">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-lg font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-gray-700"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
