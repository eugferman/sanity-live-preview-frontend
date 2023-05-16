// ./components/Movie.tsx

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "../lib/sanity.client";
import Head from "next/head";

const builder = imageUrlBuilder(client);

export default function Movie({ data }: { data?: SanityDocument }) {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <main className="container mx-auto prose prose-lg p-4">
        <h1>{data?.title}</h1>
        {data && <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(data?.poster).width(300).height(300).url()}
          width={300}
          height={300}
          alt={data?.title}
        />}
        <PortableText value={data?.overview} />
      </main>
    </>
  );
}
