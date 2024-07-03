import './globals.css'

export const metadata = {
  title: 'BestWay',
  description: 'Search for any topic learning resources',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 p-4 mb-16">{children}</body>
    </html>
  )
}
