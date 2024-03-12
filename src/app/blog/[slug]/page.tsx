import path from "path";
import * as fs from "node:fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import { Code } from "bright";

import { BlogMetadata } from "@/types";
import { BLOG_DIR_LOCATION } from "@/constant";

interface SingleBlogPageProps {
  params: { slug: string };
}

export default async function SingleBlogPage({
  params: { slug },
}: SingleBlogPageProps) {
  let source: Buffer | null = null;

  try {
    const blogPath = path.join(BLOG_DIR_LOCATION, `/${slug}/index.mdx`);
    source = await fs.readFile(blogPath);
  } catch (error) {
    console.error(error);
    return (
      <div className="text-center py-20">There is no blog of this slug.</div>
    );
  }

  const { content, frontmatter: metadata } = await compileMDX<BlogMetadata>({
    source: source,
    options: { parseFrontmatter: true },
    components: {
      pre: (props: any) => {
        return <Code {...props} theme="one-dark-pro" />;
      },
    },
  });

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-center font-semibold">{metadata.title}</h1>
      </div>
      <div className="prose max-w-4xl mx-auto prose-img:rounded-sm py-20">
        {content}
      </div>
    </div>
  );
}
