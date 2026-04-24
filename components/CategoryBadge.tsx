import Link from 'next/link'
import { Category } from '@/types'

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full hover:bg-brand-200 transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      {category.metadata?.name || category.title}
    </Link>
  )
}