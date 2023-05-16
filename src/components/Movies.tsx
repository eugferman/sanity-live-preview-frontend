// ./components/Movies.tsx

import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";

export default function Movies({ data }: { data?: SanityDocument[] }) {
  return (
    <>
      <Head>
        <title>{data?.length} Movies</title>
      </Head>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        {data?.map((movie) => (
          <Link
            key={movie._id}
            href={movie.slug.current}
            className="p-4 hover:bg-blue-50"
          >
            <h2>{movie?.title}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}
