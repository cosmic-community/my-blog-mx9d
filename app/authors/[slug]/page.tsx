// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PostCard from '@/components/PostCard'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/authors" className="text-brand-600 font-medium hover:text-brand-700">
            ← Back to authors
          </Link>
        </div>

        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {author.metadata?.profile_photo ? (
              <img
                src={`${author.metadata.profile_photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={author.title}
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-brand-600 font-bold text-4xl shadow-lg">
                {(author.metadata?.name || author.title).charAt(0)}
              </div>
            )}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {author.metadata?.name || author.title}
              </h1>
              {author.metadata?.email && (
                <p className="text-brand-600 font-medium mb-4">{author.metadata.email}</p>
              )}
              {author.metadata?.bio && (
                <p className="text-gray-700 text-lg">{author.metadata.bio}</p>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Posts by {author.metadata?.name || author.title}
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}