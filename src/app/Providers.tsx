"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-mode"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
}
