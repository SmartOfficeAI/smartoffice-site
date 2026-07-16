import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartofficeai.com.br"),
  title: {
    default: "SmartOffice AI | IA, Automação e Documentos Inteligentes",
    template: "%s | SmartOffice AI",
  },
  description:
    "Soluções corporativas de inteligência artificial, automação inteligente e gestão documental.",
  keywords: [
    "SmartOffice AI",
    "SmartFile",
    "inteligência artificial",
    "automação",
    "RPA",
    "Power Platform",
    "OCR",
    "RAG",
    "gestão documental",
  ],
  openGraph: {
    title: "SmartOffice AI",
    description: "Transformando documentos em inteligência.",
    url: "https://smartofficeai.com.br",
    siteName: "SmartOffice AI",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
