import Header from "@/components/header";
import { poppins, calSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/global.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-poppins antialiased selection:text-background  selection:bg-foreground/80 dark",
          poppins.variable,
          calSans.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
