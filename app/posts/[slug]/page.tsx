// app/posts/[slug]/page.tsx
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CategoryBadge from '@/components/CategoryBadge'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = post.metadata?.tags
  const tagList = Array.isArray(tags) ? tags : (typeof tags === 'string' && tags ? tags.split(',').map(t => t.trim()) : [])

  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/posts" className="text-brand-600 font-medium hover:text-brand-700">
            ← Back to all posts
          </Link>
        </div>

        {category && (
          <div className="mb-4">
            <CategoryBadge category={category} />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.metadata?.title || post.title}
        </h1>

        {post.metadata?.excerpt && (
          <p className="text-xl text-gray-600 mb-8">{post.metadata.excerpt}</p>
        )}

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          {author && (
            <Link href={`/authors/${author.slug}`} className="flex items-center gap-3 group">
              {author.metadata?.profile_photo && (
                <img
                  src={`${author.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <div className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                  {author.metadata?.name || author.title}
                </div>
                {post.metadata?.published_date && (
                  <div className="text-sm text-gray-500">
                    {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                )}
              </div>
            </Link>
          )}
        </div>

        {post.metadata?.featured_image && (
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full rounded-2xl mb-10"
          />
        )}

        {post.metadata?.content && (
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600"
            dangerouslySetInnerHTML={{ __html: post.metadata.content }}
          />
        )}

        {tagList.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tagList.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {getMetafieldValue(tag)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}