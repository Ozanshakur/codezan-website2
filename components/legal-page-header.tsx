import Link from 'next/link'

interface LegalPageHeaderProps {
  title: string;
  description: string;
}

export function LegalPageHeader({ title, description }: LegalPageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">{title}</h1>
        <p className="text-xl text-purple-100">{description}</p>
      </div>
    </div>
  )
}

