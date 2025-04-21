import './globals.css'
import DarkModeToggle from '../components/DarkModeToggle'

export const metadata = {
  title: 'سایت چندفروشندگی',
  description: 'یک سایت چندفروشندگی به زبان فارسی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="p-4 flex justify-end">
          <DarkModeToggle />
        </header>
        {children}
      </body>
    </html>
  )
}
