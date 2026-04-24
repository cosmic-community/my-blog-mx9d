export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span>📝</span> My Blog
            </h3>
            <p className="text-sm">A creative portfolio by TENZIN LEKPHEL.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/posts" className="hover:text-white transition-colors">All Posts</a></li>
              <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="/authors" className="hover:text-white transition-colors">Authors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">About</h4>
            <p className="text-sm">Built with Next.js & Cosmic CMS. © {new Date().getFullYear()} My Blog.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}