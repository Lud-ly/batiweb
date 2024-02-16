import { Header } from "~/src/components/Header/Header";
import "./globals.css";
import Footer from "~/src/components/Footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 rounded-full">
        <Header />
        <div className="bg-gray-200 p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
