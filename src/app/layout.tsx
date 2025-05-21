import "../styles/globals.css";

import { Providers } from "./Providers";

export const metadata = {
  title: "Balaji.dev",
  description: "AI/ML Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}