import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilyas Shaikh | Cloud Data Engineer Portfolio",
  description:
    "Cloud Data Engineer with 1.5+ years of experience in building scalable ETL pipelines using Azure, SQL, Python, Spark, Delta Lake, and Airflow. Explore my projects, certifications, and experience.",
  keywords: [
    "Ilyas Shaikh",
    "Cloud Data Engineer",
    "Data Engineer",
    "ETL Pipelines",
    "Apache Airflow",
    "Apache Spark",
    "Azure",
    "Python",
    "SQL",
    "Delta Lake",
    "Portfolio",
  ],
  authors: [{ name: "Ilyas Shaikh" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☁️</text></svg>",
  },
  openGraph: {
    title: "Ilyas Shaikh | Cloud Data Engineer",
    description:
      "Cloud Data Engineer specializing in scalable ETL pipelines, Airflow, Spark, and Azure. View my portfolio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilyas Shaikh | Cloud Data Engineer",
    description:
      "Cloud Data Engineer specializing in scalable ETL pipelines, Airflow, Spark, and Azure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
