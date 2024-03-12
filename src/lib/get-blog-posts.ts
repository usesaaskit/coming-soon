import * as fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { BlogMetadata } from "@/types";
import { BLOG_DIR_LOCATION } from "@/constant";

export async function getBlogPosts() {
  const files = fs.readdirSync(BLOG_DIR_LOCATION);

  // Filter out only directories
  const directories = files.filter(async (file) => {
    const stats = fs.statSync(`${BLOG_DIR_LOCATION}/${file}`);
    return stats.isDirectory();
  });

  let blogs: BlogMetadata[] = [];
  for (let dir of directories) {
    const source = fs.readFileSync(`${BLOG_DIR_LOCATION}/${dir}/index.mdx`);
    const { frontmatter } = await compileMDX<BlogMetadata>({
      source: source,
      options: { parseFrontmatter: true },
    });
    blogs.push({
      ...frontmatter,
      slug: dir,
    });
  }

  // sort the blog by date
  blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return blogs;
}
