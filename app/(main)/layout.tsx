import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HashScrollHandler />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
