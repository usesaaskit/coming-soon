import { getBlogPosts } from "@/lib/get-blog-posts";

export default async function sitemap() {
  const blogs = (await getBlogPosts()).map((post) => ({
    url: `https://www.usesaaskit.com/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://www.usesaaskit.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
