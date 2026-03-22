import Header from "./components/header";
import{ Arya } from "next/font/google";
import "./globals.css";

const arya = Arya({
  subsets: ["latin"],
  weight: ["400", "700"]
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={arya.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
