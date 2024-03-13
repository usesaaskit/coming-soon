import { BlogMetadata } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/get-blog-posts";

export default async function BlogsPage() {
  const blogs = await getBlogPosts();

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-semibold">Our Blogs</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.title} {...blog} />)
        ) : (
          <div>Work in progress</div>
        )}
      </div>
    </div>
  );
}

function BlogCard({ title, slug, description, thumbnailURL }: BlogMetadata) {
  return (
    <Link key={title} href={`/blog/${slug}`} className="border rounded-md">
      <div className="aspect-[16/9]  bg-slate-200 rounded-t-md overflow-hidden ">
        <Image
          src={thumbnailURL}
          alt={title}
          width={300}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="font-medium mb-1">{title}</p>
        <p className="text-slate-600 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
