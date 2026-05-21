import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Agrawal — Full Stack Developer",
  description:
    "Full Stack Developer specializing in scalable web applications using React, Next.js, Node.js, and TypeScript. Based in Bangalore.",
  keywords: [
    "Suraj Agrawal",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "CI/CD",
    "GitHub Actions",
    "Docker",
    "WebSockets",
    "IoT",
    "Bangalore",
    "Portfolio",
  ],
  authors: [{ name: "Suraj Agrawal" }],
  openGraph: {
    title: "Suraj Agrawal — Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable web applications using React, Next.js, Node.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg`}
        style={{ color: "var(--text)" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
