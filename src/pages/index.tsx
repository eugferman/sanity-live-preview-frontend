// ./pages/index.tsx

import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../lib/sanity.client";
import Movies from "../components/Movies";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewComponent from "@/components/PreviewComponent";

const PreviewMovies = lazy(() => import("../components/PreviewMovies"));
const query = groq`*[_type == "movie" && defined(slug.current)]{
  _id,
  title, 
  slug
}`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};

export default function Home({
  preview,
  data,
}: {
  preview: Boolean;
  data: SanityDocument[];
}) {
  // PreviewSuspense shows while data is being fetched
  // The fetch happens inside PreviewMovies
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewComponent query={query} queryParams={{}} ComponentProp={Movies} />
      {/* <PreviewMovies query={query} /> */}
    </PreviewSuspense>
  ) : (
    <Movies data={data} />
  );
}
