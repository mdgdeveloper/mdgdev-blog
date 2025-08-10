import type { CollectionEntry } from 'astro:content';

/**
 * Check if a blog post is published (not future-dated)
 * @param post Blog post to check
 * @param currentDate Optional current date for testing (defaults to now)
 * @returns true if the post is published, false otherwise
 */
export function isPostPublished(
  post: CollectionEntry<'blog'>,
  currentDate: Date = new Date()
): boolean {
  const pubDate = new Date(post.data.pubDate);
  // Only include posts where publication date is today or in the past
  return pubDate <= currentDate;
}

/**
 * Filter blog posts to only include published posts (not future-dated)
 * @param posts Array of blog posts
 * @param currentDate Optional current date for testing (defaults to now)
 * @returns Array of published blog posts
 */
export function getPublishedPosts(
  posts: CollectionEntry<'blog'>[],
  currentDate: Date = new Date()
): CollectionEntry<'blog'>[] {
  return posts.filter(post => isPostPublished(post, currentDate));
}

/**
 * Get blog posts sorted by publication date (newest first) and filtered for published only
 * @param posts Array of blog posts
 * @param currentDate Optional current date for testing (defaults to now)
 * @returns Array of published blog posts sorted by date
 */
export function getSortedPublishedPosts(
  posts: CollectionEntry<'blog'>[],
  currentDate: Date = new Date()
): CollectionEntry<'blog'>[] {
  const publishedPosts = getPublishedPosts(posts, currentDate);
  return publishedPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
