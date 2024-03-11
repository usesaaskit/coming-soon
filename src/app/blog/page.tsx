import path from "path";
import * as fs from "node:fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import { BlogMetadata } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default async function BlogsPage() {
  const blogPath = path.join(process.cwd(), "/src/content/blog");
  const files = await fs.readdir(blogPath);

  // Filter out only directories
  const directories = await Promise.all(
    files.filter(async (file) => {
      const stats = await fs.stat(`${blogPath}/${file}`);
      return stats.isDirectory();
    })
  );

  let blogs: BlogMetadata[] = [];
  for (let dir of directories) {
    const source = await fs.readFile(`${blogPath}/${dir}/index.mdx`);
    const { frontmatter } = await compileMDX<BlogMetadata>({
      source: source,
      options: { parseFrontmatter: true },
    });
    blogs.push({
      ...frontmatter,
      slug: dir,
    });
  }

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-semibold">Ours Blog</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ title, slug, description, thumbnailURL }: BlogMetadata) {
  return (
    <Link key={title} href={`/blog/${slug}`} className="border rounded-md">
      <div className="aspect-[16/9]  bg-slate-200 rounded-t-md ">
        <Image src={thumbnailURL} alt={title} width={300} height={400} />
      </div>
      <div className="p-4">
        <p className="font-medium mb-1">{title}</p>
        <p className="text-slate-600 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
