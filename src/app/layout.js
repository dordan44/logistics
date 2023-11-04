import { Heebo } from "next/font/google";
import './globals.css'

const heebo = Heebo({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'מערך החמלים',
  description: 'by Dor Dadon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
