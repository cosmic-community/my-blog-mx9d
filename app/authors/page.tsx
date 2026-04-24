import { getAllAuthors } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = {
  title: 'Authors - My Blog',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Authors</h1>
          <p className="text-lg text-gray-600">Meet the writers behind the stories.</p>
        </div>

        {authors.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No authors available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/authors/${author.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  {author.metadata?.profile_photo ? (
                    <img
                      src={`${author.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={author.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl">
                      {(author.metadata?.name || author.title).charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                      {author.metadata?.name || author.title}
                    </h3>
                    {author.metadata?.email && (
                      <p className="text-sm text-gray-500">{author.metadata.email}</p>
                    )}
                  </div>
                </div>
                {author.metadata?.bio && (
                  <p className="text-gray-600 text-sm line-clamp-3">{author.metadata.bio}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}