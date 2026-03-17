import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: `${post.meta.title} | ブログ`,
    description: post.meta.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
      <article className="space-y-6 sm:space-y-8">
        <header className="space-y-2 sm:space-y-3">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs text-slate-500 sm:text-sm">{post.meta.date}</p>

            {post.meta.tags.length > 0 ? (
              <div className="flex flex-wrap justify-end gap-2" aria-label="タグ">
                {post.meta.tags.map((tag) => (
                  <span
                    key={`${post.meta.slug}-${tag}`}
                    className="rounded-full bg-blue-700 px-2.5 py-1 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">{post.meta.title}</h1>
          <p className="text-sm indent-4 leading-relaxed text-slate-600 sm:text-base">{post.meta.excerpt}</p>
        </header>

        {post.meta.coverImage ? (
          <Image
            src={post.meta.coverImage}
            alt={post.meta.title}
            width={1200}
            height={630}
            className="h-auto w-full rounded-lg object-cover sm:rounded-xl"
          />
        ) : null}

        <div
          className="blog-content indent-4"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
