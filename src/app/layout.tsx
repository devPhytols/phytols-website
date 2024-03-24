import './globals.css'

export const metadata = {
  title: 'Fernando Oliveira • Phytols',
  description: 'A self-taught full-stack developer'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
