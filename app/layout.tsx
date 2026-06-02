import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Rising Stars Football Academy",
  description:
    "Developing Tomorrow's Football Stars Today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Navbar />

  {children}

  <Footer />

  <WhatsAppButton />
</body>
    </html>
  );
}