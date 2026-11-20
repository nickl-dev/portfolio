import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.tagline
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
