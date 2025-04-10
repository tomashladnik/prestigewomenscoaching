import { notFound } from "next/navigation";
import { blogs } from "../blogData";

export default function BlogPost({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-48 py-12 bg-gray-50 min-h-screen">
      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
        {/* Featured Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 sm:h-80 md:h-100 rounded-lg mb-8"
        />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center text-gray-600 mb-8">
          <span className="text-sm sm:text-base">{blog.author}</span>
          <span className="mx-2">•</span>
          <span className="text-sm sm:text-base">{blog.date}</span>
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none 
            prose-headings:text-gray-900 
            prose-h1:text-4xl prose-h1:font-bold
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:font-semibold
            prose-p:text-gray-700 prose-p:my-4
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-a:text-blue-600 hover:prose-a:text-blue-800
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </section>
  );
}

