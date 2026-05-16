import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlagKill — Emergency Feature Flag Kill Switch for Startups",
  description: "Instantly disable features across all environments with one click. Real-time feature flag management for startup CTOs and solo founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="24a21142-abd7-407f-a4aa-4875c9b5a1cc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
