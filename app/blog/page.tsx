import Link from "next/link";
import Image from "next/image";
import { getSortedPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "ブログ | 大和教育財団",
  description: "活動やお知らせをブログで発信しています。",
};

export default function BlogPage() {
  const posts = getSortedPostsMeta();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-12 bg-white">
      <section className="mb-10">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">ブログ</h1>
      </section>

      {posts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-700 sm:text-base">
          まだ投稿がありません。content/posts に .md ファイルを追加してください。
        </p>
      ) : (
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="h-44 w-full object-cover sm:h-52"
                />
              ) : null}

              <div className="space-y-3 p-5 sm:space-y-4 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs text-slate-500 sm:text-sm">{post.date}</p>

                  {post.tags.length > 0 ? (
                    <div className="flex flex-wrap justify-end gap-2" aria-label="タグ">
                      {post.tags.map((tag) => (
                        <span
                          key={`${post.slug}-${tag}`}
                          className="rounded-full bg-blue-700 px-2.5 py-1 text-xs font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">{post.title}</h2>
                <p className="text-sm indent-4 leading-relaxed text-slate-600 sm:text-base">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex text-xs font-medium text-blue-700 hover:underline sm:text-sm"
                >
                  記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
