import { Inter, Poppins, Khand } from "next/font/google";
import "./globals.css";
import NextProvider from '@/provider/NextProvider';

const khand = Khand({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Viksit Bharat",
  description: "Viksit Bharat Shaheed Rajguru College of Applied Sciences for Women, University of Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={khand.className}>

      <body className={khand.className}>
        <NextProvider> {children} </NextProvider>
      </body>
    </html>
  )
}
