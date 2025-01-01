import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavBar from "@/components/SideNavbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-full bg-white text-[#374151] flex text-base font-bold",
          inter.className
        )}
      >
        <SidebarProvider>
          <AppSidebar />
          {/* <SideNavBar /> */}
          <div className="p-8 w-full bg-[#FCFCFD]">
            <SidebarTrigger />
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
