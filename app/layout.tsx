"use client";

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TON Demo</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://github.com/sahilpotdukhegriffy/telegrambotnew/blob/main/manifest-example.json">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
