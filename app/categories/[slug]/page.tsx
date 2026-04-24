// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PostCard from '@/components/PostCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/categories" className="text-brand-600 font-medium hover:text-brand-700">
            ← Back to categories
          </Link>
        </div>

        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 md:p-12 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {category.metadata?.name || category.title}
          </h1>
          {category.metadata?.description && (
            <p className="text-lg text-gray-700">{category.metadata.description}</p>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {posts.length} {posts.length === 1 ? 'Post' : 'Posts'}
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts in this category yet.</p>
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