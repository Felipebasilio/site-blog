import { Footer, Header } from "@/components";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={`relative flex min-h-screen flex-col bg-gray-700 ${inter.variable}`}>
      <Header />
      <main className={cn("flex-1 flex flex-col mb-12", className)}>{children}</main>
      <Footer />
    </div>
  );
};