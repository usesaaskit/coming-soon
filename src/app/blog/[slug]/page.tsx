import path from "path";
import * as fs from "node:fs";
import { BLOG_DIR_LOCATION } from "@/constant";
import { compileMDX } from "next-mdx-remote/rsc";
import { Code } from "bright";
import { BlogMetadata } from "@/types";
import { Metadata } from "next";

interface SingleBlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: SingleBlogPageProps): Promise<Metadata | undefined> {
  let blog: Awaited<ReturnType<typeof getBlogBySlug>> | null = null;
  try {
    blog = await getBlogBySlug(params.slug);
  } catch (error) {
    return;
  }

  const { title, description, thumbnailURL, date } = blog.metadata;

  const ogImage = `https://usesaaskit.com${thumbnailURL}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `https://usesaaskit.com/blog/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

async function getBlogBySlug(slug: string) {
  const blogPath = path.join(BLOG_DIR_LOCATION, `/${slug}/index.mdx`);
  const source = fs.readFileSync(blogPath);

  const { content, frontmatter: metadata } = await compileMDX<BlogMetadata>({
    source: source,
    options: { parseFrontmatter: true },
    components: {
      pre: (props: any) => {
        return <Code {...props} theme="one-dark-pro" />;
      },
    },
  });

  return { content, metadata };
}

export default async function SingleBlogPage({
  params: { slug },
}: SingleBlogPageProps) {
  let blog: Awaited<ReturnType<typeof getBlogBySlug>> | null = null;
  try {
    blog = await getBlogBySlug(slug);
  } catch (error) {
    return (
      <div className="text-center py-20">There is no blog of this slug.</div>
    );
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-center font-semibold">
          {blog?.metadata.title}
        </h1>
      </div>
      <div className="prose max-w-4xl mx-auto prose-img:rounded-sm py-20">
        {blog?.content}
      </div>
    </div>
  );
}
