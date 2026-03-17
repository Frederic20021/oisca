import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export const BLOG_TAGS = ["事業", "イベント", "特別"] as const;
export type BlogTag = (typeof BLOG_TAGS)[number];

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  published: boolean;
  tags: BlogTag[];
};

export type BlogPost = {
  meta: BlogPostMeta;
  contentHtml: string;
};

function getPostFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

function getPublishedValue(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  return true;
}

function getTagsValue(value: unknown): BlogTag[] {
  const allowedTags = new Set<string>(BLOG_TAGS);

  if (Array.isArray(value)) {
    return value
      .filter((tag): tag is BlogTag =>
        typeof tag === "string" && allowedTags.has(tag)
      );
  }

  if (typeof value === "string") {
    return value
      .split(/[,、]/)
      .map((tag) => tag.trim())
      .filter((tag): tag is BlogTag => allowedTags.has(tag));
  }

  return [];
}

export function getSortedPostsMeta(): BlogPostMeta[] {
  const allPosts = getPostFileNames().map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: typeof data.title === "string" ? data.title : slug,
      date: typeof data.date === "string" ? data.date : "",
      excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
      coverImage:
        typeof data.coverImage === "string" ? data.coverImage : undefined,
      published: getPublishedValue(data.published),
      tags: getTagsValue(data.tags),
    };
  });

  return allPosts
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return getSortedPostsMeta().map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (!getPublishedValue(data.published)) {
    return null;
  }

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);

  return {
    meta: {
      slug,
      title: typeof data.title === "string" ? data.title : slug,
      date: typeof data.date === "string" ? data.date : "",
      excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
      coverImage:
        typeof data.coverImage === "string" ? data.coverImage : undefined,
      published: getPublishedValue(data.published),
      tags: getTagsValue(data.tags),
    },
    contentHtml: processedContent.toString(),
  };
}
