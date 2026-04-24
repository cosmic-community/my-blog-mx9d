import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryBadge from '@/components/CategoryBadge'
import Link from 'next/link'

export default async function HomePage() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-brand-600">My Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A creative portfolio by TENZIN LEKPHEL — exploring ideas, stories, and inspiration.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/posts" className="px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors">
                Read Posts
              </Link>
              <Link href="/categories" className="px-6 py-3 bg-white text-brand-600 border border-brand-600 rounded-lg font-medium hover:bg-brand-50 transition-colors">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Post</h2>
            <Link href={`/posts/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                {featuredPost.metadata?.featured_image && (
                  <div className="aspect-video md:aspect-square overflow-hidden">
                    <img
                      src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12">
                  {featuredPost.metadata?.category && (
                    <CategoryBadge category={featuredPost.metadata.category} />
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-4 group-hover:text-brand-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  {featuredPost.metadata?.excerpt && (
                    <p className="text-gray-600 text-lg mb-6">{featuredPost.metadata.excerpt}</p>
                  )}
                  {featuredPost.metadata?.author && (
                    <div className="flex items-center gap-3">
                      {featuredPost.metadata.author.metadata?.profile_photo && (
                        <img
                          src={`${featuredPost.metadata.author.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                          alt={featuredPost.metadata.author.title}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <span className="text-sm text-gray-700 font-medium">
                        {featuredPost.metadata.author.metadata?.name || featuredPost.metadata.author.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
              <Link href="/posts" className="text-brand-600 font-medium hover:text-brand-700">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {category.metadata?.name || category.title}
                  </h3>
                  {category.metadata?.description && (
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {category.metadata.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}