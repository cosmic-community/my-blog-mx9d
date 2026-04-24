import Link from 'next/link'
import { Post } from '@/types'
import CategoryBadge from './CategoryBadge'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {post.metadata?.featured_image ? (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100" />
      )}
      <div className="p-6 flex-1 flex flex-col">
        {post.metadata?.category && (
          <div className="mb-3">
            <CategoryBadge category={post.metadata.category} />
          </div>
        )}
        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {post.metadata?.title || post.title}
        </h3>
        {post.metadata?.excerpt && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
            {post.metadata.excerpt}
          </p>
        )}
        {post.metadata?.author && (
          <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
            {post.metadata.author.metadata?.profile_photo && (
              <img
                src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={post.metadata.author.title}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="text-xs text-gray-600 font-medium">
              {post.metadata.author.metadata?.name || post.metadata.author.title}
            </span>
            {post.metadata?.published_date && (
              <>
                <span className="text-gray-300 text-xs">•</span>
                <span className="text-xs text-gray-500">
                  {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}