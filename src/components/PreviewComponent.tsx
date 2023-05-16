// ./components/PreviewMovie.tsx

import Link from "next/link";
import { usePreview } from "../lib/sanity-preview";
import Movie from "./Movie";

const PreviewComponent = ({ query, queryParams, ComponentProp }: { query: string, queryParams: {[key: string]: any},  ComponentProp: any }) => {
  const data = usePreview(null, query, queryParams);

  return (
    <>
      <ComponentProp data={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

export default PreviewComponent;
