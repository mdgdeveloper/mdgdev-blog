# Publishing System

The MDGdev Blog includes a sophisticated publishing system that respects publication dates. Posts with future dates will not appear in the blog listings until their publication date arrives.

## How It Works

The publishing system is implemented in `src/utils/blog.ts` and provides several utility functions:

### `isPostPublished(post, currentDate?)`
Checks if a single blog post is published (not future-dated).

```typescript
import { isPostPublished } from '../utils/blog';

const post = await getEntry('blog', 'my-post');
const isPublished = isPostPublished(post); // Uses current date
const isPublishedOnDate = isPostPublished(post, new Date('2025-12-25')); // Test with specific date
```

### `getPublishedPosts(posts, currentDate?)`
Filters an array of blog posts to only include published ones.

```typescript
import { getPublishedPosts } from '../utils/blog';

const allPosts = await getCollection('blog');
const publishedPosts = getPublishedPosts(allPosts);
```

### `getSortedPublishedPosts(posts, currentDate?)`
Gets published posts sorted by publication date (newest first).

```typescript
import { getSortedPublishedPosts } from '../utils/blog';

const allPosts = await getCollection('blog');
const sortedPublishedPosts = getSortedPublishedPosts(allPosts);
```

## Usage in Pages

The publishing system is automatically used in:

- **Homepage** (`src/pages/index.astro`): Shows latest 3 published posts
- **Blog Index** (`src/pages/blog/index.astro`): Shows all published posts

## Blog Post Frontmatter

Ensure your blog posts have a `pubDate` field in the frontmatter:

```yaml
---
title: 'My Blog Post'
description: 'A great blog post'
pubDate: '2025-08-10'  # YYYY-MM-DD format
# ... other fields
---
```

## Testing

To test the publishing system:

1. Create a blog post with a future date
2. Check that it doesn't appear in blog listings
3. Create a blog post with today's date or past date
4. Verify it appears in blog listings

Example test posts are included:
- `future-post-test.md` (pubDate: 2025-12-25) - Should not be visible
- `today-post-test.md` (pubDate: 2025-08-10) - Should be visible

## Date Comparison Logic

The system uses JavaScript's `Date` comparison:
- Posts with `pubDate <= currentDate` are considered published
- Posts with `pubDate > currentDate` are considered future-dated and hidden

The comparison is done at the day level, so a post published "today" will be visible regardless of the specific time.
