import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'All Posts - My Blog',
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Posts</h1>
          <p className="text-lg text-gray-600">Browse all articles and stories.</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No posts available yet.</p>
          </div>
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