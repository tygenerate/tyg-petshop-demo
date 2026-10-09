
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pati Petshop | Mutlu Patilerin Adresi",
  description:
    "Pati Petshop — evcil hayvan ürünleri için hazırlanmış modern petshop demo web sitesi. TYGenerate tarafından tasarlanmıştır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
