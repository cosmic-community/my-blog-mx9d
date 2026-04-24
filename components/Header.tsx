import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span className="text-2xl">📝</span>
            <span>My Blog</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Posts
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/authors" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Authors
            </Link>
          </nav>
          <nav className="md:hidden flex items-center gap-4 text-sm">
            <Link href="/posts" className="text-gray-700 hover:text-brand-600 font-medium">Posts</Link>
            <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium">Topics</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}