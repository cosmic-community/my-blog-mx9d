import { getAllCategories } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = {
  title: 'Categories - My Blog',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Categories</h1>
          <p className="text-lg text-gray-600">Browse posts by category.</p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No categories available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group p-8 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {category.metadata?.name || category.title}
                </h3>
                {category.metadata?.description && (
                  <p className="text-gray-600">{category.metadata.description}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}