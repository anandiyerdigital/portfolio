import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'Anand Iyer - Full Stack Developer ',
  description: `Discover the portfolio of Anand Iyer, a skilled full-stack developer with 5+ years of experience in creating scalable, user-friendly web applications. Specializing in JavaScript, Python, React, Next.js, and Node.js. Let's build your next project together!`,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Home</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}

          </div>

        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
